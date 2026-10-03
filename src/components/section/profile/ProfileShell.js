'use client'

import ProfileHeader from '@/components/section/profile/ProfileHeader'
import ProfileTab from '@/components/section/profile/ProfileTab'
import { usePathname } from 'next/navigation'

export default function ProfileShell({
  title,
  subtitle,
  children,
}) {
  const path = usePathname()

  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-10 md:px-8 md:pt-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_100%_0%,rgba(253,186,116,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_0%_100%,rgba(251,191,36,0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-screen-xl">
        <ProfileHeader title={title} subtitle={subtitle} />
        <div className="overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-md">
          <ProfileTab path={path} />
          <div className="p-5 sm:p-7 lg:p-8">{children}</div>
        </div>
      </div>
    </section>
  )
}
