'use client'

import { Routes } from '@/route/routes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  { href: Routes.home, label: 'صفحه اصلی' },
  { href: Routes.store, label: 'فروشگاه' },
  { href: Routes.brands, label: 'برندها' },
  { href: Routes.about, label: 'درباره ما' },
  { href: Routes.contact, label: 'تماس با ما' },
]

export default function Menu() {
  const pathname = usePathname()

  const isActive = href => {
    if (href === Routes.home) return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <ul className="flex items-center gap-1">
      {items.map(item => {
        const active = isActive(item.href)
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`relative block rounded-full px-4 py-2 text-sm font-medium transition ${
                active
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
              }`}
            >
              {item.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
