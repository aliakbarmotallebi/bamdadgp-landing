export default function Plans(){
    return(
        <section id="plans">
        <div
          className="mx-auto max-w-screen-xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm"
        >
          <form className="grid grid-cols-2 gap-x-5">
            <div className="mb-5">
              <label
                htmlFor="fullName"
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
                id="fullName"
                className="bg-gray-50 text-sm outline-none border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all duration-200 ring-0 rounded-lg block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
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
                id="phone"
                className="bg-gray-50 text-sm outline-none border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all duration-200 ring-0 rounded-lg block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
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
                id="email"
                className="bg-gray-50 text-sm outline-none border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all duration-200 ring-0 rounded-lg block w-full p-2.5"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="select0"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                چقدر از روند پیگیری رضایت داشتید
                <span
                  className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
                >
                  الزامی
                </span>
              </label>
              <select
                id="select0"
                defaultValue={"default"}
                className="bg-gray-50 text-sm outline-none border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all duration-200 ring-0 rounded-lg block w-full p-2.5"
              >
                <option value="default">
                  یکی از موارد زیر را انتخاب کنید
                </option>

                <option value="very good">خیلی راضی</option>

                <option value="good">راضی</option>

                <option value="neutral">نظری ندارم</option>

                <option value="bad">ناراضی</option>

                <option value="very bad">خیلی ناراضی</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="select1"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                چقدر از کیفیت پاسخگویی همکاران رضایت داشتید
                <span
                  className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
                >
                  الزامی
                </span>
              </label>
              <select
                id="select1"
                defaultValue={"default"}
                className="bg-gray-50 text-sm outline-none border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all duration-200 ring-0 rounded-lg block w-full p-2.5"
              >
                <option value="default">
                  یکی از موارد زیر را انتخاب کنید
                </option>

                <option value="very good">خیلی راضی</option>

                <option value="good">راضی</option>

                <option value="neutral">نظری ندارم</option>

                <option value="bad">ناراضی</option>

                <option value="very bad">خیلی ناراضی</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="select2"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                چقدر از میزان زمان سپری شده جهت تعمیرات و تحویل کالا رضایت
                داشتید
                <span
                  className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
                >
                  الزامی
                </span>
              </label>
              <select
                id="select2"
                defaultValue={"default"}
                className="bg-gray-50 text-sm outline-none border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all duration-200 ring-0 rounded-lg block w-full p-2.5"
              >
                <option value="default">
                  یکی از موارد زیر را انتخاب کنید
                </option>

                <option value="very good">خیلی راضی</option>

                <option value="good">راضی</option>

                <option value="neutral">نظری ندارم</option>

                <option value="bad">ناراضی</option>

                <option value="very bad">خیلی ناراضی</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="select3"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                بعد از تحویل کالا چقدر از کیفیت تعمیرات بروی دستگاه خود رضایت
                داشتید
                <span
                  className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
                >
                  الزامی
                </span>
              </label>
              <select
                id="select3"
                defaultValue={"default"}
                className="bg-gray-50 text-sm outline-none border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all duration-200 ring-0 rounded-lg block w-full p-2.5"
              >
                <option value="default">
                  یکی از موارد زیر را انتخاب کنید
                </option>

                <option value="very good">خیلی راضی</option>

                <option value="good">راضی</option>

                <option value="neutral">نظری ندارم</option>

                <option value="bad">ناراضی</option>

                <option value="very bad">خیلی ناراضی</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="select4"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                در صورتی که هزینه ای جهت تعمیرات پرداخت کرده ­اید چقدر از مبلغ
                پرداخت شده رضایت داشتید
                <span
                  className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
                >
                  الزامی
                </span>
              </label>
              <select
                id="select4"
                defaultValue={"default"}
                className="bg-gray-50 text-sm outline-none border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all duration-200 ring-0 rounded-lg block w-full p-2.5"
              >
                <option value="default">
                  یکی از موارد زیر را انتخاب کنید
                </option>

                <option value="very good">خیلی راضی</option>

                <option value="good">راضی</option>

                <option value="neutral">نظری ندارم</option>

                <option value="bad">ناراضی</option>

                <option value="very bad">خیلی ناراضی</option>
              </select>
            </div>

            <div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              >
                ثبت نظرسنجی شما
              </button>
            </div>
          </form>
        </div>
        </section>
    )
}