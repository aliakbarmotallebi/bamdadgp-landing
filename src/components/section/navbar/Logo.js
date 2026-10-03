import { Routes } from '@/route/routes'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link
      href={Routes.home}
      className="inline-flex shrink-0 items-center transition hover:opacity-80"
      aria-label="گروه تجاری بامداد"
    >
      <svg
        viewBox="0 0 14 16"
        className="h-12 text-neutral-800 lg:h-14"
      >
        <use href="/assets/images/bamdad-logo.svg#logo" />
      </svg>
    </Link>
  )
}
