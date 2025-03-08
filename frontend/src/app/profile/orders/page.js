'use client'
import ProfileTab from '@/components/section/profile/ProfileTab'
import { usePathname } from 'next/navigation'

export default function Orders() {
  const path = usePathname()
  console.log(path)
  return (
    <>
      <main>
        <div className="container mx-auto">
          <div className="mx-4 lg:mx-0">
            <div className="flex justify-between py-4 items-center my-4">
              <div className="font-bold text-3xl flex flex-col gap-1">
                <p className="text-green-900">پروفایل کاربر</p>
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="flex items-center">
                    <p className="text-sm text-gray-400 font-semibold">
                      شناسه کاربر:
                    </p>
                    <p className="text-sm font-semibold text-gray-700 pr-1">
                      UD003054
                    </p>
                  </div>
                  <div className="flex">
                    <p className="text-sm text-gray-400 font-semibold">
                      آخرین ورود:
                    </p>
                    <p className="text-sm font-semibold text-gray-700 pr-1">
                      21 آبان 1402 01:02 بعد از ظهر
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <button className="px-4 h-10 justify-center hover:text-green-900 items-center flex gap-3 border text-slate-600 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline stroke-current"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m10 16 4-4-4-4"
                    ></path>
                  </svg>
                  <p className="font-bold text-sm">بازگشت</p>
                </button>
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-full border rounded-xl">
                <ProfileTab path={path} />
                <div className="px-5 mt-4 w-full gap-8 flex flex-col">
                  <div className="flex flex-col gap-2">
                    <p className="text-xl text-green-900 font-bold">
                      سفارش های شما
                    </p>
                  </div>
                  <div className="w-full mx-auto">
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-right text-gray-600">
                        <thead className="text-xs text-gray-700 border-b border-gray-200">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              شماره سفارش
                            </th>
                            <th scope="col" className="px-6 py-3">
                              تاریخ ثبت سفارش
                            </th>
                            <th scope="col" className="px-6 py-3">
                              وضعیت
                            </th>
                            <th scope="col" className="px-6 py-3">
                              مجموع
                            </th>
                            <th scope="col" className="px-6 py-3">
                              جزئیات
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-gray-100 transition text-xs border-b">
                            <th scope="row" className="px-6 py-4 font-medium">
                              G45266TY45H
                            </th>
                            <td className="px-6 py-4">1402/12/05</td>
                            <td className="lg:px-6 py-4 text-red-500">
                              در انتظار پرداخت
                            </td>
                            <td className="px-6 py-4">750,000 تومان</td>
                            <td className="px-6 py-4 w-6 h-6">
                              <div className="relative transition-all w-6 h-6 hover:text-red-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                                </svg>
                                <a
                                  href=""
                                  className="absolute top-0 left-0 h-full w-full"
                                ></a>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-100 transition text-xs border-b">
                            <th scope="row" className="px-6 py-4 font-medium">
                              Y422663Y4FR
                            </th>
                            <td className="px-6 py-4">1402/12/04</td>
                            <td className="lg:px-6 py-4 text-green-500">
                              پرداخت شده
                            </td>
                            <td className="px-6 py-4">360,000 تومان</td>
                            <td className="px-6 py-4 w-6 h-6">
                              <div className="relative transition-all w-6 h-6 hover:text-red-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                                </svg>
                                <a
                                  href=""
                                  className="absolute top-0 left-0 h-full w-full"
                                ></a>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-100 transition text-xs border-b">
                            <th scope="row" className="px-6 py-4 font-medium">
                              Y422663Y4FR
                            </th>
                            <td className="px-6 py-4">1402/12/04</td>
                            <td className="lg:px-6 py-4 text-green-500">
                              پرداخت شده
                            </td>
                            <td className="px-6 py-4">360,000 تومان</td>
                            <td className="px-6 py-4 w-6 h-6">
                              <div className="relative transition-all w-6 h-6 hover:text-red-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                                </svg>
                                <a
                                  href=""
                                  className="absolute top-0 left-0 h-full w-full"
                                ></a>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-100 transition text-xs border-b">
                            <th scope="row" className="px-6 py-4 font-medium">
                              Y422663Y4FR
                            </th>
                            <td className="px-6 py-4">1402/12/04</td>
                            <td className="lg:px-6 py-4 text-green-500">
                              پرداخت شده
                            </td>
                            <td className="px-6 py-4">360,000 تومان</td>
                            <td className="px-6 py-4 w-6 h-6">
                              <div className="relative transition-all w-6 h-6 hover:text-red-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                                </svg>
                                <a
                                  href=""
                                  className="absolute top-0 left-0 h-full w-full"
                                ></a>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-100 transition text-xs border-b">
                            <th scope="row" className="px-6 py-4 font-medium">
                              Y422663Y4FR
                            </th>
                            <td className="px-6 py-4">1402/12/04</td>
                            <td className="lg:px-6 py-4 text-green-500">
                              پرداخت شده
                            </td>
                            <td className="px-6 py-4">360,000 تومان</td>
                            <td className="px-6 py-4 w-6 h-6">
                              <div className="relative transition-all w-6 h-6 hover:text-red-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                                </svg>
                                <a
                                  href=""
                                  className="absolute top-0 left-0 h-full w-full"
                                ></a>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-100 transition text-xs border-b">
                            <th scope="row" className="px-6 py-4 font-medium">
                              Y422663Y4FR
                            </th>
                            <td className="px-6 py-4">1402/12/04</td>
                            <td className="lg:px-6 py-4 text-green-500">
                              پرداخت شده
                            </td>
                            <td className="px-6 py-4">360,000 تومان</td>
                            <td className="px-6 py-4 w-6 h-6">
                              <div className="relative transition-all w-6 h-6 hover:text-red-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                                </svg>
                                <a
                                  href=""
                                  className="absolute top-0 left-0 h-full w-full"
                                ></a>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-100 transition text-xs border-b">
                            <th scope="row" className="px-6 py-4 font-medium">
                              Y422663Y4FR
                            </th>
                            <td className="px-6 py-4">1402/12/04</td>
                            <td className="lg:px-6 py-4 text-green-500">
                              پرداخت شده
                            </td>
                            <td className="px-6 py-4">360,000 تومان</td>
                            <td className="px-6 py-4 w-6 h-6">
                              <div className="relative transition-all w-6 h-6 hover:text-red-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                                </svg>
                                <a
                                  href=""
                                  className="absolute top-0 left-0 h-full w-full"
                                ></a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-200"></div>
                  <div className="flex flex-col gap-5">
                    <div className="flex justify-between mt-5">
                      <p className="text-green-800 font-bold text-xl">
                        پیام ها
                      </p>
                    </div>
                    <div className="bg-gray-100 rounded py-5 px-3 text-slate-600 font-medium text-sm leading-7">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز.
                    </div>
                    <div className="w-full flex gap-3">
                      <p className="text-slate-400 font-medium text-sm flex items-center whitespace-normal">
                        اضافه شده در
                        <span className="text-slate-600">18 آبان 1402</span>
                        در
                        <span className="text-slate-600">5:34 بعد از ظهر</span>
                      </p>
                    </div>
                    <div className="bg-gray-100 rounded py-5 px-3 text-slate-600 font-medium text-sm leading-7">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز.
                    </div>
                    <div className="w-full flex gap-3 mb-6">
                      <p className="text-slate-400 font-medium text-sm flex items-center">
                        اضافه شده در
                        <span className="text-slate-600">18 آبان 1402</span>
                        در
                        <span className="text-slate-600">5:34 بعد از ظهر</span>
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
