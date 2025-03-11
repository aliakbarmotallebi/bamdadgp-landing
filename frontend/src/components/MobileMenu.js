'use client'
import { Routes } from '@/route/routes'
import useAuthStore from '@/stores/auth'
import useGeneralStore from '@/stores/general'
import Link from 'next/link'

export default function MobileMenu() {
  const { openMenu } = useGeneralStore()
  const { isAuth, auth } = useAuthStore()

  return (
    <>
      <div
        className={`${
          openMenu ? 'block' : 'hidden'
        } fixed w-full h-full bg-stone-600/40 backdrop-blur-[1px] top-0 z-20`}
      ></div>
      <div
        className={`${
          openMenu ? 'h-screen' : 'h-0'
        } w-full px-4 fixed top-[80px] z-40 overflow-hidden transition-all duration-300`}
      >
        <div className="w-full px-4 relative left-1/2 overflow-hidden -translate-x-1/2 py-10 bg-white/50 border-b-4 border-stone-600 backdrop-blur-md max-h-[calc(100%-80px)]">
          {isAuth && (
            <div className="mt-5 px-5 flex items-start text-xs gap-2 text-stone-600 bg-yellow-300 py-4">
              <span className="size-5 block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-full"
                  viewBox="0 0 24 24"
                >
                  <rect fill="none" />
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
              <div className="font-semibold flex items-center self-end flex-wrap gap-1">
                <span>گروه تجاری بامداد</span>
                <span>عزیز، خوش آمدید</span>
              </div>
            </div>
          )}

          <nav className="mt-5">
            <ul className="font-medium text-stone-600">
              <li>
                <Link
                  href={Routes.home}
                  className="py-2.5 px-5 flex items-end gap-2"
                >
                  <span className="block size-[26px] p-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-full"
                      viewBox="0 0 24 24"
                    >
                      <rect fill="none" />
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.7"
                        d="m2.25 12l8.955-8.955a1.124 1.124 0 0 1 1.59 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold">صفحه اصلی</span>
                </Link>
              </li>
              <li>
                <Link
                  href={Routes.store}
                  className="py-2.5 px-5 flex items-end gap-2"
                >
                  <span className="block size-[26px] p-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M8 7V6a4 4 0 1 1 8 0v1h3c.552 0 1 .449 1 1.007v12.001c0 1.1-.895 1.992-1.994 1.992H5.994A1.994 1.994 0 0 1 4 20.008v-12C4 7.45 4.445 7 5 7zm1.2 0h5.6V6a2.8 2.8 0 0 0-5.6 0zM8 8.2H5.2v11.808c0 .436.356.792.794.792h12.012a.794.794 0 0 0 .794-.792V8.2H16V11h-1.2V8.2H9.2V11H8z"
                        strokeWidth="0.5"
                        stroke="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold">فروشگاه</span>
                </Link>
              </li>
              <li>
                <Link href={''} className="py-2.5 px-5 flex items-end gap-2">
                  <span className="block size-[26px] p-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill="currentColor"
                        d="M15.62 21.12a3 3 0 0 1-4.24 0L3.05 13C2.45 12.45 2 11.63 2 10.75V6a3 3 0 0 1 3-3h4.75c.88 0 1.7.45 2.25 1.05l8.07 8.38a3 3 0 0 1 0 4.24zm-.71-.71l4.45-4.45c.78-.78.78-2.05 0-2.83l-8.25-8.55C10.78 4.2 10.3 4 9.75 4l-4.78-.03C3.87 3.97 3 4.9 3 6v4.75c0 .55.2 1.03.58 1.36l8.5 8.3c.78.78 2.05.78 2.83 0M6.5 5A2.5 2.5 0 0 1 9 7.5A2.5 2.5 0 0 1 6.5 10A2.5 2.5 0 0 1 4 7.5A2.5 2.5 0 0 1 6.5 5m0 1A1.5 1.5 0 0 0 5 7.5A1.5 1.5 0 0 0 6.5 9A1.5 1.5 0 0 0 8 7.5A1.5 1.5 0 0 0 6.5 6"
                        strokeWidth="0.5"
                        stroke="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold">برندها</span>
                </Link>
              </li>
              <li>
                <Link
                  href={Routes.about}
                  className="py-2.5 px-5 flex items-end gap-2"
                >
                  <span className="block size-[26px] p-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill="currentColor"
                        d="M13.5 4A1.5 1.5 0 0 0 12 5.5A1.5 1.5 0 0 0 13.5 7A1.5 1.5 0 0 0 15 5.5A1.5 1.5 0 0 0 13.5 4m-.36 4.77c-1.19.1-4.44 2.69-4.44 2.69c-.2.15-.14.14.02.42c.16.27.14.29.33.16c.2-.13.53-.34 1.08-.68c2.12-1.36.34 1.78-.57 7.07c-.36 2.62 2 1.27 2.61.87c.6-.39 2.21-1.5 2.37-1.61c.22-.15.06-.27-.11-.52c-.12-.17-.24-.05-.24-.05c-.65.43-1.84 1.33-2 .76c-.19-.57 1.03-4.48 1.7-7.17c.11-.64.41-2.04-.75-1.94"
                        strokeWidth="0.5"
                        stroke="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold">درباره ما</span>
                </Link>
              </li>
              <li>
                <Link
                  href={Routes.contact}
                  className="py-2.5 px-5 flex items-end gap-2"
                >
                  <span className="block size-[26px] p-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                      <rect width="28" height="28" fill="none" />
                      <path
                        fill="currentColor"
                        d="M14 19a2 2 0 0 1-1.839-1.212a8 8 0 0 1-.951-.288l-.017-.006A8 8 0 0 1 8.708 16a8 8 0 1 1 13.257-6.75c.039.413-.3.75-.715.75c-.414 0-.745-.337-.793-.749A6.5 6.5 0 1 0 11.496 16l.04.017q.3.123.616.217a2 2 0 0 1 3.785 1.266A2 2 0 0 1 14 19m-7-1.5h1.169a9.6 9.6 0 0 1-1.518-1.48A3 3 0 0 0 4 19v.715C4 23.433 8.21 26 14 26s10-2.708 10-6.285V19a3 3 0 0 0-3-3h-3.645a3.5 3.5 0 0 1 .11 1.5H21l.145.007A1.5 1.5 0 0 1 22.5 19v.715l-.005.161c-.14 2.52-3.569 4.624-8.495 4.624c-5.111 0-8.5-2.111-8.5-4.785V19l.007-.145A1.5 1.5 0 0 1 7 17.5M19 10a5 5 0 0 1-2.644 4.411A3.5 3.5 0 0 0 14 13.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7c-.908 0-1.734.346-2.355.912a5 5 0 0 1-1.932-1.838A5 5 0 1 1 19 10"
                        strokeWidth="0.5"
                        stroke="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold">تماس با ما</span>
                </Link>
              </li>
            </ul>
          </nav>
          <Link href={Routes.seller}>
            <h2 className="mt-5 text-center text-sm font-semibold text-blue-600 underline underline-offset-8">
              ورود به پنل فروشندگان
            </h2>
          </Link>
        </div>
      </div>
    </>
  )
}
