export default function ProfileHeader() {
  return (
    <div className="flex justify-between py-4 items-center my-4">
      <div className="font-bold text-3xl flex flex-col gap-1">
        <p className="text-green-900">پروفایل کاربر</p>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="flex items-center">
            <p className="text-sm text-gray-400 font-semibold">شناسه کاربر:</p>
            <p className="text-sm font-semibold text-gray-700 pr-1">UD003054</p>
          </div>
          <div className="flex">
            <p className="text-sm text-gray-400 font-semibold">آخرین ورود:</p>
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
  )
}
