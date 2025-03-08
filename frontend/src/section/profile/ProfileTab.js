export default function ProfileTab() {
  return (
    <div className="border-b flex justify-between items-center px-5">
      <ul className="md:flex flex-row items-stretch lg:items-center gap-5 w-full">
        <li className="flex py-5 items-center font-bold text-sm gap-2 hover:text-green-700 hover:border-b-2 relative border-green-700 text-green-700 border-b-2">
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
          <a
            href="./profile.html"
            className="absolute top-0 left-0 w-full h-full"
          ></a>
        </li>
        <li className="flex py-5 text-slate-600 items-center font-bold text-sm gap-2 hover:text-green-700 relative hover:border-b-2 border-green-700">
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
          <a
            href="/profile/orders"
            className="absolute top-0 left-0 w-full h-full"
          ></a>
        </li>
        <li className="flex py-5 text-slate-600 items-center font-bold text-sm gap-2 hover:text-green-700 relative hover:border-b-2 border-green-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="20"
            height="20"
          >
            <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
          </svg>
          پرداخت ها
          <a
            href="./profile-favorites.html"
            className="absolute top-0 left-0 w-full h-full"
          ></a>
        </li>
      </ul>
    </div>
  )
}
