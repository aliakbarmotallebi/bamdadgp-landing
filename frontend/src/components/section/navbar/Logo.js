import { Routes } from '@/route/routes'
import Link from 'next/link'

export default function Logo({ h }) {
  return (
    <Link
      className="inline-flex items-center space-x-3 rtl:space-x-reverse"
      href={Routes.home}
    >
      <svg viewBox="0 0 14 16" className={`text-neutral-600 h-${h} xl:h-24`}>
        <use href="/assets/images/bamdad-logo.svg#logo" />
      </svg>
    </Link>
  )
}
