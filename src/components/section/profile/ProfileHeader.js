import { Routes } from '@/route/routes'
import Link from 'next/link'

export default function ProfileHeader({
  title = 'حساب کاربری',
  subtitle = 'مدیریت اطلاعات، سفارش‌ها و پرداخت‌ها',
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm font-medium text-amber-700">گروه تجاری بامداد</p>
        <h1 className="mt-1 text-2xl font-extrabold text-neutral-900 md:text-3xl">
          {title}
        </h1>
        <p className="mt-2 text-sm leading-7 text-neutral-500">{subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500">
          <span>
            شناسه کاربر:{' '}
            <span className="font-semibold text-neutral-700">UD003054</span>
          </span>
          <span>
            آخرین ورود:{' '}
            <span className="font-semibold text-neutral-700">
              ۲۱ آبان ۱۴۰۲ — ۱۳:۰۲
            </span>
          </span>
        </div>
      </div>
      <Link
        href={Routes.home}
        className="inline-flex items-center gap-1.5 self-start rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50"
      >
        بازگشت
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4 rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m10 16 4-4-4-4"
          />
        </svg>
      </Link>
    </div>
  )
}
