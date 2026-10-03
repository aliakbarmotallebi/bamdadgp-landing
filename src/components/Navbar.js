'use client'

import Control from '@/components/section/navbar/Control'
import Logo from '@/components/section/navbar/Logo'
import Menu from '@/components/section/navbar/Menu'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  return (
    <section className="sticky top-0 z-50">
      <header className="w-full">
        <nav className="border-b border-neutral-200/70 bg-white/80 px-4 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
          <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between gap-4 lg:h-[4.5rem]">
            <Logo />
            <div className="hidden flex-1 justify-center lg:flex">
              <Menu />
            </div>
            <div className="flex items-center">
              <Control />
            </div>
          </div>
        </nav>
      </header>
      <MobileMenu />
    </section>
  )
}
