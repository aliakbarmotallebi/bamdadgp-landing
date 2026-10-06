'use client'

import axios from 'axios'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import WarrantyActivated from './WarrantyActivated'

const persianNameRegex = /^[\u0600-\u06FF\s‌]+$/
const iranMobileRegex = /^09\d{9}$/

const emptyErrors = {
  fullName: '',
  phoneNumber: '',
  serialNumber: '',
}

function validateWarrantyForm({ fullName, phoneNumber, serialNumber }) {
  const errors = { ...emptyErrors }
  const name = fullName.trim()
  const phone = phoneNumber.trim()
  const serial = serialNumber.trim()

  if (!name) {
    errors.fullName = 'نام و نام خانوادگی الزامی است.'
  } else if (name.length <= 3) {
    errors.fullName = 'نام باید بیشتر از ۳ حرف باشد.'
  } else if (!persianNameRegex.test(name)) {
    errors.fullName = 'نام باید فقط با حروف فارسی وارد شود.'
  }

  if (!phone) {
    errors.phoneNumber = 'شماره موبایل الزامی است.'
  } else if (!iranMobileRegex.test(phone)) {
    errors.phoneNumber = 'شماره موبایل معتبر نیست. مثال: ۰۹۱۲xxxxxxx'
  }

  if (!serial) {
    errors.serialNumber = 'شماره گارانتی الزامی است.'
  } else if (serial.length < 3) {
    errors.serialNumber = 'شماره گارانتی معتبر نیست.'
  }

  return errors
}

