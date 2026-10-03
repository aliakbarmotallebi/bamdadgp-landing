'use client'
import { mockLogout } from '@/data/mockAuth'
import { Routes } from '@/route/routes'
import useAuthStore from '@/stores/auth'
import useCartStore from '@/stores/cart'
import useGeneralStore from '@/stores/general'
import { useAuthCheck } from '@/utils/authCheck'
import Hamburger from 'hamburger-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

export default function Control() {
  const { openMenu, setOpenMenu } = useGeneralStore()
  const { setIsAuth, isAuth, auth } = useAuthStore()
  const { cart } = useCartStore()
  const [showUser, setShowUser] = React.useState(false)
  const [showAccountMenu, setShowAccountMenu] = React.useState(false)
  const menuRef = React.useRef(null)

  useAuthCheck()

  React.useEffect(() => {
    setShowUser(isAuth)
  }, [isAuth])

  React.useEffect(() => {
    const onClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowAccountMenu(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const handleLogout = async () => {
    try {
      const response = mockLogout()
      if (response.logout) {
        toast.info('از حساب کاربری خود خارج شدید!')
        setIsAuth(false)
        setShowAccountMenu(false)
        setTimeout(() => {
          redirect(Routes.home)
        }, 500)
      }
    } catch {
      toast.error('عملیات با خطا مواجه شد!')
    }
  }

  const cartCount = cart?.length || 0

  return (
    <div className="flex items-center gap-2 lg:gap-3">
      {showUser ? (
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setShowAccountMenu(!showAccountMenu)}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50"
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-amber-50 text-amber-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5" />
              </svg>
            </span>
            <span className="hidden max-w-28 truncate lg:inline">
              {auth.username}
            </span>
          </button>

          <div
            className={`${
              showAccountMenu ? 'visible opacity-100' : 'invisible opacity-0'
            } absolute left-0 top-full z-20 mt-2 min-w-44 overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-lg transition`}
          >
            <ul onClick={() => setShowAccountMenu(false)} className="py-1">
              <li>
                <Link
                  href={Routes.profile}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-700 transition hover:bg-amber-50"
                >
                  پروفایل
                </Link>
              </li>
              <li>
                <Link
                  href={Routes.profileOrders}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-700 transition hover:bg-amber-50"
                >
                  سفارشات
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-rose-600 transition hover:bg-rose-50"
                >
                  خروج
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Link
          href={Routes.login}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50 lg:px-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.118a7.5 7.5 0 0 1 15 0"
            />
          </svg>
          <span className="hidden lg:inline">ورود</span>
        </Link>
      )}

      <Link
        href={Routes.cart}
        className="relative inline-flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50"
        aria-label="سبد خرید"
      >
        {cartCount > 0 && (
          <span className="absolute -top-1 -start-1 inline-flex min-w-4 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] font-bold leading-4 text-white">
            {cartCount > 9 ? '۹+' : cartCount.toLocaleString('fa-IR')}
          </span>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M2.316 3.25a.75.75 0 1 0 0 1.5h1.181a.75.75 0 0 1 .743.646l1.254 8.917a2.25 2.25 0 0 0 2.228 1.937h10.344a.75.75 0 0 0 0-1.5H7.722a.75.75 0 0 1-.743-.646l-.12-.853h10.852a2.25 2.25 0 0 0 2.15-1.583l1.921-6.188a.75.75 0 0 0-.716-.972H5.516A2.25 2.25 0 0 0 3.498 3.25zm3.525 2.758h14.207l-1.62 5.215a.75.75 0 0 1-.717.527H6.648zM7.784 17.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m6.786 1.75a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0" />
        </svg>
      </Link>

      <button
        type="button"
        onClick={() => setOpenMenu(!openMenu)}
        className="inline-flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 transition hover:bg-neutral-50 lg:hidden"
        aria-label="منو"
      >
        <Hamburger size={16} toggled={openMenu} toggle={setOpenMenu} />
      </button>
    </div>
  )
}
