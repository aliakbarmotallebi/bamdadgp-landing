export default async function Login() {
  return (
    <section className="mx-auto  max-w-7xl flex justify-center">
      <div className="md:min-w-[420px] p-12 bg-white/80 border border-gray-200 backdrop-blur-md shadow-lg rounded-xl md:my-12 xl:my-24">
        <h1 className="text-center mb-6 text-xl font-semibold text-stone-600">
          ورود به حساب کاربری
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label
              className="text-stone-600 font-medium text-sm mb-1 cursor-pointer"
              htmlFor="usernameInput"
            >
              نام کاربری یا ایمیل
            </label>
            <input
              id="usernameInput"
              type="text"
              className="p-1.5 text-sm font-medium rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
              placeholder="نام کاربری یا ایمیل خود را وارد کنید"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-stone-600 font-medium text-sm mb-1 cursor-pointer"
              htmlFor="passInput"
            >
              رمز عبور
            </label>
            <input
              id="passInput"
              type="text"
              className="p-1.5 text-sm font-medium rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
              placeholder="رمز عبور خود را وارد کنید"
            />
            <a
              href=""
              className="text-yellow-600 hover:text-yellow-800 transition-all duration-200 text-xs mt-1 underline underline-offset-4"
            >
              رمز عبور خود را فراموش کردید؟
            </a>
          </div>

          <div className="flex justify-center flex-col">
            <button className="bg-yellow-300 hover:bg-yellow-500 transition-all duration-200 text-stone-800 w-full rounded-md p-2 text-sm font-medium">
              ورود
            </button>

            <div className="pt-3 text-sm font-medium text-stone-600">
              حساب کاربری ندارید؟
              <a
                href=""
                className="text-yellow-600 hover:text-yellow-800 transition-all duration-200 ms-1"
              >
                ثبت نام کنید.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
