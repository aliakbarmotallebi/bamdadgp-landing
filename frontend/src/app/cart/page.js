export default function Cart() {
  return (
    <>
      <main>
        <section className="container mx-auto pt-10">
          <h1 className="mb-10 text-center text-2xl font-bold text-green-900">
            سبد خرید شما
          </h1>
          <div className="mx-auto justify-center px-6 md:flex md:space-x-6 md:space-x-reverse xl:px-0">
            <div className="shadow border border-gray-50 border-b-0 rounded-lg overflow-hidden w-full">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="hidden md:table-header-group text-xs text-gray-700 border-b">
                  <tr>
                    <th scope="col" className="px-16 py-3">
                      تصویر
                    </th>
                    <th scope="col" className="md:pr-6 py-3">
                      نام محصول
                    </th>
                    <th scope="col" className="pr-10 py-3">
                      تعداد
                    </th>
                    <th scope="col" className="px-6 py-3">
                      قیمت
                    </th>
                    <th scope="col" className="px-6 py-3">
                      دستورات
                    </th>
                  </tr>
                </thead>
                <tbody className="grid grid-cols-1 sm:grid-cols-2 md:contents gap-5">
                  <tr className="bg-white border-b hover:bg-gray-50 grid grid-cols-1 justify-items-center md:table-row">
                    <td className="p-4">
                      <img
                        src="./assets/images/product/productIMG2.png"
                        className="w-48 md:w-32 max-w-full max-h-full rounded-lg"
                        alt=""
                      />
                    </td>
                    <td className="md:pr-6 py-4 text-sm opacity-90 text-gray-900">
                      هندزفری بلوتوثی مدل AirPods pro
                    </td>
                    <td className="px-6 py-4">
                      <div className="quantity flex items-center">
                        <button
                          className="quantity-nav quantity-button quantity-up inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                          type="button"
                        >
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewbox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 1v16M1 9h16"
                            ></path>
                          </svg>
                        </button>
                        <span className="w-12 h-8 mx-2 text-lg text-center border focus:outline-none rounded-lg"></span>
                        <button
                          className="quantity-nav quantity-button quantity-down inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                          type="button"
                        >
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewbox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h16"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm opacity-90 text-gray-900">
                      2,000,000 تومان
                    </td>
                    <td className="px-6 py-4">
                      <button className="flex items-center justify-center p-2 text-xs mx-auto font-medium text-rose-700 bg-white w-9 h-9 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-green-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          viewbox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50 grid grid-cols-1 justify-items-center md:table-row">
                    <td className="p-4">
                      <img
                        src="./assets/images/product/productIMG.png"
                        className="w-48 md:w-32 max-w-full max-h-full rounded-lg"
                        alt=""
                      />
                    </td>
                    <td className="md:pr-6 py-4 text-sm opacity-90 text-gray-900">
                      گوشی موبایل اپل مدل iPhone 14
                    </td>
                    <td className="px-6 py-4">
                      <div className="quantity flex items-center">
                        <button
                          className="quantity-nav quantity-button quantity-up inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                          type="button"
                        >
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewbox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 1v16M1 9h16"
                            ></path>
                          </svg>
                        </button>
                        <span className="w-12 h-8 mx-2 text-lg text-center border focus:outline-none rounded-lg"></span>
                        <button
                          className="quantity-nav quantity-button quantity-down inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                          type="button"
                        >
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewbox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h16"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm opacity-90 text-gray-900">
                      4,000,000 تومان
                    </td>
                    <td className="px-6 py-4">
                      <button className="flex items-center justify-center p-2 text-xs mx-auto font-medium text-rose-700 bg-white w-9 h-9 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-green-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          viewbox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50 grid grid-cols-1 justify-items-center md:table-row">
                    <td className="p-4">
                      <img
                        src="./assets/images/product/bag.png"
                        className="w-48 md:w-32 max-w-full max-h-full rounded-lg"
                        alt=""
                      />
                    </td>
                    <td className="md:pr-6 py-4 text-sm opacity-90 text-gray-900">
                      کوله پشتی
                    </td>
                    <td className="px-6 py-4">
                      <div className="quantity flex items-center">
                        <button className="quantity-nav quantity-button quantity-up inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200">
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewbox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 1v16M1 9h16"
                            ></path>
                          </svg>
                        </button>
                        <span className="w-12 h-8 mx-2 text-lg text-center border focus:outline-none rounded-lg"></span>
                        <button
                          className="quantity-nav quantity-button quantity-down inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                          type="button"
                        >
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewbox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h16"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm opacity-90 text-gray-900">
                      750,000 تومان
                    </td>
                    <td className="px-6 py-4">
                      <button className="flex items-center justify-center p-2 text-xs mx-auto font-medium text-rose-700 bg-white w-9 h-9 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-green-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          viewbox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 h-full rounded-lg border border-gray-50 bg-white p-6 shadow md:mt-0 md:w-1/3 sticky top-8">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">مجموع پرداخت</p>
                <p className="text-gray-700">125000 تومان</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">کرایه</p>
                <p className="text-gray-700">5000 تومان</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">مجموع</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold text-left">
                    130000 تومان
                  </p>
                  <p className="text-sm text-gray-700">
                    از جمله مالیات بر ارزش افزوده
                  </p>
                </div>
              </div>
              <a href="./checkout.html">
                <button className="mt-6 w-full rounded-md bg-green-700 py-1.5 font-medium text-blue-50 hover:opacity-40">
                  تسویه حساب
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
