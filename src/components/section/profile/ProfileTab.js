'use client'

import { mockLogout } from '@/data/mockAuth'
import { Routes } from '@/route/routes'
import useAuthStore from '@/stores/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { toast } from 'react-toastify'

const tabs = [
  {
    href: Routes.profile,
    label: 'پروفایل',
    icon: (
      <svg
        className="size-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 5.636A9 9 0 1 1 5.636 18.364 9 9 0 0 1 18.364 5.636"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.307 19.257C16.923 17.417 14.705 16 12 16c-2.705 0-4.923 1.417-5.307 3.257m7.428-11.378A3 3 0 1 1 9.88 12.12a3 3 0 0 1 4.24-4.24"
        />
      </svg>
    ),
  },
  {
    href: Routes.profileOrders,
    label: 'سفارش‌ها',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M134,120v56a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0ZM237.88,97.85,224,201.85A14,14,0,0,1,210.13,214H45.87A14,14,0,0,1,32,201.85l-13.87-104A14,14,0,0,1,32,82H69.28l54.2-61.95a6,6,0,0,1,9,0l54.2,62H224a14,14,0,0,1,13.87,15.85ZM85.22,82h85.56L128,33.11ZM225.5,94.68A2,2,0,0,0,224,94H32a2,2,0,0,0-1.51.68A2,2,0,0,0,30,96.26l13.86,104a2,2,0,0,0,2,1.73H210.13a2,2,0,0,0,2-1.73L226,96.26A1.93,1.93,0,0,0,225.5,94.68ZM181.4,114a6,6,0,0,0-6.57,5.37l-5.6,56A6,6,0,0,0,174.6,182l.61,0a6,6,0,0,0,6-5.4l5.6-56A6,6,0,0,0,181.4,114ZM81.17,119.4a6,6,0,0,0-11.94,1.2l5.6,56a6,6,0,0,0,6,5.4l.61,0a6,6,0,0,0,5.37-6.57Z" />
      </svg>
    ),
  },
  {
    href: Routes.profilePayments,
    label: 'پرداخت‌ها',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
        />
      </svg>
    ),
  },
]

export default function ProfileTab({ path }) {
  const { setIsAuth } = useAuthStore()

  const handleLogout = () => {
    mockLogout()
    setIsAuth(false)
    toast.info('از حساب کاربری خود خارج شدید!')
    setTimeout(() => {
      redirect(Routes.home)
    }, 400)
  }

  return (
    <div className="border-b border-neutral-100 bg-neutral-50/70 px-3 sm:px-5">
      <ul className="flex flex-wrap items-stretch gap-1 sm:gap-2">
        {tabs.map(tab => {
          const active = path === tab.href
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                className={`relative flex items-center gap-2 px-3 py-4 text-sm font-semibold transition sm:px-4 ${
                  active
                    ? 'text-neutral-900'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                {tab.icon}
                {tab.label}
                {active && (
                  <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-amber-500" />
                )}
              </Link>
            </li>
          )
        })}
        <li className="ms-auto">
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-4 text-sm font-semibold text-rose-600 transition hover:text-rose-700 sm:px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-5"
              fill="currentColor"
            >
              <path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z" />
            </svg>
            خروج
          </button>
        </li>
      </ul>
    </div>
  )
}
