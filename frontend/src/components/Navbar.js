'use client'

import Control from '@/components/section/navbar/Control'
import Logo from '@/components/section/navbar/Logo'
import Menu from '@/components/section/navbar/Menu'
import React from 'react'
import MobileMenu from './MobileMenu'
export default function Navbar() {
  return (
    <>
      <div className="absolute top-20 right-40 w-1/3 z-[-1] opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-yellow-400 to-orange-50"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-yellow-400 to-orange-50"></div>
      </div>
      <section className="sticky top-0 z-40 px-4 lg:px-0">
        <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 -z-10"></div>
        <header className="w-full relative top-2 z-50">
          <nav className="w-full start-0 top-0 lg:bg-white/30 bg-white/50 px-4 backdrop-blur-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
              <Logo />
              <div className="flex gap-2 lg:gap-4 items-center md:order-2 rtl:space-x-reverse">
                <Control />
              </div>
              <div className="hidden lg:block">
                <Menu />
              </div>
            </div>
          </nav>
        </header>

        <MobileMenu />
      </section>
    </>
  )
}
