'use client'
import { Routes } from '@/route/routes'
import useAuthStore from '@/stores/auth'
import useCartStore from '@/stores/cart'
import useGeneralStore from '@/stores/general'
import { useAuthCheck } from '@/utils/authCheck'
import axios from 'axios'
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
  useAuthCheck()
  React.useEffect(() => {
    setShowUser(isAuth)
  }, [isAuth])

  const handleLogout = async () => {
    try {
      const resposne = await axios.get('/api/auth/logout')
      if (resposne.data.logout) {
        toast.info('از حساب کاربری خود خارج شدید!')
        setIsAuth(false)
        setShowAccountMenu(false)
        setTimeout(() => {
          redirect(Routes.home)
        }, 500)
      }
    } catch (error) {
      toast.error('عملیات با خطا مواجه شد!')
    }
  }

  return (
    <>
      {showUser ? (
        <div className="relative flex items-center gap-4">
          <div className="text-stone-600">
            <h3
              onClick={() => setShowAccountMenu(!showAccountMenu)}
              className="text-sm underline underline-offset-4 font-medium cursor-pointer lg:block hidden"
            >
              {auth.username}، عزیز خوش آمدید
            </h3>

            <span
              className="lg:hidden size-6 block cursor-pointer"
              onClick={() => setShowAccountMenu(!showAccountMenu)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M12 12.25c-2.313 0-4.445.526-6.024 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662c.629.512 1.51.877 2.7 1.117c1.192.242 2.747.369 4.773.369s3.58-.127 4.774-.369c1.19-.24 2.07-.605 2.7-1.117c1.279-1.042 1.277-2.5 1.276-3.662V17.5c0-1.634-1.17-2.96-2.725-3.836c-1.58-.888-3.711-1.414-6.025-1.414M4.75 17.5c0-.851.622-1.775 1.961-2.528c1.316-.74 3.184-1.222 5.29-1.222c2.104 0 3.972.482 5.288 1.222c1.34.753 1.961 1.677 1.961 2.528c0 1.308-.04 2.044-.724 2.6c-.37.302-.99.597-2.05.811c-1.057.214-2.502.339-4.476.339s-3.42-.125-4.476-.339c-1.06-.214-1.68-.509-2.05-.81c-.684-.557-.724-1.293-.724-2.601"
                  clipRule="evenodd"
                  strokeWidth="0.3"
                  stroke="currentColor"
                />
              </svg>
            </span>

            <div
              className={`${
                showAccountMenu ? 'block' : 'hidden'
              } absolute top-full mt-4 bg-white min-w-32 z-10 w-full shadow-md rounded-md border border-stone-300`}
            >
              <ul onClick={() => setShowAccountMenu(false)}>
                <li className="p-1 cursor-pointer hover:bg-yellow-300 transition-all duration-200 pt-2 ">
                  <Link
                    className="flex justify-start items-center gap-1"
                    href={Routes.profile}
                  >
                    <span className="block size-5 p-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-full fill-stone-800 stroke-stone-800"
                        viewBox="0 0 24 24"
                      >
                        <rect fill="none" />
                        <path
                          fill="current"
                          d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4"
                          strokeWidth="0.5"
                          stroke="#current"
                        />
                      </svg>
                    </span>
                    <span className="pt-1 text-sm font-medium text-stone-800">
                      پروفایل
                    </span>
                  </Link>
                </li>
                <li className="p-1 cursor-pointer hover:bg-yellow-300 transition-all duration-200 pt-2 ">
                  <Link
                    className="flex justify-start items-center gap-1"
                    href={'#'}
                  >
                    <span className="block size-5 p-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-full"
                        viewBox="0 0 48 48"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth="3"
                        >
                          <rect width="30" height="36" x="9" y="8" rx="2" />
                          <path
                            strokeLinecap="round"
                            d="M18 4v6m12-6v6m-14 9h16m-16 8h12m-12 8h8"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="pt-1 text-sm font-medium text-stone-800">
                      سفارشات
                    </span>
                  </Link>
                </li>
                <li
                  onClick={handleLogout}
                  className="p-1 cursor-pointer hover:bg-yellow-300 transition-all duration-200 pb-2 flex justify-start items-center gap-1"
                >
                  <span className="block size-5 p-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-full"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M7.023 5.5a9 9 0 1 0 9.953 0M12 2v8"
                        color="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="pt-1 text-sm font-medium text-stone-800">
                    خروج
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <Link
          className="relative group py-1 text-sm font-medium text-stone-600 hover:text-stone-950 border-b border-b-transparent hover:border-b-stone-800 transition-all duration-300"
          href={Routes.login}
        >
          <span className="hidden lg:block">
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
          </span>

          <span className="lg:hidden size-6 block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M12 12.25c-2.313 0-4.445.526-6.024 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662c.629.512 1.51.877 2.7 1.117c1.192.242 2.747.369 4.773.369s3.58-.127 4.774-.369c1.19-.24 2.07-.605 2.7-1.117c1.279-1.042 1.277-2.5 1.276-3.662V17.5c0-1.634-1.17-2.96-2.725-3.836c-1.58-.888-3.711-1.414-6.025-1.414M4.75 17.5c0-.851.622-1.775 1.961-2.528c1.316-.74 3.184-1.222 5.29-1.222c2.104 0 3.972.482 5.288 1.222c1.34.753 1.961 1.677 1.961 2.528c0 1.308-.04 2.044-.724 2.6c-.37.302-.99.597-2.05.811c-1.057.214-2.502.339-4.476.339s-3.42-.125-4.476-.339c-1.06-.214-1.68-.509-2.05-.81c-.684-.557-.724-1.293-.724-2.601"
                clipRule="evenodd"
                strokeWidth="0.5"
                stroke="currentColor"
              />
            </svg>
          </span>
        </Link>
      )}
      <span className="h-8 w-px bg-stone-300 mx-1 block"></span>

      <Link href={Routes.cart}>
        <div className="size-8 relative">
          <span
            className={`${
              cart.length > 0 ? 'inline-flex' : 'hidden'
            } absolute  items-center justify-center size-4 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -start-1 dark:border-gray-900`}
          ></span>

          <span className="block size-full text-stone-600 p-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-full"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill="currentColor"
                d="M2.316 3.25a.75.75 0 1 0 0 1.5h1.181a.75.75 0 0 1 .743.646l1.254 8.917a2.25 2.25 0 0 0 2.228 1.937h10.344a.75.75 0 0 0 0-1.5H7.722a.75.75 0 0 1-.743-.646l-.12-.853h10.852a2.25 2.25 0 0 0 2.15-1.583l1.921-6.188a.75.75 0 0 0-.716-.972H5.516A2.25 2.25 0 0 0 3.498 3.25zm3.525 2.758h14.207l-1.62 5.215a.75.75 0 0 1-.717.527H6.648zM7.784 17.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m6.786 1.75a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0"
              />
            </svg>
          </span>
        </div>
      </Link>
      <span className="h-8 w-px bg-stone-300 mx-1 block"></span>

      <Link
        className="relative lg:block hidden px-4 py-3 text-xs font-light text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full transition-all duration-300 after:contents-[' '] after:block after:w-0 after:transition-all after:duration-300 hover:after:w-[30%] after:h-[3px] after:opacity-0 hover:after:opacity-100 after:bg-gray-900 after:absolute after:-bottom-1.5 after:rounded-xl after:left-1/2 after:-translate-x-1/2"
        href={Routes.seller}
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
      </Link>

      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="block lg:hidden  text-slate-800 -ms-2 rounded-md relative"
      >
        <Hamburger size={18} toggled={openMenu} toggle={setOpenMenu} />
      </button>
    </>
  )
}
