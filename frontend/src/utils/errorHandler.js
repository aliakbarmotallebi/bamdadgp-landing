// import Swal from "sweetalert2";

export const handleApiResponse = (response, type) => {
  if (response.status >= 500) {
    throw new Error('خطای سرور! لطفا بعدا امتحان کنید.')
  }

  // if(response.status === 401){
  //     Swal.fire({
  //         icon:'error',
  //         title:rejectResponse[0].Message,
  //         text:'برای دسترسی به این بخش نیاز است که وارد حساب کاربری خود شوید',
  //         confirmButtonText:'بستن'
  //     })
  //     throw new Error(rejectResponse[0])
  // }

  // if(response.status === 403){
  //     Swal.fire({
  //         icon:'error',
  //         title:rejectResponse[0].Message,
  //         text:'اجازه دسترسی به این بخش را ندارید',
  //         confirmButtonText:'بستن'
  //     })
  //     throw new Error(rejectResponse[0])
  // }

  return NextResponse.json({ status: 200, data: response.data })
}
