import { Routes } from '@/route/routes'
import Link from 'next/link'

export default function Menu() {
  return (
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium text-lg md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
        <li className="text-xs font-light text-neutral-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
          <Link
            href={Routes.home}
            className="block lg:px-3 xl:px-5 py-2 xl:py-2.5"
          >
            صفحه اصلی
          </Link>
        </li>
        <li className="text-xs font-light text-neutral-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
          <Link
            href={Routes.store}
            className="block lg:px-3 xl:px-5 py-2 xl:py-2.5"
          >
            فروشگاه
          </Link>
        </li>
        <li className="cursor-pointer text-xs font-light text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full relative after:content-[' '] after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:block after:w-[30%] after:h-[3px] after:rounded-xl after:absolute after:bg-neutral-900">
          <Link href={Routes.brands} className="block px-7 py-2 xl:py-2.5">
            برندها
          </Link>
        </li>
        <li className="text-xs font-light text-neutral-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
          <Link
            href={Routes.about}
            className="block lg:px-3 xl:px-5 py-2 xl:py-2.5"
          >
            درباره ما
          </Link>
        </li>
        <li className="text-xs font-light text-neutral-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
          <Link
            href={Routes.contact}
            className="block lg:px-3 xl:px-5 py-2 xl:py-2.5"
          >
            تماس با ما
          </Link>
        </li>
      </ul>
    </div>
  )
}