export default function Inquiry() {
  const [fullName, setFullName] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [serialNumber, setSerialNumber] = React.useState('')
  const [errors, setErrors] = React.useState(emptyErrors)
  const [loading, setLoading] = React.useState(false)
  const [isShow, setIsShow] = React.useState(false)
  const [warrantyData, setWarrantyData] = React.useState(null)

  const closeResult = React.useCallback(() => {
    setIsShow(false)
  }, [])

  const clearError = field => {
    setErrors(prev => (prev[field] ? { ...prev, [field]: '' } : prev))
  }

  const onActivation = async () => {
    const nextErrors = validateWarrantyForm({
      fullName,
      phoneNumber,
      serialNumber,
    })
    setErrors(nextErrors)

    if (Object.values(nextErrors).some(Boolean)) {
      return
    }

    setLoading(true)

    try {
      const response = await axios.post('/api/warranty', {
        serialNumber: serialNumber.trim(),
        fullName: fullName.trim(),
        phoneNumber: phoneNumber.trim(),
      })

      if (response?.data?.success) {
        toast.success('گارانتی با موفقیت فعال شد!')
        setWarrantyData(response.data?.data)
        setIsShow(true)
      } else {
        toast.error(response?.data?.message || 'مشکلی پیش آمده است!')
      }
    } catch (error) {
      console.error(error)
      toast.error(error?.response?.data?.error || 'خطا در ارتباط با سرور')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = hasError =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-neutral-800 outline-none transition focus:ring-2 ${
      hasError
        ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
        : 'border-neutral-200 focus:border-amber-400 focus:ring-amber-100'
    }`

  return (
    <section
      id="warranty-inquiry"
      className="services-section scroll-mt-28 px-4 sm:px-8 md:px-16"
    >
      <Toaster position="top-center" reverseOrder={false} />

      <div className="relative mx-auto max-w-7xl my-16">
        <div className="relative mb-4 overflow-hidden rounded-3xl border border-orange-900/10 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          <div className="pointer-events-none absolute -left-20 top-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(253,186,116,0.28)_0%,transparent_70%)] blur-2xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(253,68,25,0.08)_0%,transparent_70%)] blur-2xl" />

          <div className="relative px-4 py-10 sm:px-8 lg:p-12">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">
                  استعلام و فعال‌سازی گارانتی
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-8 text-neutral-500 md:text-base">
                  مشخصات زیر را وارد کنید تا وضعیت گارانتی کالا نمایش داده شود
                  و در صورت نیاز فعال‌سازی انجام شود.
                </p>
              </div>

              <form
                onSubmit={e => {
                  e.preventDefault()
                  onActivation()
                }}
                noValidate
                className="rounded-2xl border border-neutral-100 bg-stone-50/80 p-5 md:p-7"
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-neutral-700">
                      نام و نام خانوادگی
                    </span>
                    <input
                      type="text"
                      placeholder="مثلاً علی احمدی"
                      value={fullName}
                      onChange={e => {
                        setFullName(e.target.value)
                        clearError('fullName')
                      }}
                      className={inputClass(Boolean(errors.fullName))}
                      aria-invalid={Boolean(errors.fullName)}
                    />
                    {errors.fullName ? (
                      <small className="mt-1.5 block text-xs text-red-500">
                        {errors.fullName}
                      </small>
                    ) : null}
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-neutral-700">
                      شماره موبایل
                    </span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      placeholder="0912xxxxxxx"
                      value={phoneNumber}
                      onChange={e => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 11)
                        setPhoneNumber(value)
                        clearError('phoneNumber')
                      }}
                      className={inputClass(Boolean(errors.phoneNumber))}
                      aria-invalid={Boolean(errors.phoneNumber)}
                      dir="ltr"
                    />
                    {errors.phoneNumber ? (
                      <small className="mt-1.5 block text-xs text-red-500">
                        {errors.phoneNumber}
                      </small>
                    ) : null}
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-neutral-700">
                      شماره گارانتی
                    </span>
                    <input
                      type="text"
                      placeholder="کد روی کارت گارانتی"
                      value={serialNumber}
                      onChange={e => {
                        setSerialNumber(e.target.value)
                        clearError('serialNumber')
                      }}
                      className={inputClass(Boolean(errors.serialNumber))}
                      aria-invalid={Boolean(errors.serialNumber)}
                    />
                    {errors.serialNumber ? (
                      <small className="mt-1.5 block text-xs text-red-500">
                        {errors.serialNumber}
                      </small>
                    ) : null}
                  </label>
                </div>

                <div className="mt-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-6 text-neutral-400">
                    اطلاعات شما فقط برای استعلام و فعال‌سازی گارانتی استفاده
                    می‌شود.
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex min-w-48 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="size-4 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        در حال بررسی...
                      </>
                    ) : (
                      'استعلام و فعال‌سازی'
                    )}
                  </button>
                </div>
              </form>
            </div>

            {isShow && (
              <WarrantyActivated
                onClose={closeResult}
                data={warrantyData}
              />
            )}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-orange-900/10 bg-gradient-to-b from-amber-50/70 via-white to-white p-6 md:p-10">
          <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(253,186,116,0.35)_0%,transparent_70%)] blur-2xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(253,68,25,0.08)_0%,transparent_70%)] blur-2xl" />

          <div className="relative mb-10 text-center">
            <p className="mb-2 text-sm font-medium text-amber-700">
              قرعه‌کشی ماهانه بامداد
            </p>
            <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">
              مراحل شرکت در قرعه‌کشی
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-neutral-500 md:text-base">
              فقط با چهار قدم ساده شانس خود را برای برنده شدن جوایز ماهانه امتحان
              کنید.
            </p>
          </div>

          <ol className="relative mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
            {[
              {
                step: '۰۱',
                title: 'فعال‌سازی گارانتی',
                desc: 'فرم بالا را تکمیل کنید و گارانتی کالای خود را فعال کنید.',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                ),
              },
              {
                step: '۰۲',
                title: 'دریافت کد پیامکی',
                desc: 'کد قرعه‌کشی پس از فعال‌سازی برای شما پیامک می‌شود.',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5A2.25 2.25 0 0 0 8.25 22.5h7.5A2.25 2.25 0 0 0 18 20.25V3.75A2.25 2.25 0 0 0 15.75 1.5H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                ),
              },
              {
                step: '۰۳',
                title: 'دنبال کردن اینستاگرام',
                desc: 'صفحه رسمی بامداد را در اینستاگرام دنبال کنید.',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM17.5 6.5h.01"
                    />
                  </svg>
                ),
              },
              {
                step: '۰۴',
                title: 'ارسال کد در دایرکت',
                desc: 'کد دریافتی را به دایرکت اینستاگرام بامداد ارسال کنید.',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.27 5.18A.75.75 0 0 1 4.1 4.1L20.25 11.4a.75.75 0 0 1 0 1.35L4.1 19.9a.75.75 0 0 1-.83-1.08L6 12Zm0 0h7.5"
                    />
                  </svg>
                ),
              },
            ].map(item => (
              <li key={item.step} className="relative">
                <div className="relative flex h-full flex-col rounded-2xl border border-amber-100/80 bg-white/90 p-5 shadow-[0_8px_24px_rgba(180,120,40,0.06)] transition duration-300 hover:-translate-y-1 hover:border-amber-300/70 hover:shadow-[0_14px_30px_rgba(180,120,40,0.1)]">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                      {item.icon}
                    </span>
                    <span className="text-2xl font-black tracking-tight text-amber-200">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-bold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-neutral-500">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://www.instagram.com/bamdadgp"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              صفحه اینستاگرام بامداد
            </a>
            <p className="text-xs text-neutral-400 sm:text-sm">
              برندگان هر ماه در اینستاگرام اعلام می‌شوند
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
