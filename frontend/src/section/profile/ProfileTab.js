import { Routes } from '@/route/routes'
import Link from 'next/link'

export default function ProfileTab({ path }) {
  return (
    <div className="border-b flex justify-between items-center px-5">
      <ul className="md:flex flex-row items-stretch lg:items-center gap-5 w-full">
        <li className="">
          <Link
            href={Routes.profile}
            className={`${
              path === Routes.profile
                ? 'border-green-700 text-green-700'
                : 'border-transparent text-slate-600'
            } flex py-5 items-center font-bold text-sm gap-2 hover:text-green-700 relative border-b-2 hover:border-green-700 px-2`}
          >
            <svg
              className="inline stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M18.364 5.636A9 9 0 1 1 5.636 18.364 9 9 0 0 1 18.364 5.636"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17.307 19.257C16.923 17.417 14.705 16 12 16c-2.705 0-4.923 1.417-5.307 3.257m7.428-11.378A3 3 0 1 1 9.88 12.12a3 3 0 0 1 4.24-4.24"
              ></path>
            </svg>
            پروفایل
          </Link>
        </li>
        <li className="">
          <Link
            href={Routes.profileOrders}
            className={`${
              path === Routes.profileOrders
                ? 'border-green-700 text-green-700'
                : 'border-transparent text-slate-600'
            } flex py-5 items-center font-bold text-sm gap-2 hover:text-green-700 relative border-b-2 hover:border-green-700 px-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M134,120v56a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0ZM237.88,97.85,224,201.85A14,14,0,0,1,210.13,214H45.87A14,14,0,0,1,32,201.85l-13.87-104A14,14,0,0,1,32,82H69.28l54.2-61.95a6,6,0,0,1,9,0l54.2,62H224a14,14,0,0,1,13.87,15.85ZM85.22,82h85.56L128,33.11ZM225.5,94.68A2,2,0,0,0,224,94H32a2,2,0,0,0-1.51.68A2,2,0,0,0,30,96.26l13.86,104a2,2,0,0,0,2,1.73H210.13a2,2,0,0,0,2-1.73L226,96.26A1.93,1.93,0,0,0,225.5,94.68ZM181.4,114a6,6,0,0,0-6.57,5.37l-5.6,56A6,6,0,0,0,174.6,182l.61,0a6,6,0,0,0,6-5.4l5.6-56A6,6,0,0,0,181.4,114ZM81.17,119.4a6,6,0,0,0-11.94,1.2l5.6,56a6,6,0,0,0,6,5.4l.61,0a6,6,0,0,0,5.37-6.57Z"></path>
            </svg>
            سفارش ها
          </Link>
        </li>
        <li className="">
          <Link
            href={Routes.profilePayments}
            className={`${
              path === Routes.profilePayments
                ? 'border-green-700 text-green-700'
                : 'border-transparent text-slate-600'
            } flex py-5  items-center font-bold text-sm gap-2 hover:text-green-700 relative border-b-2 hover:border-green-700  px-2`}
          >
            <span className="size-6 block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <rect fill="none" />
                <path
                  fill="current"
                  d="M8 8.5h-.07c-1.14-.15-2.51-.68-2.51-2.38C5.42 5.1 6.1 4 7.99 4s2.51 1.36 2.57 2.08c.02.28-.18.52-.46.54a.51.51 0 0 1-.54-.45c-.02-.19-.19-1.16-1.58-1.16c-1.04 0-1.57.38-1.57 1.12c0 .38 0 1.18 1.64 1.39a.503.503 0 0 1-.07 1Z"
                  strokeWidth="0.5"
                  stroke="current"
                />
                <path
                  fill="current"
                  d="M8 12c-1.9 0-2.51-1.36-2.57-2.08c-.02-.28.18-.52.46-.54c.27-.02.51.18.54.45c.02.19.19 1.16 1.58 1.16c1.04 0 1.57-.38 1.57-1.12c0-.38 0-1.18-1.64-1.39a.503.503 0 0 1-.43-.56c.04-.27.29-.47.56-.43c1.14.15 2.51.68 2.51 2.38c0 1.02-.68 2.12-2.57 2.12Z"
                  strokeWidth="0.5"
                  stroke="current"
                />
                <path
                  fill="current"
                  d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6"
                  strokeWidth="0.5"
                  stroke="current"
                />
                <path
                  fill="current"
                  d="M8 13c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5"
                  strokeWidth="0.5"
                  stroke="current"
                />
              </svg>
            </span>
            پرداخت ها
          </Link>
        </li>

        <li className="md:mr-auto flex py-5 text-slate-600 items-center font-bold text-sm gap-2 relative hover:text-red-600 border-b-2 border-transparent px-2 hover:border-red-600">
          <span className="block size-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-full"
              fill="currentColor"
            >
              <path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"></path>
            </svg>
          </span>
          خروج از حساب کابری
          <a href="" className="absolute top-0 left-0 w-full h-full"></a>
        </li>
      </ul>
    </div>
  )
}
