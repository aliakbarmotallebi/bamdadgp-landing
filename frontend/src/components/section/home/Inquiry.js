'use client'

import axios from 'axios'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function Inquiry() {
  const [fullName, setFullName] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [serialNumber, setSerialNumber] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const onActivation = async () => {
    if (!fullName || !phoneNumber || !serialNumber) {
      toast.error('لطفاً همه‌ی فیلدها را پر کنید.')
      return
    }

    setLoading(true) 

    try {
      const response = await axios.post(
        '/api/warranty', 
        {
          serialNumber,
          fullName,
          phoneNumber,
        }
      )

      if (response?.data?.success) {
        toast.success('گارانتی با موفقیت فعال شد!')
        console.log('Response:', response.data)
      } else {
        toast.error(response?.data?.message || 'مشکلی پیش آمده است!')
      }
    } catch (error) {
      console.error(error)
      toast.error(error?.response?.data?.error || 'خطا در ارتباط با سرور')
    }finally {
      setLoading(false) 
    }
  }

  return (
    <section
      id="warranty-inquiry"
      className="services-section scroll-mt-28 px-4 sm:px-8 md:px-16"
    >
      <Toaster position="top-center" reverseOrder={false} />

      <div className="relative mx-auto max-w-7xl my-16">
        <div className="relative flex flex-col items-center lg:items-start px-4 py-12 lg:p-12 mb-4 bg-white border border-gray-200 overflow-hidden rounded-3xl shadow-sm">
          <div className="flex items-center flex-col gap-6 w-full">
            <div className="py-2 max-w-5xl mx-auto">
              <p className="text-base my-2 text-center lg:text-xl text-stone-700 leading-relaxed">
                با استفاده از این بخش می‌توانید گارانتی کالای خود را به‌راحتی
                استعلام کرده و فعال‌سازی آن را انجام دهید. تنها کافیست فرم زیر
                را تکمیل نمایید تا اطلاعات دقیق و تاریخ فعالسازی برای شما نمایش
                داده شود.
              </p>
            </div>
            <h3 className="font-bold text-xl text-stone-800">
              لطفاً مشخصات خواسته شده را وارد نمایید
            </h3>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 w-full">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              className="w-64 outline-none rounded-md px-3 py-2 bg-white border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all"
            />
            <input
              type="text"
              placeholder="شماره موبایل"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              className="w-64 outline-none rounded-md px-3 py-2 bg-white border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all"
            />
            <input
              type="text"
              placeholder="شماره گارانتی"
              value={serialNumber}
              onChange={e => setSerialNumber(e.target.value)}
              className="w-64 outline-none rounded-md px-3 py-2 bg-white border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all"
            />
        <button
          onClick={onActivation}
          disabled={loading}
          className="bg-yellow-300 w-64 lg:w-auto hover:bg-yellow-400 transition-all duration-200 text-stone-800 py-2.5 px-6 rounded-md flex justify-center items-center"
        >
          {loading ? (
            <svg className="size-5 animate-spin text-stone-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          ) : (
            'استعلام و فعالسازی گارانتی'
          )}
        </button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border-2 border-[#5f5d5a20] ">
          <h1 className="mb-6 text-stone-600 font-bold text-lg text-center py-2">
            مراحل شرکت در قرعه کشی
          </h1>
          <div className="relative grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 md:gap-0 lg:flex lg:justify-center">
            <div className="size-72 border-t-4 border-yellow-400/60 border-dotted rounded-full text-center relative">
              <div className="p-8 relative text-center">
                <strong className="text-2xl xl:text-4xl block text-yellow-500/60">
                  قدم اول
                </strong>
                <span className="size-12 xl:size-16 my-4 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#cc8e3550] size-full"
                    viewBox="0 0 512 512"
                  >
                    <rect width="512" height="512" fill="none" />
                    <path
                      fill="currentColor"
                      d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175 175 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.03 175.03 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195M48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192m408.971 264.284a24.03 24.03 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.03 24.03 0 0 1-.002 33.941"
                      strokeWidth="6"
                      stroke="currentColor"
                    />
                  </svg>
                </span>
                <p className="px-4 font-medium text-stone-600">
                  استعلام و فعالسازی گارانتی
                </p>
              </div>
            </div>
            <div className="size-72 border-b-4 border-yellow-400/60 border-dotted rounded-full text-center relative">
              <div className="p-8 relative text-center">
                <strong className="text-2xl xl:text-4xl block text-yellow-500/60">
                  قدم دوم
                </strong>
                <span className="size-12 xl:size-16 my-4 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-full text-[#cc8e3550]"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M18.644 4a2.7 2.7 0 0 0-.626-.975C16.984 2 15.322 2 12 2S7.015 2 5.982 3.025A2.7 2.7 0 0 0 5.356 4M5 18c.087 1.42.326 2.323.982 2.975C7.015 22 8.677 22 12 22s4.985 0 6.017-1.025c.657-.652.896-1.556.983-2.975M6 10l2 2m0-2l-2 2m5-2l2 2m0-2l-2 2m5-2l2 2m0-2l-2 2m1-5H7c-1.886 0-2.828 0-3.414.586S3 9.114 3 11s0 2.828.586 3.414S5.114 15 7 15h10c1.886 0 2.828 0 3.414-.586S21 12.886 21 11s0-2.828-.586-3.414S18.886 7 17 7m-5 12v.01"
                      color="currentColor"
                    />
                  </svg>
                </span>
                <p className="px-4 font-medium text-stone-600">
                  دریافت کد قرعه کشی بصورت پیامک
                </p>
              </div>
            </div>
            <div className="size-72 border-t-4 border-yellow-400/60 border-dotted rounded-full text-center relative">
              <div className="p-8 relative text-center">
                <strong className="text-2xl xl:text-4xl block text-yellow-500/60">
                  قدم سوم
                </strong>
                <span className="size-12 xl:size-16 my-4 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#cc8e3550]"
                    viewBox="0 0 16 16"
                  >
                    <rect width="16" height="16" fill="none" />
                    <path
                      fill="currentColor"
                      d="M5 10c2.585 0 4.778 1.923 4.998 4.457a.5.5 0 0 1-.996.086C8.827 12.536 7.076 11 5 11c-2.035 0-3.825 1.597-4.002 3.545a.5.5 0 1 1-.996-.09C.226 11.986 2.452 10 5 10m0-7a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4a2 2 0 0 0 0-4M12.41.008L12.5 0a.5.5 0 0 1 .492.41L13 .5V3h2.5a.5.5 0 0 1 .09.992L15.5 4H13v2.5a.5.5 0 0 1-.41.492L12.5 7a.5.5 0 0 1-.492-.41L12 6.5V4H9.5a.5.5 0 0 1-.09-.992L9.5 3H12V.5a.5.5 0 0 1 .41-.492L12.5 0z"
                      strokeWidth="0.4"
                      stroke="currentColor"
                    />
                  </svg>
                </span>
                <p className="p-4 font-medium text-stone-600">
                  دنبال کردن صفحه اینستاگرام گروه بامداد
                </p>
              </div>
            </div>
            <div className="size-72 border-b-4 border-yellow-400/60 border-dotted rounded-full text-center relative">
              <div className="p-8 relative text-center">
                <strong className="text-2xl xl:text-4xl block text-yellow-500/60">
                  قدم چهارم
                </strong>
                <span className="size-12 xl:size-16 my-4 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#cc8e3550]"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M14.76 12H6.832m0 0c0-.275-.057-.55-.17-.808L4.285 5.814c-.76-1.72 1.058-3.442 2.734-2.591L20.8 10.217c1.46.74 1.46 2.826 0 3.566L7.02 20.777c-1.677.851-3.495-.872-2.735-2.591l2.375-5.378A2 2 0 0 0 6.83 12"
                    />
                  </svg>
                </span>
                <p className="p-4 font-medium text-stone-600">
                  ارسال کد قرعه کشی خود به دایرکت صفحه اینستاگرام بامداد
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
