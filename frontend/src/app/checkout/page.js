export default function Checkout() {
  return (
    <>
      <main class="container mx-auto mt-11">
        <div class="text-center items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
          <a href="#" class="text-2xl font-bold text-green-900">
            {' '}
            تسویه حساب{' '}
          </a>
          <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
            در این قسمت اطلاعات محل سکونت و آخرین مبلغ خرید و روش پرداخت وجود
            دارد
          </div>
        </div>
        <section class="md:grid md:grid-cols-2 grid grid-cols-1 w-full">
          <div>
            <form id="checkout">
              <div class="mt-10 px-4">
                <p class="text-xl font-medium">جزئیات صورت حساب</p>
                <div class="">
                  <div>
                    <label
                      for="name"
                      class="mt-4 mb-2 block text-sm font-medium"
                    >
                      نام
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                      placeholder="علی"
                    />
                    <label
                      for="card-holder"
                      class="mt-4 mb-2 block text-sm font-medium"
                    >
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      class="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                      placeholder="رضایی"
                    />
                    <label
                      for="billing-address"
                      class="mt-4 mb-2 block text-sm font-medium"
                    >
                      کشور
                    </label>
                    <select
                      type="text"
                      name="billing-state"
                      class="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                    >
                      <option value="Afghanistan">افغانستان</option>
                      <option value="Åland Islands">اُلند</option>
                    </select>
                    <div>
                      <label
                        for="billing-address"
                        class="mt-4 mb-2 block text-sm font-medium"
                      >
                        آدرس خیابان
                      </label>
                      <div class="flex-shrink-0">
                        <input
                          type="text"
                          id="billing-address"
                          name="billing-address"
                          class="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                          placeholder="آدرس خیابان"
                        />
                      </div>
                      <label
                        for="billing-address"
                        class="mt-4 mb-2 block text-sm font-medium"
                      >
                        آپارتمان،مجتمع، واحد و... (اختیاری)
                      </label>
                      <div class="flex-shrink-0">
                        <input
                          type="text"
                          id="billing-address"
                          name="billing-address"
                          class="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                          placeholder="آپارتمان، مجتمع، واحد و... (اختیاری)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "
                        />
                      </div>
                      <label
                        for="billing-address"
                        class="mt-4 mb-2 block text-sm font-medium"
                      >
                        استان
                      </label>
                      <select
                        type="text"
                        name="billing-state"
                        class="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                      >
                        <option value="State">تهران</option>
                        <option value="State">مرکزی</option>
                      </select>
                      <label
                        for="billing-address"
                        class="mt-4 mb-2 block text-sm font-medium"
                      >
                        کدپستی (بدون فاصله و با اعداد انگلیسی)
                      </label>
                      <input
                        type="text"
                        name="billing-zip"
                        class="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                        placeholder="کد پستی"
                      />
                      <label
                        for="billing-address"
                        class="mt-4 mb-2 block text-sm font-medium"
                      >
                        شماره تماس
                      </label>
                      <input
                        type="text"
                        name="phone-numbre"
                        class="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                        placeholder="شماره تماس"
                      />
                      <label for=""> توضیحات سفارش (اختیاری) </label>
                      <textarea
                        name=""
                        id=""
                        cols="20"
                        rows="5"
                        class="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                        placeholder="توضیحات"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <article class="pt-12">
            <div class="px-8 py-8 bg-gray-50 rounded-lg sticky top-8">
              <div class="text-xl font-medium mb-2">
                <h2>سفارش شما</h2>
              </div>
              <div>
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-base font-normal text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        نام محصول
                      </th>
                      <th scope="col" class="px-6 py-3">
                        جمع جزء
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        گوشی آیفون
                      </th>
                      <td class="px-6 py-4">42000 تومان</td>
                    </tr>
                    <tr class="bg-white border-b">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        هزینه حمل و نقل
                      </th>
                      <td class="px-6 py-4">50000 تومان</td>
                    </tr>
                    <tr class="bg-white">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        مجموع
                      </th>
                      <td class="px-6 py-4">92000 تومان</td>
                    </tr>
                  </tbody>
                </table>
                <div class="flex flex-col gap-4 my-4">
                  <ul>
                    <li>
                      <div class="flex gap-2 items-center">
                        <input type="checkbox" name="" id="" />
                        <p>پرداخت امن زرین پال</p>
                        <img
                          src="./assets/images/logoSecrets/zarinpall.png"
                          alt=""
                        />
                      </div>
                    </li>
                  </ul>
                  <div class="py-3 px-3 border border-gray-100 bg-white rounded-md text-gray-500 text-sm font-normal">
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
                  class="text-center w-full py-2 bg-green-700 text-white rounded-md border-t border-gray-100 hover:opacity-40 transition-all delay-100"
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
