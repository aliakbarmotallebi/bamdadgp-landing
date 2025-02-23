export default function Plans(){
    return (
        <section id="plans">
        <div
          className="mx-auto max-w-screen-xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm"
        >
          <form className="grid grid-cols-2 gap-x-5">
            <div className="mb-5">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                نام و نام خانوادگی

                <span
                  className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
                >
                  الزامی
                </span>
              </label>
              <input
                type="text"
                id="text"
                className="bg-gray-50  rounded-lg outline-none border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all duration-200 ring-0 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                تلفن همراه
                <span
                  className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
                >
                  الزامی
                </span>
              </label>
              <input
                type="text"
                id="text"
                className="bg-gray-50  rounded-lg outline-none border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all duration-200 ring-0 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                ایمیل
                <span
                  className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
                >
                  الزامی
                </span>
              </label>
              <input
                type="text"
                id="text"
                className="shadow-none bg-gray-50  rounded-lg outline-none border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all duration-200 ring-0 block w-full p-2.5"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                عنوان
                <span
                  className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
                >
                  الزامی
                </span>
              </label>
              <select
                id="countries"
                defaultValue={'default'}
                className="bg-gray-50  rounded-lg outline-none border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all duration-200 ring-0 block w-full p-2.5"
              >
                <option value="default" >
                  یکی از موارد زیر را انتخاب کنید
                </option>

                <option value="time">مدت زمان سپری شده برای تامین قطعات</option>

                <option value="price of parts">هزینه پرداختی بابت قطعات</option>

                <option value="price of wage">هزینه پرداختی بابت اجرت</option>

                <option value="quality">کیفیت تعمیرات و قطعات</option>

                <option value="service time">زمان سپری شده ارائه خدمات</option>

                <option value="delivery">فرآیند تحویل کالا</option>

                <option value="reception">روند پذیرش و برخورد پرسنل</option>

                <option value="other">سایر</option>
              </select>
            </div>
            <div className="mb-5 col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                توضیحات
                <span
                  className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
                >
                  الزامی
                </span>
              </label>
              <textarea
                id="message"
                rows="4"
                className="bg-gray-50 block p-2.5 w-full text-sm rounded-lg outline-none border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all duration-200 ring-0"
              ></textarea>
            </div>
            <div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              >
                ثبت انتقادات و پیشنهادات شما
              </button>
            </div>
          </form>
        </div>
      </section>
    )
}