import { Routes } from '@/route/routes'
import useAuthStore from '@/stores/auth'
import { useAuthCheck } from '@/utils/authCheck'
import Link from 'next/link'
import React from 'react'

export default function Control() {
  const { isAuth, auth } = useAuthStore()
  const [showUser, setShowUser] = React.useState(false)
  useAuthCheck()
  React.useEffect(() => {
    setShowUser(isAuth)
  }, [isAuth])
  return (
    <>
      {showUser ? (
        <h3 className="text-xs underline underline-offset-4 text-stone-600 font-medium">
          {auth.username}، عزیز خوش آمدید
        </h3>
      ) : (
        <Link
          className="relative group py-1 text-sm font-medium text-stone-600 hover:text-stone-950 border-b border-b-transparent hover:border-b-stone-800 transition-all duration-300"
          href={Routes.login}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mx-1 inline-block stroke-stone-600 group-hover:stroke-stone-950 transition-all duration-300"
            viewBox="0 0 24 24"
          >
            <rect fill="none" />
            <g fill="none" stroke="current" strokeWidth="1.6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 21h2m16 0h-2M5 21h14M5 21V9.328M19 21V9.328m-14 0a2 2 0 0 1-.11-.068l-.54-.36a2 2 0 0 1-.747-2.407l.894-2.236A2 2 0 0 1 6.354 3h11.292a2 2 0 0 1 1.857 1.257l.894 2.236A2 2 0 0 1 19.65 8.9l-.54.36a2 2 0 0 1-.11.068m-14 0a2 2 0 0 0 2.11-.068L9 8l1.89 1.26a2 2 0 0 0 2.22 0L15 8l1.89 1.26a2 2 0 0 0 2.11.068"
              />
              <path d="M14 21v-5a2 2 0 1 0-4 0v5" />
            </g>
          </svg>
          ورود به فروشگاه
        </Link>
      )}
      <span className="h-8 w-px bg-stone-300 mx-1 block"></span>
      <a
        className="relative px-4 py-3 text-xs font-light text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full transition-all duration-300 after:contents-[' '] after:block after:w-0 after:transition-all after:duration-300 hover:after:w-[30%] after:h-[3px] after:opacity-0 hover:after:opacity-100 after:bg-gray-900 after:absolute after:-bottom-1.5 after:rounded-xl after:left-1/2 after:-translate-x-1/2"
        href="https://seller.bamdadgp.com"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 mx-1 inline-block"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
        </svg>
        ورود به پنل فروشندگان
      </a>
    </>
  )
}
