'use client'
import { Routes } from '@/route/routes'
import useAuthStore from '@/stores/auth'
import useGeneralStore from '@/stores/general'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const items = [
  { href: Routes.home, label: 'صفحه اصلی' },
  { href: Routes.store, label: 'فروشگاه' },
  { href: Routes.brands, label: 'برندها' },
  { href: Routes.about, label: 'درباره ما' },
  { href: Routes.contact, label: 'تماس با ما' },
]

export default function MobileMenu() {
  const { openMenu, setOpenMenu } = useGeneralStore()
  const { isAuth, auth } = useAuthStore()
  const pathname = usePathname()

  useEffect(() => {
    setOpenMenu(false)
  }, [pathname, setOpenMenu])

  useEffect(() => {
    document.body.style.overflow = openMenu ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [openMenu])

  const isActive = href => {
    if (href === Routes.home) return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-neutral-900/40 backdrop-blur-sm transition ${
          openMenu ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpenMenu(false)}
      />

      <div
        className={`fixed inset-x-3 top-[4.5rem] z-40 origin-top transition duration-300 lg:hidden ${
          openMenu
            ? 'scale-100 opacity-100'
            : 'pointer-events-none scale-95 opacity-0'
        }`}
      >
        <div className="max-h-[calc(100vh-6rem)] overflow-y-auto rounded-3xl border border-neutral-100 bg-white p-4 shadow-xl">
          {isAuth && (
            <div className="mb-3 flex items-center gap-2 rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
              <span className="font-semibold">{auth.username}</span>
              <span>عزیز، خوش آمدید</span>
            </div>
          )}

          <nav>
            <ul className="space-y-1">
              {items.map(item => {
                const active = isActive(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                        active
                          ? 'bg-neutral-900 text-white'
                          : 'text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {!isAuth && (
            <Link
              href={Routes.login}
              className="mt-4 flex items-center justify-center rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white"
            >
              ورود به حساب کاربری
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
