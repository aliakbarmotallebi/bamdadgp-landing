'use client'

import Control from '@/components/section/navbar/Control'
import Logo from '@/components/section/navbar/Logo'
import Menu from '@/components/section/navbar/Menu'
import React from 'react'
export default function Navbar() {
  return (
    <>
      <div className="absolute top-20 right-40 w-1/3 z-[-1] opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-yellow-400 to-orange-50"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-yellow-400 to-orange-50"></div>
      </div>
      <section className="sticky top-0 z-20">
        <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 -z-10"></div>
        <header className="w-full top-0 z-50">
          <nav className="w-full start-0 top-0 bg-white/30 backdrop-blur-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
              <Logo />
              <div className="flex gap-4 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <Control />
              </div>

              <Menu />
            </div>
          </nav>
        </header>
      </section>
    </>
  )
}
