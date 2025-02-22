import { Routes } from "@/route/routes";
import Link from "next/link";

export default function Header (){
    return(
        <>
        <div className="absolute top-20 right-40 w-1/3 z-[-1] opacity-20">
            <div
        className="blur-[106px] h-56 bg-gradient-to-br from-yellow-400 to-orange-50"
            ></div>
            <div
            className="blur-[106px] h-32 bg-gradient-to-r from-yellow-400 to-orange-50"
            ></div>
        </div>
        <section className="sticky top-0 z-20">
  <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 -z-10">

  </div>
  <header className="w-full top-0 z-50">
    <nav className="w-full start-0 top-0 bg-white/30 backdrop-blur-lg">
      <div
        className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"
      >
        <a
          className="inline-flex items-center space-x-3 rtl:space-x-reverse"
          href="/"
        >
          <svg viewBox="0 0 14 16" className="text-neutral-600 h-24">
            <use href="/assets/images/bamdad-logo.svg#logo" />
          </svg>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            className="relative px-4 py-3 text-xs font-light text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full transition-all duration-300 after:contents-[' '] after:block after:w-0 after:transition-all after:duration-300 hover:after:w-[30%] after:h-[3px] after:opacity-0 hover:after:opacity-100 after:bg-gray-900 after:absolute after:-bottom-1.5 after:rounded-xl after:left-1/2 after:-translate-x-1/2"
            href="https://seller.bamdadgp.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mx-1 inline-block"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"
              ></path>
            </svg>
            ورود به پنل فروشندگان
          </a>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium text-lg md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
          >
            <li
              className="text-xs font-light text-neutral-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              <Link href={Routes.home} className="block px-5 py-2.5" >صفحه اصلی</Link>
            </li>
            <li
              className="text-xs font-light text-neutral-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              <Link href={Routes.store} className="block px-5 py-2.5" >فروشگاه</Link>
            </li>
            <li
              className="cursor-pointer text-xs font-light text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full relative after:content-[' '] after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:block after:w-[30%] after:h-[3px] after:rounded-xl after:absolute after:bg-neutral-900"
            >
              <Link href={Routes.brands} className="block px-7 py-2.5" >برندها</Link>
              </li>
            <li
              className="text-xs font-light text-neutral-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              <Link href={Routes.about} className="block px-5 py-2.5" >درباره ما</Link>
            </li>
            <li
              className="text-xs font-light text-neutral-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              <Link href={Routes.contact} className="block px-5 py-2.5" >تماس با ما</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</section>
</>
    )
}