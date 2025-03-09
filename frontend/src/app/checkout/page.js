'use client'

import useCartStore from '@/stores/cart'

export default function Checkout() {
  const { totalPrice } = useCartStore()
  return (
    <>
      <main className="container mx-auto mt-12 2xl:mt-20 2xl:mb-40 mb-36">
        <div className="text-center items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
          <a href="#" className="text-2xl font-bold text-green-900">
            {' '}
            تسویه حساب{' '}
          </a>
          <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
            در این قسمت اطلاعات محل سکونت و آخرین مبلغ خرید و روش پرداخت وجود
            دارد
          </div>
        </div>
        <section className="md:grid md:grid-cols-2 grid grid-cols-1 w-full">
          <div>
            <form id="checkout">
              <div className="mt-10 px-4">
                <p className="text-xl font-medium">جزئیات صورت حساب</p>
                <div className="">
                  <div>
                    <label
                      htmlFor="name"
                      className="mt-4 mb-2 block text-sm font-medium"
                    >
                      نام
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                      placeholder="علی"
                    />
                    <label
                      htmlFor="card-holder"
                      className="mt-4 mb-2 block text-sm font-medium"
                    >
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                      placeholder="رضایی"
                    />
                    <label
                      htmlFor="billing-address"
                      className="mt-4 mb-2 block text-sm font-medium"
                    >
                      استان
                    </label>
                    <select
                      type="text"
                      name="billing-state"
                      className="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                    >
                      <option value="State">تهران</option>
                      <option value="State">مرکزی</option>
                    </select>
                    <div>
                      <label
                        htmlFor="billing-address"
                        className="mt-4 mb-2 block text-sm font-medium"
                      >
                        آدرس خیابان
                      </label>
                      <div className="flex-shrink-0">
                        <input
                          type="text"
                          id="billing-address"
                          name="billing-address"
                          className="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                          placeholder="آدرس خیابان"
                        />
                      </div>
                      <label
                        htmlFor="billing-address"
                        className="mt-4 mb-2 block text-sm font-medium"
                      >
                        آپارتمان،مجتمع، واحد و... (اختیاری)
                      </label>
                      <div className="flex-shrink-0">
                        <input
                          type="text"
                          id="billing-address"
                          name="billing-address"
                          className="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                          placeholder="آپارتمان، مجتمع، واحد و... (اختیاری)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "
                        />
                      </div>

                      <label
                        htmlFor="billing-address"
                        className="mt-4 mb-2 block text-sm font-medium"
                      >
                        کدپستی (بدون فاصله و با اعداد انگلیسی)
                      </label>
                      <input
                        type="text"
                        name="billing-zip"
                        className="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                        placeholder="کد پستی"
                      />
                      <label
                        htmlFor="billing-address"
                        className="mt-4 mb-2 block text-sm font-medium"
                      >
                        شماره تماس
                      </label>
                      <input
                        type="text"
                        name="phone-numbre"
                        className="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                        placeholder="شماره تماس"
                      />
                      <label htmlFor=""> توضیحات سفارش (اختیاری) </label>
                      <textarea
                        name=""
                        id=""
                        cols="20"
                        rows="5"
                        className="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                        placeholder="توضیحات"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <article className="pt-12">
            <div className="px-8 py-8 bg-gray-50 rounded-lg sticky top-8">
              <div className="text-xl font-medium mb-2">
                <h2>سفارش شما</h2>
              </div>
              <div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-base font-normal text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        نام محصول
                      </th>
                      <th scope="col" className="px-6 py-3">
                        جمع جزء
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        جمع سبد خرید
                      </th>
                      <td className="px-6 py-4">
                        {totalPrice.toLocaleString()} تومان
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        هزینه حمل و نقل
                      </th>
                      <td className="px-6 py-4">0 تومان</td>
                    </tr>
                    <tr className="bg-white">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        مجموع
                      </th>
                      <td className="px-6 py-4">
                        {totalPrice.toLocaleString()} تومان
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex flex-col gap-4 my-4">
                  <ul>
                    <li>
                      <div className="flex gap-2 items-center relative">
                        <input type="checkbox" name="" id="zarinpal" />
                        <label
                          htmlFor="zarinpal"
                          className="block w-1/2 h-14 absolute opacity-0 cursor-pointer"
                        ></label>
                        <figure className="size-14">
                          <img
                            src="./assets/images/zarinpal.png"
                            className="h-full object-cover"
                            alt=""
                          />
                        </figure>
                        <p>پرداخت امن زرین پال</p>
                      </div>
                    </li>
                  </ul>
                  <div className="py-3 px-3 border border-gray-100 bg-white rounded-md text-gray-500 text-sm font-normal">
                    <p>
                      پرداخت امن به وسیله کلیه کارت های عضو شتاب از طریق درگاه
                      زرین پال
                    </p>
                  </div>
                </div>
                <button
                  form="checkout"
                  type="submit"
                  value="ثبت سفارش"
                  className="text-center w-full py-2 bg-green-700 text-white rounded-md border-t border-gray-100 hover:opacity-40 transition-all delay-100"
                >
                  ثبت سفارش
                </button>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}
