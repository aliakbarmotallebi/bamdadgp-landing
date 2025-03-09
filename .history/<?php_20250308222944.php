<?php
session_start();
//ini_set("error_reporting", "E_ALL");
ini_set("display_errors", 0);
if ($_POST["Action"]) {
    $action = $_POST["Action"];
    $myCookie = $_COOKIE["_PRODUCT"];

    include "../config.php";
    global $conn;
    global $today;

    switch ($action) {

        case "CheckCoupon":
            $token = $_COOKIE["_PRODUCT"];
            $priceResult = mysqli_query($conn, "select sum(FinalPrice) as TotalPrice from CustomerBasket where CustomerToken='$token' and MainRecord=1 ");
            $priceRow = $priceResult->fetch_assoc();
            $totalPrice = $priceRow["TotalPrice"];
            $discount = 0;
            $result = array();
            $CouponCode = $_POST["CouponCode"];
            $result = mysqli_query($conn, "select * from Coupon where CouponCode='$CouponCode' and ExpireDate >= '$today'");
            if ($result->num_rows == 1) {
                $row = $result->fetch_assoc();
                switch ($row["CouponType"]) {
                    case "1":
                        $discount = ($totalPrice * $row["Price"]) / 100;
                        $result = ["Result" => "success", "Discount" => number_format($discount), "TotalPrice" => number_format($totalPrice - $discount)];
                        $_SESSION["OrderDiscount"]["Price"] = $discount;
                        $_SESSION["OrderDiscount"]["Code"] = $CouponCode;
                        break;

                    case "2":
                        $discount = $totalPrice - $row["Price"];
                        $result = ["Result" => "success", "TotalPrice" => number_format($discount), "Discount" => number_format($totalPrice - $discount)];
                        $_SESSION["OrderDiscount"]["Price"] = $totalPrice - $discount;
                        $_SESSION["OrderDiscount"]["Code"] = $CouponCode;
                        break;
                }
            } else {
                $result = ["Result" => "expire", "Discount" => $discount, "TotalPrice" => $totalPrice];
            }

            echo json_encode($result);
            return false;
            break;

        case "AddToCartInd":
            $ProductId = base64_decode($_POST["ProductId"]);
            $customerId = $_SESSION["MaxOffStoreData"]["CustomerId"] ?? 'NULL';
            $selectedOption = $_POST["SelectedOption"];
            //print_r($selectedOption);
            $selectedIndPrice = null;
            $indPrice = 0;
            $ProductPrice = 0;
            $productName = null;

            foreach ($selectedOption as $index => $value) {
                if ($value["value"] != 'noValue' && $value["quantity"] != 0) {
                    $indResult = mysqli_query($conn, "select SpecialPrice,SinglePrice,Price,ProductName from Product where ProductID='" . $value["value"] . "' ");
                    if ($conn->affected_rows > 0) {
                        $indRow = $indResult->fetch_assoc();
                        $selectedIndPrice += ($indRow["Price"] * $value["quantity"]);
                        $indPrice = $indRow["Price"];
                        $productName = $indRow["ProductName"];
                        mysqli_query($conn, "insert into CustomerBasket (CustomerToken,ProductID,NewCommodityID,NewCommodityPrice,NewCommodityName,FinalPrice,MainRecord,Quantity,CustomerID) 
values ('$myCookie',$ProductId," . $value["value"] . ",$indPrice,'$productName'," . $indPrice * $value["quantity"] . ",0," . $value["quantity"] . ",$customerId)");
                    }
                }
            }

            $qty = $_POST["Qty"] ?? 1;
            $result = mysqli_query($conn, "select ProductName,Price,IndependentGroup,DefaultTotal,MaxTotal,SinglePrice,SpecialPrice from ProductView where ProductID='$ProductId'");
            $row = $result->fetch_assoc();
            $ProductName = $row["ProductName"];
            $singlePrice = $row["SinglePrice"];
            $specialPrice = $row["SpecialPrice"];

            if ($specialPrice > 0) {
                $ProductPrice = $specialPrice;
            } elseif ($singlePrice > 0) {
                $ProductPrice = $singlePrice;
            } else {
                $ProductPrice = $row["Price"];
            }
            $minOrder = $row['DefaultTotal'];
            $maxOrder = $row['MaxTotal'];
            if ($qty < $minOrder) {
                echo $err = "حداقل سفارش می بایست <b>" . $minOrder . "</b> عدد باشد.";
                return false;
            }
            if ($maxOrder > 0) {
                if ($qty > $maxOrder) {
                    echo $err = "حداکثر سفارش می بایست <b>" . $maxOrder . "</b> عدد باشد.";
                    return false;
                }
            }
            //echo $ProductPrice + $selectedIndPrice;
            $FinalPrice = ($ProductPrice + $selectedIndPrice) * $qty;

            mysqli_query($conn, "insert into CustomerBasket (CustomerToken,ProductID,ProductPrice,ProductName,FinalPrice,MainRecord,Quantity,CustomerID) 
values ('$myCookie','$ProductId',$ProductPrice,'$ProductName','$FinalPrice',1,$qty,$customerId)");
            if ($conn->affected_rows == 1) {
                echo "success";
                $_SESSION["msgSuccess"] = "محصول با موفقیت به سبد خرید شما اضافه شد. <a class='text-primary fw-bold' href='/page/cart/" . $myCookie . "'>مشاهده سبد خرید</a>";
            } else {
                echo $conn->error;
            }

            return false;
            break;

        case "AddToCart":
            $myCookie = $_POST["Token"];
            if ($myCookie == '') {
                $_SESSION["msgError"] = 'خطا در ارسال توکن، لطفا مجددا سعی نمایید.';
                ReturnBack();
            } else {
                $ProductId = base64_decode($_POST["ProductId"]);
                $qty = $_POST["Qty"] ?? 1;
                $result = mysqli_query($conn, "select ProductName,Price,IndependentGroup,DefaultTotal,MaxTotal,SinglePrice,SpecialPrice from ProductView where ProductID='$ProductId'");
                $row = $result->fetch_assoc();
                $ProductName = $row["ProductName"];
                $customerId = $_SESSION["MaxOffStoreData"]["CustomerId"] ?? 'NULL';
                $specialPrice = $row["SpecialPrice"];
                $singlePrice = $row["SinglePrice"];
                if ($specialPrice > 0) {
                    $ProductPrice = $specialPrice;
                } elseif ($singlePrice > 0) {
                    $ProductPrice = $singlePrice;
                } else {
                    $ProductPrice = $row["Price"];
                }
                $minOrder = $row['DefaultTotal'];
                $maxOrder = $row['MaxTotal'];
                if ($qty < $minOrder) {
                    echo $err = "حداقل سفارش می بایست <b>" . $minOrder . "</b> عدد باشد.";
                    return false;
                }
                if ($maxOrder > 0) {
                    if ($qty > $maxOrder) {
                        echo $err = "حداکثر سفارش می بایست <b>" . $maxOrder . "</b> عدد باشد.";
                        return false;
                    }
                }

                $FinalPrice = $ProductPrice;
                $DifferencePrice = 0;
                // Check Cookie Storage

                mysqli_query($conn, "insert into CustomerBasket (CustomerToken,ProductID,ProductPrice,ProductName,DifferencePrice,FinalPrice,MainRecord,Quantity,CustomerID) 
values ('$myCookie','$ProductId','$ProductPrice','$ProductName','$DifferencePrice','$FinalPrice',1,$qty,$customerId)");
                if ($conn->affected_rows == 1) {
                    echo "success";
                    $_SESSION["msgSuccess"] = "محصول با موفقیت به سبد خرید شما اضافه شد. <a class='text-primary fw-bold' href='/page/cart/" . $myCookie . "'>مشاهده سبد خرید</a>";
                } else {
                    echo $conn->error;
                }
            }
            exit();
            break;

        case "PayOrder":

        case "PayOrder":
            $token = $_COOKIE["_PRODUCT"];
            $shippingPrice = $_SESSION["ShippingPrice"];
            $shippingMethod = $_SESSION["ShippingMethod"];
            $receipt = $_SESSION["Receipt"] ?? null;

            if (!isset($_POST['PaymentMethod'])) {
                $_SESSION["msgError"] = "موارد الزامی را انتخاب کنید";
                header("Location: " . $_SERVER['HTTP_REFERER']);
                exit();
            }

            if ($_POST['PaymentMethod'] == 'ManualPayment' && $receipt == null) {
                $_SESSION["msgError"] = "تصویر فیش واریز آپلود نشده است";
                header("Location: " . $_SERVER['HTTP_REFERER']);
                exit();
            }

            if (isset($_SESSION["MaxOffStoreData"])) {
                $customerId = $_SESSION["MaxOffStoreData"]["CustomerId"];
            } else {
                $customerId = 'NULL';
            }

            $result = mysqli_query($conn, "SELECT CustomerBasket.*, ProductView.ImageSrc 
                                    FROM CustomerBasket 
                                    LEFT JOIN ProductView ON ProductView.ProductID = CustomerBasket.ProductID 
                                    WHERE CustomerBasket.CustomerToken = '$token' AND CustomerBasket.MainRecord = 1");

            $date = date('Y-m-d H:i:s');
            define('_TRACK_NUMBER', strtotime($date));
            $subTotal = 0;
            $quantity = 0;

            while ($row = $result->fetch_assoc()) {
                $productId = $row["ProductID"];
                $subTotal += $row["FinalPrice"];
                $quantity += $row["Quantity"];
            }

            if (isset($_SESSION["OrderDiscount"])) {
                $subTotal = ($subTotal - $_SESSION["OrderDiscount"]["Price"]) + $shippingPrice;
            } else {
                $_SESSION["OrderDiscount"]["Price"] = 0;
                $_SESSION["OrderDiscount"]["Code"] = 'NULL';
                $subTotal += $shippingPrice;
            }

            mysqli_query($conn, "INSERT INTO Orders (ShippingMethod, ShippingPrice, TrackingNumber, CustomerID, CustomerToken, TotalPrice, InsertDateTime, TotalQuantity, DiscountPrice, DiscountCode, Receipt) 
                        VALUES ('$shippingMethod', '$shippingPrice', '" . _TRACK_NUMBER . "', '$customerId', '$token', '$subTotal', '$date', '$quantity', 
                                '" . $_SESSION["OrderDiscount"]["Price"] . "', '" . $_SESSION["OrderDiscount"]["Code"] . "', '" . $_SESSION["Receipt"] . "')");

            if ($conn->affected_rows > 0) {
                unset($_SESSION['Receipt']);
                mysqli_query($conn, "UPDATE CustomerBasket SET TrackingNumber='" . _TRACK_NUMBER . "' WHERE CustomerToken='$token'");

                if ($conn->affected_rows > 0) {

                    $oldBasket = mysqli_query($conn, "SELECT * FROM CustomerBasket WHERE CustomerToken='$token'");
                    while ($oldRow = mysqli_fetch_assoc($oldBasket)) {
                        $customerID = isset($oldRow["CustomerID"]) ? "'{$oldRow["CustomerID"]}'" : "NULL";
                        $productPrice = isset($oldRow["ProductPrice"]) ? "'{$oldRow["ProductPrice"]}'" : "NULL";
                        $newCommodityID = isset($oldRow["NewCommodityID"]) ? "'{$oldRow["NewCommodityID"]}'" : "NULL";
                        $newCommodityPrice = isset($oldRow["NewCommodityPrice"]) ? "'{$oldRow["NewCommodityPrice"]}'" : "NULL";
                        $defaultCommodityID = isset($oldRow["DefaultCommodityID"]) ? "'{$oldRow["DefaultCommodityID"]}'" : "NULL";
                        $defaultCommodityPrice = isset($oldRow["DefaultCommodityPrice"]) ? "'{$oldRow["DefaultCommodityPrice"]}'" : "NULL";
                        $differencePrice = isset($oldRow["DifferencePrice"]) ? "'{$oldRow["DifferencePrice"]}'" : "NULL";

                        $query = "INSERT INTO OrdersDetail (CustomerToken, CustomerID, ProductID, ProductPrice, ProductName, Quantity, NewCommodityID, NewCommodityPrice, NewCommodityName, 
                                    DefaultCommodityID, DefaultCommodityName, DefaultCommodityPrice, DifferencePrice, FinalPrice, MainRecord, TrackingNumber, DefaultTotal, NotifyAdmin) 
          VALUES (
              '{$oldRow["CustomerToken"]}', 
              $customerID, 
              '{$oldRow["ProductID"]}', 
              $productPrice, 
              '{$oldRow["ProductName"]}', 
              '{$oldRow["Quantity"]}', 
              $newCommodityID, 
              $newCommodityPrice, 
              '{$oldRow["NewCommodityName"]}', 
              $defaultCommodityID, 
              '{$oldRow["DefaultCommodityName"]}', 
              $defaultCommodityPrice, 
              $differencePrice, 
              '{$oldRow["FinalPrice"]}', 
              '{$oldRow["MainRecord"]}', 
              '" . _TRACK_NUMBER . "', 
              '{$oldRow["DefaultTotal"]}', 
              0)";

                        $result = mysqli_query($conn, $query);

                        if (!$result) {
                            echo mysqli_error($conn);
                        }
                    }

                    if ($conn->affected_rows > 0) {

                        mysqli_query($conn, "INSERT INTO OrdersInformation (TrackingNumber, ProvinceID, CityID, FullName, ZipCode, Mobile, PostalAddress) 
                                    VALUES ('" . _TRACK_NUMBER . "', 
                                            '{$_SESSION["MaxOffShipping"]["ProvinceID"]}', 
                                            '{$_SESSION["MaxOffShipping"]["CityID"]}', 
                                            '{$_SESSION["MaxOffShipping"]["DeliverPerson"]}', 
                                            '{$_SESSION["MaxOffShipping"]["ZipCode"]}', 
                                            '{$_SESSION["MaxOffShipping"]["DeliverPhone"]}', 
                                            '{$_SESSION["MaxOffShipping"]["Address"]}')");

                        if ($conn->errno === 0) {
                            $_SESSION['orderTrackNumber'] = _TRACK_NUMBER;
                            $_SESSION["orderMsgSuccess"] = "سفارش شما با کد رهگیری <span class='fw-bold fs-5'>" . _TRACK_NUMBER . "</span> با موفقیت ثبت شد.";
                            mysqli_data_seek($result, 0);
                            while ($basketRow = $result->fetch_assoc()) {
                                $productId = $basketRow["ProductID"];
                                $quantity = $basketRow["Quantity"];

                                // کم کردن تعداد خریداری شده از موجودی محصول
                                mysqli_query($conn, "UPDATE product SET Stock = GREATEST(Stock - $quantity, 0) WHERE ProductID = '$productId'");
                                if ($conn->affected_rows == 0) {
                                    echo "خطا در بروز رسانی موجودی محصول.";
                                }
                                //
                            }
                            SendOrderSMS($_SESSION["MaxOffStoreData"]["UserName"], _TRACK_NUMBER);
                            mysqli_query($conn, "DELETE FROM CustomerBasket WHERE CustomerToken='$token'");

                            if ($_POST['PaymentMethod'] == 'PaymentGateway') {
                                require_once __DIR__ . '/PaymentGateway.php';
                                $orderId = _TRACK_NUMBER;
                                $amount = $subTotal;
                                $userId = $_SESSION["MaxOffStoreData"]["CustomerId"];

                                $query = "INSERT INTO Transactions (order_id, user_id, amount, status, tracking_number, created_at) 
								  VALUES ('$orderId', '$userId', '$amount', 'pending', '$orderId', NOW())";
                                mysqli_query($conn, $query);

                                $gateway = new PaymentGateway();
                                $response = $gateway->requestPayment($amount, $orderId);

                                if ($response["status"] === "success") {
                                    $transid = $response["transid"];

                                    $query = "UPDATE Transactions SET transid='$transid' WHERE order_id='$orderId'";
                                    mysqli_query($conn, $query);

                                    $gateway->redirectToGateway($transid);
                                    die;
                                } else {
                                    echo "error payment: " . $response["code"];
                                    exit();
                                }
                            } else {
                                echo "done";
                            }
                        } else {
                            mysqli_query($conn, "DELETE FROM OrdersDetail WHERE TrackingNumber='" . _TRACK_NUMBER . "'");
                            mysqli_query($conn, "DELETE FROM Orders WHERE TrackingNumber='" . _TRACK_NUMBER . "'");
                            echo $conn->error;
                        }
                    } else {
                        mysqli_query($conn, "DELETE FROM Orders WHERE TrackingNumber='" . _TRACK_NUMBER . "'");
                    }
                } else {
                    mysqli_query($conn, "DELETE FROM Orders WHERE TrackingNumber='" . _TRACK_NUMBER . "'");
                }
            } else {
                echo $conn->error;
            }

            exit();
            break;



        case "RemoveItem":
            $productId = $_POST["ProductID"];
            mysqli_query($conn, "delete from CustomerBasket where CustomerToken='$myCookie' and ProductID='$productId' ");
            $_SESSION["msgSuccess"] = "محصول با موفقیت از سبد خرید شما حذف شد.";
            break;

        case "UpdateQuantity":
            $ProductID = $_POST["ProductID"];
            echo $Quantity = $_POST["Quantity"];
            $result = mysqli_query($conn, "select DefaultTotal,MaxTotal from ProductView where ProductID=$ProductID");
            $row = $result->fetch_assoc();
            $minOrder = $row['DefaultTotal'];
            $maxOrder = $row['MaxTotal'];
            if ($Quantity < $minOrder) {
                $_SESSION['msgError'] = "حداقل سفارش می بایست <b>" . $minOrder . "</b> عدد باشد.";
                return false;
            }
            if ($maxOrder > 0) {
                if ($Quantity > $maxOrder) {
                    $_SESSION['msgError'] = "حداکثر سفارش می بایست <b>" . $maxOrder . "</b> عدد باشد.";
                    return false;
                }
            }
            mysqli_query($conn, "update CustomerBasket Set Quantity='$Quantity' where ProductID='$ProductID' and MainRecord=1 and CustomerToken='$myCookie' ");
            if ($conn->affected_rows > 0) {
                echo 'Success';
            }
            return false;
            break;
    }
}

function CartToCart($OrderNumber)
{
    $allowedExtensions = ['jpg', 'jpeg', 'png', 'webp'];
    $maxFileSize = 512000; // 500 KB
    $fileName = $_FILES["File"]["name"];
    $fileSize = $_FILES["File"]["size"];
    $fileTmpPath = $_FILES["File"]["tmp_name"];
    $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

    if (!in_array($fileExtension, $allowedExtensions)) {
        $_SESSION["msgError"] = "فرمت فایل معتبر نیست. فقط jpg, jpeg, png, webp مجاز هستند.";
        header("Location: " . $_SERVER['HTTP_REFERER']);
        exit;
    }

    if ($fileSize > $maxFileSize) {
        $_SESSION["msgError"] = "حجم فایل بیش از 500 کیلوبایت است.";
        header("Location: " . $_SERVER['HTTP_REFERER']);
        exit;
    }

    $file = 'receipt_' . strtotime(date("Y-m-d H:i:s")) . "_" . $_FILES["File"]["name"];
    $customerId = $_SESSION["MaxOffStoreData"]["CustomerId"];
    $destination = "../file/receipt/" . $file;
    $upload = move_uploaded_file($_FILES["File"]["tmp_name"], $destination);
    if ($upload && $OrderNumber) {
        mysqli_query($conn, "update Orders set Receipt='$file' where TrackingNumber='$OrderNumber' and CustomerID=$customerId ");
        if ($conn->affected_rows > 0) {
            $_SESSION["msgSuccess"] = SuccessOperationMessage;
        }
        header("Location: /page/MyAccount/order");
    } else if ($upload) {
        $_SESSION["msgSuccess"] = 'فیش واریز با موفقیت ارسال شد';
        $_SESSION["Receipt"] = $file;
        header("Location: " . $_SERVER['HTTP_REFERER']);
    }
}
ReturnBack();
