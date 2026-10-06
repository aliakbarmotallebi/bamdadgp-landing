'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const statusMap = {
  STATUS_CONFIRMED: {
    label: 'فعال',
    className: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  },
  STATUS_UNCONFIRMED: {
    label: 'در انتظار تایید',
    className: 'bg-amber-50 text-amber-800 ring-amber-200',
  },
  STATUS_EXPIRED: {
    label: 'منقضی شده',
    className: 'bg-rose-50 text-rose-700 ring-rose-200',
  },
}

const WarrantyActivated = ({ onClose, data }) => {
  const [mounted, setMounted] = useState(false)
  const status = statusMap[data?.status]

  const rows = [
    { label: 'نام دستگاه', value: data?.productName },
    { label: 'دسته‌بندی', value: data?.categoryName },
    { label: 'نام و نام خانوادگی', value: data?.fullName },
    { label: 'شماره تماس', value: data?.phoneNumber },
    { label: 'شماره سریال کارت', value: data?.serialNumber },
    { label: 'تاریخ صدور کارت', value: data?.startDate },
    { label: 'تاریخ اتمام گارانتی', value: data?.expireDate },
  ]

  useEffect(() => {
    setMounted(true)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = event => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  if (!mounted) return null

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="warranty-result-title"
        onClick={e => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-neutral-200/80 bg-white p-5 shadow-[0_24px_60px_rgba(0,0,0,0.16)] sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="بستن"
          className="absolute left-4 top-4 inline-flex size-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition hover:bg-neutral-50 hover:text-neutral-900"
        >
          <svg
            className="size-3.5"
            aria-hidden
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>

        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 ring-8 ring-emerald-50/60">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          </div>
          <h2
            id="warranty-result-title"
            className="text-2xl font-bold text-neutral-900"
          >
            نتیجه استعلام گارانتی
          </h2>
          <p className="mt-2 text-sm text-neutral-500">
            اطلاعات گارانتی کالای شما با موفقیت دریافت شد.
          </p>
          {status && (
            <div className="mt-4 inline-flex items-center gap-2">
              <span className="text-sm text-neutral-500">وضعیت:</span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${status.className}`}
              >
                {status.label}
              </span>
            </div>
          )}
        </div>

        <div className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <dl className="divide-y divide-neutral-100">
            {rows.map(row => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[180px_1fr] sm:items-center sm:gap-4"
              >
                <dt className="text-sm font-medium text-neutral-500">
                  {row.label}
                </dt>
                <dd className="text-sm font-semibold text-neutral-900 sm:text-start">
                  {row.value || '—'}
                </dd>
              </div>
            ))}
          </dl>

          <div className="border-t border-amber-100 bg-gradient-to-l from-amber-50/90 to-orange-50/40 px-5 py-5">
            <p className="mb-2 text-sm font-semibold text-neutral-800">
              توضیحات
            </p>
            <p className="text-sm leading-8 text-neutral-600">
              محاسبه تاریخ شروع قرارداد برای فروش در مارکت پلیس ها(...) طبق
              فاکتور و برای فروش افلاین فاکتور و تاریخ رسید خرید میباشد.
            </p>
          </div>
        </div>

        <div className="mt-7 text-center">
          <button
            onClick={onClose}
            type="button"
            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            ثبت گارانتی جدید
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  )
}

export default WarrantyActivated
