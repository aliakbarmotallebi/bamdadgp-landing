'use client'

import axios from 'axios'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function Inquiry() {
  const [fullName, setFullName] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [serialNumber, setSerialNumber] = React.useState('')

  const onActivation = async () => {
    if (!fullName || !phoneNumber || !serialNumber) {
      toast.error('لطفاً همه‌ی فیلدها را پر کنید.')
      return
    }

    try {
      const response = await axios.post(
        'http://seller.bamdadgp.com/api/warranty/verify',
        {
          serialNumber,
          fullName,
          phoneNumber,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
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
      toast.error(error?.response?.data?.message || 'خطا در ارتباط با سرور')
    }
  }

  return (
    <section
      id="warranty-inquiry"
      className="services-section scroll-mt-28 px-4 sm:px-8 md:px-16"
    >
      {/* Toaster برای نمایش نوتیفیکیشن‌ها */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="relative mx-auto max-w-7xl my-16">
        <div className="relative flex flex-col items-center lg:items-start px-4 py-16 lg:p-16 mb-4 bg-white border border-gray-200 overflow-hidden rounded-3xl shadow-sm">
          <div className="flex items-center flex-col gap-6">
            <p className="text-sm text-center lg:text-base text-stone-700">
              با استفاده از این بخش می‌توانید گارانتی کالای خود را استعلام و فعال نمایید.
            </p>
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
              className="bg-yellow-300 w-64 lg:w-auto hover:bg-yellow-400 transition-all duration-200 text-stone-800 py-2.5 px-6 rounded-md"
            >
              استعلام و فعالسازی گارانتی
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
