export default function Orders() {
  return (
    <>
      <main>
        <div class="container mx-auto">
          <div class="mx-4 lg:mx-0">
            <div class="flex justify-between py-4 items-center my-4">
              <div class="font-bold text-3xl flex flex-col gap-1">
                <p class="text-green-900">پروفایل کاربر</p>
                <div class="flex flex-col lg:flex-row gap-2">
                  <div class="flex items-center">
                    <p class="text-sm text-gray-400 font-semibold">
                      شناسه کاربر:
                    </p>
                    <p class="text-sm font-semibold text-gray-700 pr-1">
                      UD003054
                    </p>
                  </div>
                  <div class="flex">
                    <p class="text-sm text-gray-400 font-semibold">
                      آخرین ورود:
                    </p>
                    <p class="text-sm font-semibold text-gray-700 pr-1">
                      21 آبان 1402 01:02 بعد از ظهر
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <button class="px-4 h-10 justify-center hover:text-green-900 items-center flex gap-3 border text-slate-600 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="inline stroke-current"
                    width="20"
                    height="20"
                    fill="none"
                    viewbox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="m10 16 4-4-4-4"
                    ></path>
                  </svg>
                  <p class="font-bold text-sm">بازگشت</p>
                </button>
              </div>
            </div>
            <div class="w-full flex">
              <div class="w-full border rounded-xl">
                <div class="border-b flex justify-between items-center px-5">
                  <ul class="flex flex-col md:flex-row items-stretch lg:items-center lg:items-start gap-5 w-full">
                    <li class="flex py-5 items-center font-bold text-sm gap-2 hover:text-green-700 relative hover:border-b-2 border-green-700 text-slate-600">
                      <svg
                        class="inline stroke-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewbox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M18.364 5.636A9 9 0 1 1 5.636 18.364 9 9 0 0 1 18.364 5.636"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M17.307 19.257C16.923 17.417 14.705 16 12 16c-2.705 0-4.923 1.417-5.307 3.257m7.428-11.378A3 3 0 1 1 9.88 12.12a3 3 0 0 1 4.24-4.24"
                        ></path>
                      </svg>
                      پروفایل
                      <a
                        href="./profile.html"
                        class="absolute top-0 left-0 w-full h-full"
                      ></a>
                    </li>
                    <li class="flex py-5 text-slate-600 items-center font-bold text-sm gap-2 relative hover:text-green-700 hover:border-b-2 border-green-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewbox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                      </svg>
                      آدرس
                      <a
                        href="./profile-addres.html"
                        class="absolute top-0 left-0 w-full h-full"
                      ></a>
                    </li>
                    <li class="flex py-5 text-green-700 items-center font-bold text-sm gap-2 relative hover:text-green-700 border-b-2 hover:border-b-2 border-green-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewbox="0 0 256 256"
                      >
                        <path d="M134,120v56a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0ZM237.88,97.85,224,201.85A14,14,0,0,1,210.13,214H45.87A14,14,0,0,1,32,201.85l-13.87-104A14,14,0,0,1,32,82H69.28l54.2-61.95a6,6,0,0,1,9,0l54.2,62H224a14,14,0,0,1,13.87,15.85ZM85.22,82h85.56L128,33.11ZM225.5,94.68A2,2,0,0,0,224,94H32a2,2,0,0,0-1.51.68A2,2,0,0,0,30,96.26l13.86,104a2,2,0,0,0,2,1.73H210.13a2,2,0,0,0,2-1.73L226,96.26A1.93,1.93,0,0,0,225.5,94.68ZM181.4,114a6,6,0,0,0-6.57,5.37l-5.6,56A6,6,0,0,0,174.6,182l.61,0a6,6,0,0,0,6-5.4l5.6-56A6,6,0,0,0,181.4,114ZM81.17,119.4a6,6,0,0,0-11.94,1.2l5.6,56a6,6,0,0,0,6,5.4l.61,0a6,6,0,0,0,5.37-6.57Z"></path>
                      </svg>
                      سفارش ها
                      <a
                        href="./profile-order.html"
                        class="absolute top-0 left-0 w-full h-full"
                      ></a>
                    </li>
                    <li class="flex py-5 text-slate-600 items-center font-bold text-sm gap-2 relative hover:text-green-700 hover:border-b-2 border-green-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewbox="0 0 24 24"
                        fill="currentColor"
                        width="20"
                        height="20"
                      >
                        <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                      </svg>
                      علاقه مندی ها
                      <a
                        href="./profile-favorites.html"
                        class="absolute top-0 left-0 w-full h-full"
                      ></a>
                    </li>
                    <li class="flex py-5 text-slate-600 items-center font-bold text-sm gap-2 relative hover:text-green-700 hover:border-b-2 border-green-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewbox="0 0 256 256"
                      >
                        <path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM84,118a10,10,0,1,0,10,10A10,10,0,0,0,84,118Zm88,0a10,10,0,1,0,10,10A10,10,0,0,0,172,118Zm58,10A102,102,0,0,1,79.31,217.65L44.44,229.27a14,14,0,0,1-17.71-17.71l11.62-34.87A102,102,0,1,1,230,128Zm-12,0A90,90,0,1,0,50.08,173.06a6,6,0,0,1,.5,4.91L38.12,215.35a2,2,0,0,0,2.53,2.53L78,205.42a6.2,6.2,0,0,1,1.9-.31,6.09,6.09,0,0,1,3,.81A90,90,0,0,0,218,128Z"></path>
                      </svg>
                      نظرات من
                      <a
                        href="./profile-comments.html"
                        class="absolute top-0 left-0 w-full h-full"
                      ></a>
                    </li>
                    <li class="md:mr-auto flex py-5 text-slate-600 items-center font-bold text-sm gap-2 relative hover:text-red-600 hover:border-b-2 border-red-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewbox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"></path>
                      </svg>
                      خروج از حساب کابری
                      <a
                        href=""
                        class="absolute top-0 left-0 w-full h-full"
                      ></a>
                    </li>
                  </ul>
                </div>
                <div class="px-5 mt-4 w-full gap-8 flex flex-col">
                  <div class="flex flex-col gap-2">
                    <p class="text-xl text-green-900 font-bold">
                      سفارش های شما
                    </p>
                  </div>
                  <div class="w-full mx-auto">
                    <div class="relative overflow-x-auto">
                      <table class="w-full text-sm text-right text-gray-600">
                        <thead class="text-xs text-gray-700 border-b border-gray-200">
                          <tr>
                            <th scope="col" class="px-6 py-3">
                              شماره سفارش
                            </th>
                            <th scope="col" class="px-6 py-3">
                              تاریخ ثبت سفارش
                            </th>
                            <th scope="col" class="px-6 py-3">
                              وضعیت
                            </th>
                            <th scope="col" class="px-6 py-3">
                              مجموع
                            </th>
                            <th scope="col" class="px-6 py-3">
                              جزئیات
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="hover:bg-gray-100 transition text-xs border-b">
                            <th scope="row" class="px-6 py-4 font-medium">
                              G45266TY45H
                            </th>
                            <td class="px-6 py-4">1402/12/05</td>
                            <td class="lg:px-6 py-4 text-red-500">
                              در انتظار پرداخت
                            </td>
                            <td class="px-6 py-4">750,000 تومان</td>
                            <td class="px-6 py-4 w-6 h-6">
                              <div class="relative transition-all w-6 h-6 hover:text-red-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewbox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                                </svg>
                                <a
                                  href=""
                                  class="absolute top-0 left-0 h-full w-full"
                                ></a>
                              </div>
                            </td>
                          </tr>
                          <tr class="hover:bg-gray-100 transition text-xs border-b">
                            <th scope="row" class="px-6 py-4 font-medium">
                              Y422663Y4FR
                            </th>
                            <td class="px-6 py-4">1402/12/04</td>
                            <td class="lg:px-6 py-4 text-green-500">
                              پرداخت شده
                            </td>
                            <td class="px-6 py-4">360,000 تومان</td>
                            <td class="px-6 py-4 w-6 h-6">
                              <div class="relative transition-all w-6 h-6 hover:text-red-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewbox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                                </svg>
                                <a
                                  href=""
                                  class="absolute top-0 left-0 h-full w-full"
                                ></a>
                              </div>
                            </td>
                          </tr>
                          <tr class="hover:bg-gray-100 transition text-xs border-b">
                            <th scope="row" class="px-6 py-4 font-medium">
                              Y422663Y4FR
                            </th>
                            <td class="px-6 py-4">1402/12/04</td>
                            <td class="lg:px-6 py-4 text-green-500">
                              پرداخت شده
                            </td>
                            <td class="px-6 py-4">360,000 تومان</td>
                            <td class="px-6 py-4 w-6 h-6">
                              <div class="relative transition-all w-6 h-6 hover:text-red-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewbox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                                </svg>
                                <a
                                  href=""
                                  class="absolute top-0 left-0 h-full w-full"
                                ></a>
                              </div>
                            </td>
                          </tr>
                          <tr class="hover:bg-gray-100 transition text-xs border-b">
                            <th scope="row" class="px-6 py-4 font-medium">
                              Y422663Y4FR
                            </th>
                            <td class="px-6 py-4">1402/12/04</td>
                            <td class="lg:px-6 py-4 text-green-500">
                              پرداخت شده
                            </td>
                            <td class="px-6 py-4">360,000 تومان</td>
                            <td class="px-6 py-4 w-6 h-6">
                              <div class="relative transition-all w-6 h-6 hover:text-red-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewbox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                                </svg>
                                <a
                                  href=""
                                  class="absolute top-0 left-0 h-full w-full"
                                ></a>
                              </div>
                            </td>
                          </tr>
                          <tr class="hover:bg-gray-100 transition text-xs border-b">
                            <th scope="row" class="px-6 py-4 font-medium">
                              Y422663Y4FR
                            </th>
                            <td class="px-6 py-4">1402/12/04</td>
                            <td class="lg:px-6 py-4 text-green-500">
                              پرداخت شده
                            </td>
                            <td class="px-6 py-4">360,000 تومان</td>
                            <td class="px-6 py-4 w-6 h-6">
                              <div class="relative transition-all w-6 h-6 hover:text-red-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewbox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                                </svg>
                                <a
                                  href=""
                                  class="absolute top-0 left-0 h-full w-full"
                                ></a>
                              </div>
                            </td>
                          </tr>
                          <tr class="hover:bg-gray-100 transition text-xs border-b">
                            <th scope="row" class="px-6 py-4 font-medium">
                              Y422663Y4FR
                            </th>
                            <td class="px-6 py-4">1402/12/04</td>
                            <td class="lg:px-6 py-4 text-green-500">
                              پرداخت شده
                            </td>
                            <td class="px-6 py-4">360,000 تومان</td>
                            <td class="px-6 py-4 w-6 h-6">
                              <div class="relative transition-all w-6 h-6 hover:text-red-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewbox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                                </svg>
                                <a
                                  href=""
                                  class="absolute top-0 left-0 h-full w-full"
                                ></a>
                              </div>
                            </td>
                          </tr>
                          <tr class="hover:bg-gray-100 transition text-xs border-b">
                            <th scope="row" class="px-6 py-4 font-medium">
                              Y422663Y4FR
                            </th>
                            <td class="px-6 py-4">1402/12/04</td>
                            <td class="lg:px-6 py-4 text-green-500">
                              پرداخت شده
                            </td>
                            <td class="px-6 py-4">360,000 تومان</td>
                            <td class="px-6 py-4 w-6 h-6">
                              <div class="relative transition-all w-6 h-6 hover:text-red-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewbox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                                </svg>
                                <a
                                  href=""
                                  class="absolute top-0 left-0 h-full w-full"
                                ></a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="w-full h-px bg-gray-200"></div>
                  <div class="flex flex-col gap-5">
                    <div class="flex justify-between mt-5">
                      <p class="text-green-800 font-bold text-xl">پیام ها</p>
                    </div>
                    <div class="bg-gray-100 rounded py-5 px-3 text-slate-600 font-medium text-sm leading-7">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز.
                    </div>
                    <div class="w-full flex gap-3">
                      <p class="text-slate-400 font-medium text-sm flex items-center whitespace-normal">
                        اضافه شده در
                        <span class="text-slate-600">18 آبان 1402</span>
                        در
                        <span class="text-slate-600">5:34 بعد از ظهر</span>
                      </p>
                    </div>
                    <div class="bg-gray-100 rounded py-5 px-3 text-slate-600 font-medium text-sm leading-7">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز.
                    </div>
                    <div class="w-full flex gap-3 mb-6">
                      <p class="text-slate-400 font-medium text-sm flex items-center">
                        اضافه شده در
                        <span class="text-slate-600">18 آبان 1402</span>
                        در
                        <span class="text-slate-600">5:34 بعد از ظهر</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
