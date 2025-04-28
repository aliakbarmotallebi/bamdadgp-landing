import { Routes } from '@/route/routes'
import Link from 'next/link'

export default function Inquiry() {
  return (
    <section
      id="warranty-inquiry"
      className="services-section scroll-mt-28 px-4 sm:px-8 md:px-16"
    >
      <div className="relative mx-auto max-w-7xl my-16">
        <div className="absolute left-1/4 top-1/3 w-1/2 lg:w-[800px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(255,255,0,0.20)_0%,rgba(255,255,0,0)_90%)] -translate-x-1/2 z-[-1] blur-xl"></div>
        <div className="relative flex flex-col items-center lg:items-start px-4 py-16 lg:p-16 mb-4 bg-white border border-gray-200 overflow-hidden rounded-3xl shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-40 w-48 h-48 absolute z-0 top-0 right-10 lg:right-0 lg:-top-10"
            viewBox="0 0 20 20"
          >
            <g fill="none">
              <path
                fill="url(#fluentColorSearchVisual201)"
                fillRule="evenodd"
                d="M4.5 4a.5.5 0 0 0-.5.5V7a1 1 0 0 1-2 0V4.5A2.5 2.5 0 0 1 4.5 2H7a1 1 0 0 1 0 2zM12 3a1 1 0 0 1 1-1h2.5A2.5 2.5 0 0 1 18 4.5V7a1 1 0 1 1-2 0V4.5a.5.5 0 0 0-.5-.5H13a1 1 0 0 1-1-1m-9 9a1 1 0 0 1 1 1v2.5a.5.5 0 0 0 .5.5H7a1 1 0 1 1 0 2H4.5A2.5 2.5 0 0 1 2 15.5V13a1 1 0 0 1 1-1m14 0a1 1 0 0 1 1 1v2.5a2.5 2.5 0 0 1-2.5 2.5H13a1 1 0 1 1 0-2h2.5a.5.5 0 0 0 .5-.5V13a1 1 0 0 1 1-1"
                clipRule="evenodd"
              />
              <path
                fill="url(#fluentColorSearchVisual200)"
                d="M10 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4M7 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
              />
              <defs>
                <radialGradient
                  id="fluentColorSearchVisual200"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(3.375 3.75 -3.2117 2.89053 7.875 7.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0fafff30" />
                  <stop offset="1" stopColor="#2052cb30" />
                </radialGradient>
                <linearGradient
                  id="fluentColorSearchVisual201"
                  x1="1.368"
                  x2="13.914"
                  y1=".66"
                  y2="20.927"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".015" stopColor="#3dcbff30" />
                  <stop offset="1" stopColor="#0094f030" />
                </linearGradient>
              </defs>
            </g>
          </svg>
          <div className="flex items-center flex-row">
            <div className="py-1">
              <p className="text-base my-2 text-right">
                با استفاده از این بخش می‌توانید گارانتی کالای خود را به‌راحتی
                استعلام کرده و فعال‌سازی آن را انجام دهید. تنها کافیست فرم زیر
                را تکمیل نمایید تا اطلاعات دقیق و تاریخ فعالسازی برای شما نمایش
                داده شود.
              </p>
            </div>
            <div className="flex flex-col gap-3 mb-6">
              <h3 className="font-bold text-xl z-20">
                لطفا مشخصات خواسته شده را در فرم زیر وارد نمایید.
              </h3>
            </div>
          </div>

          <div className="relative flex justify-start lg:items-center items-center flex-col gap-2">
            <div className="absolute -top-12 w-24 h-20 -left-24 rotate-90 hidden lg:block">
              <svg
                fill="#fde047"
                width="100%"
                height="100%"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 352.2 352.2"
                xmlSpace="preserve"
                stroke="#fde047"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M348.232,100.282c-13.464-32.436-35.496-60.588-45.9-94.86c-1.836-5.508-11.016-7.956-13.464-1.836 c-14.688,34.272-36.72,65.484-47.124,101.592c-1.836,6.732,7.344,13.464,12.24,7.344c7.344-9.18,15.912-16.524,24.479-25.092 c-1.224,52.632,0,105.264-9.18,157.284c-4.896,28.152-11.628,59.977-31.824,81.396c-24.479,25.704-55.08,2.448-68.544-21.42 c-11.628-20.809-31.823-110.772-72.215-79.561c-23.868,18.36-29.988,43.452-37.332,70.992c-1.836,7.956-4.896,15.3-8.568,22.032 c-14.076,26.316-32.436-16.524-33.048-26.928c-1.224-20.809,4.896-42.229,9.792-62.424c1.836-6.12-7.344-8.568-9.792-2.448 c-11.016,28.764-26.316,77.724,0,102.815c23.256,21.42,42.84,7.345,52.02-17.748c6.12-16.523,29.376-108.323,56.304-65.483 c17.748,28.151,22.644,61.812,44.064,88.128c15.3,18.359,42.84,22.644,64.26,13.464c25.704-11.628,36.72-45.9,43.452-70.38 c16.523-61.2,16.523-127.296,14.688-190.332c14.688,9.792,31.212,18.972,47.736,25.092 C347.008,113.746,350.681,105.178,348.232,100.282z M268.672,78.25c7.956-17.136,17.748-34.272,26.316-51.408 c9.18,21.42,20.808,40.392,31.824,61.2c-12.853-7.956-25.092-17.136-39.168-18.972c-3.061-0.612-5.509,1.224-6.732,3.672 C276.628,73.354,272.345,75.19,268.672,78.25z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="w-full flex flex-wrap items-center justify-center lg:justify-start gap-4 px-8 lg:px-0">
              <div>
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  className="w-64 outline-none rounded-md px-2.5 py-2 bg-white border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all duration-200"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="شماره موبایل"
                  className="w-64 outline-none rounded-md px-2.5 py-2 bg-white border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all duration-200"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="شماره گارانتی"
                  className="w-64 outline-none rounded-md px-2.5 py-2 bg-white border-2 text-stone-800 border-gray-200 focus:border-gray-500 transition-all duration-200"
                />
              </div>
              <button className="bg-yellow-300 w-64 lg:w-auto hover:bg-[#bg-yellow-300] transition-all duration-200 hover:text-white hover:bg-yellow-500 text-stone-800 py-2.5 px-3.5 rounded-md">
                استعلام وفعالسازی گارانتی
              </button>
            </div>
          </div>
        </div>

        {/* <div className="bg-white flex flex-wrap gap-4 items-center px-12 py-6 rounded-3xl border-2 border-[#cc8e3520]">
          <h2 className="font-bold text-lg sm:text-xl lg:text-2xl ml-auto">
            <svg
              className="w-20 h-20 inline-block"
              viewBox="0 0 512 512"
              enableBackground="new 0 0 512 512"
              id="Layer_1"
              version="1.1"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <g>
                  <path
                    d="M450.255,434.511H61.745c-13.257,0-24.042-10.786-24.042-24.042V101.532    c0-13.257,10.785-24.042,24.042-24.042h388.511c13.257,0,24.042,10.786,24.042,24.042v308.937    C474.298,423.725,463.513,434.511,450.255,434.511z M61.745,97.489c-2.229,0-4.042,1.813-4.042,4.042v308.937    c0,2.229,1.813,4.042,4.042,4.042h388.511c2.229,0,4.042-1.813,4.042-4.042V101.532c0-2.229-1.813-4.042-4.042-4.042H61.745z"
                    fill="#444B54"
                  />
                </g>

                <g>
                  <path
                    d="M450.117,163.589H63.655c-13.298,0-24.118-10.785-24.118-24.042v-38.015    c0-13.257,10.819-24.042,24.118-24.042h386.462c13.298,0,24.118,10.786,24.118,24.042v38.015    C474.235,152.804,463.416,163.589,450.117,163.589z M63.655,97.489c-2.271,0-4.118,1.813-4.118,4.042v38.015    c0,2.229,1.847,4.042,4.118,4.042h386.462c2.271,0,4.118-1.813,4.118-4.042v-38.015c0-2.229-1.847-4.042-4.118-4.042H63.655z"
                    fill="#444B54"
                  />
                </g>

                <g>
                  <path
                    d="M93.73,128.69c-2.63,0-5.21-1.06-7.07-2.92c-1.86-1.86-2.93-4.44-2.93-7.07c0-2.64,1.07-5.22,2.93-7.08    c1.86-1.86,4.44-2.92,7.07-2.92c2.63,0,5.21,1.06,7.07,2.92c1.86,1.86,2.93,4.44,2.93,7.08c0,2.63-1.07,5.21-2.93,7.07    C98.94,127.63,96.36,128.69,93.73,128.69z"
                    fill="#444B54"
                  />
                </g>

                <g>
                  <path
                    d="M142.49,128.7c-2.63,0-5.21-1.07-7.07-2.93c-1.86-1.87-2.93-4.44-2.93-7.08c0-2.63,1.07-5.2,2.93-7.07    c1.86-1.86,4.44-2.93,7.07-2.93s5.21,1.07,7.07,2.93c1.86,1.87,2.93,4.44,2.93,7.07c0,2.64-1.07,5.21-2.93,7.08    C147.7,127.63,145.12,128.7,142.49,128.7z"
                    fill="#444B54"
                  />
                </g>

                <g>
                  <path
                    d="M191.25,128.69c-2.63,0-5.21-1.06-7.07-2.92c-1.86-1.86-2.93-4.44-2.93-7.07c0-2.64,1.07-5.21,2.93-7.08    c1.86-1.86,4.44-2.92,7.07-2.92c2.63,0,5.21,1.06,7.07,2.92c1.86,1.87,2.93,4.44,2.93,7.08c0,2.63-1.07,5.21-2.93,7.07    C196.46,127.63,193.88,128.69,191.25,128.69z"
                    fill="#444B54"
                  />
                </g>

                <g>
                  <path
                    d="M247.809,393.335c-59.525,0-107.952-48.427-107.952-107.952s48.427-107.952,107.952-107.952    S355.76,225.858,355.76,285.383S307.333,393.335,247.809,393.335z M247.809,197.432c-48.497,0-87.952,39.455-87.952,87.952    s39.455,87.952,87.952,87.952s87.952-39.455,87.952-87.952S296.305,197.432,247.809,197.432z"
                    fill="#444B54"
                  />
                </g>

                <g>
                  <path
                    d="M208.249,284.528c-14.924,0-27.065-12.142-27.065-27.065c0-14.924,12.142-27.066,27.065-27.066    s27.065,12.142,27.065,27.066C235.314,272.387,223.173,284.528,208.249,284.528z M208.249,250.397    c-3.896,0-7.065,3.17-7.065,7.066s3.169,7.065,7.065,7.065s7.065-3.169,7.065-7.065S212.145,250.397,208.249,250.397z"
                    fill="#444B54"
                  />
                </g>

                <g>
                  <path
                    d="M285.254,284.528c-14.924,0-27.065-12.142-27.065-27.065c0-14.924,12.142-27.066,27.065-27.066    s27.065,12.142,27.065,27.066C312.319,272.387,300.178,284.528,285.254,284.528z M285.254,250.397    c-3.896,0-7.065,3.17-7.065,7.066s3.169,7.065,7.065,7.065s7.065-3.169,7.065-7.065S289.15,250.397,285.254,250.397z"
                    fill="#444B54"
                  />
                </g>

                <g>
                  <path
                    d="M247.812,363.574c-28.48,0-51.651-23.17-51.651-51.65c0-5.523,4.477-10,10-10h83.294    c5.523,0,10,4.477,10,10C299.455,340.404,276.288,363.574,247.812,363.574z M217.78,321.924    c4.195,12.567,16.073,21.65,30.032,21.65c13.956,0,25.831-9.083,30.025-21.65H217.78z"
                    fill="#444B54"
                  />
                </g>

                <g>
                  <path
                    d="M464.298,410.468c0,7.755-6.287,14.042-14.042,14.042H61.745c-7.755,0-14.042-6.287-14.042-14.042V101.532    c0-7.755,6.287-14.042,14.042-14.042h388.511c7.755,0,14.042,6.287,14.042,14.042V410.468z"
                    fill="#D9DCE1"
                  />

                  <path
                    d="M450.255,434.511H61.745c-13.257,0-24.042-10.786-24.042-24.042V101.532    c0-13.257,10.785-24.042,24.042-24.042h388.511c13.257,0,24.042,10.786,24.042,24.042v308.937    C474.298,423.725,463.513,434.511,450.255,434.511z M61.745,97.489c-2.229,0-4.042,1.813-4.042,4.042v308.937    c0,2.229,1.813,4.042,4.042,4.042h388.511c2.229,0,4.042-1.813,4.042-4.042V101.532c0-2.229-1.813-4.042-4.042-4.042H61.745z"
                    fill="#444B54"
                  />
                </g>

                <g>
                  <path
                    d="M464.235,139.547c0,7.755-6.321,14.042-14.118,14.042H63.655c-7.797,0-14.118-6.287-14.118-14.042v-38.015    c0-7.755,6.321-14.042,14.118-14.042h386.462c7.797,0,14.118,6.287,14.118,14.042V139.547z"
                    fill="#65A0D6"
                  />

                  <path
                    d="M450.117,163.589H63.655c-13.298,0-24.118-10.785-24.118-24.042v-38.015    c0-13.257,10.819-24.042,24.118-24.042h386.462c13.298,0,24.118,10.786,24.118,24.042v38.015    C474.235,152.804,463.416,163.589,450.117,163.589z M63.655,97.489c-2.271,0-4.118,1.813-4.118,4.042v38.015    c0,2.229,1.847,4.042,4.118,4.042h386.462c2.271,0,4.118-1.813,4.118-4.042v-38.015c0-2.229-1.847-4.042-4.118-4.042H63.655z"
                    fill="#444B54"
                  />
                </g>

                <g>
                  <path
                    d="M93.73,128.69c-2.63,0-5.21-1.06-7.07-2.92c-1.86-1.86-2.93-4.44-2.93-7.07c0-2.64,1.07-5.22,2.93-7.08    c1.86-1.86,4.44-2.92,7.07-2.92c2.63,0,5.21,1.06,7.07,2.92c1.86,1.86,2.93,4.44,2.93,7.08c0,2.63-1.07,5.21-2.93,7.07    C98.94,127.63,96.36,128.69,93.73,128.69z"
                    fill="#444B54"
                  />
                </g>

                <g>
                  <path
                    d="M142.49,128.7c-2.63,0-5.21-1.07-7.07-2.93c-1.86-1.87-2.93-4.44-2.93-7.08c0-2.63,1.07-5.2,2.93-7.07    c1.86-1.86,4.44-2.93,7.07-2.93s5.21,1.07,7.07,2.93c1.86,1.87,2.93,4.44,2.93,7.07c0,2.64-1.07,5.21-2.93,7.08    C147.7,127.63,145.12,128.7,142.49,128.7z"
                    fill="#444B54"
                  />
                </g>

                <g>
                  <path
                    d="M191.25,128.69c-2.63,0-5.21-1.06-7.07-2.92c-1.86-1.86-2.93-4.44-2.93-7.07c0-2.64,1.07-5.21,2.93-7.08    c1.86-1.86,4.44-2.92,7.07-2.92c2.63,0,5.21,1.06,7.07,2.92c1.86,1.87,2.93,4.44,2.93,7.08c0,2.63-1.07,5.21-2.93,7.07    C196.46,127.63,193.88,128.69,191.25,128.69z"
                    fill="#444B54"
                  />
                </g>

                <g>
                  <circle cx="247.809" cy="285.383" fill="#3C74BA" r="97.952" />

                  <path
                    d="M247.809,393.335c-59.525,0-107.952-48.427-107.952-107.952s48.427-107.952,107.952-107.952    S355.76,225.858,355.76,285.383S307.333,393.335,247.809,393.335z M247.809,197.432c-48.497,0-87.952,39.455-87.952,87.952    s39.455,87.952,87.952,87.952s87.952-39.455,87.952-87.952S296.305,197.432,247.809,197.432z"
                    fill="#444B54"
                  />
                </g>

                <g>
                  <circle cx="208.249" cy="257.463" fill="#D9DCE1" r="17.065" />

                  <path
                    d="M208.249,284.528c-14.924,0-27.065-12.142-27.065-27.065c0-14.924,12.142-27.066,27.065-27.066    s27.065,12.142,27.065,27.066C235.314,272.387,223.173,284.528,208.249,284.528z M208.249,250.397    c-3.896,0-7.065,3.17-7.065,7.066s3.169,7.065,7.065,7.065s7.065-3.169,7.065-7.065S212.145,250.397,208.249,250.397z"
                    fill="#444B54"
                  />
                </g>

                <g>
                  <circle cx="285.254" cy="257.463" fill="#D9DCE1" r="17.065" />

                  <path
                    d="M285.254,284.528c-14.924,0-27.065-12.142-27.065-27.065c0-14.924,12.142-27.066,27.065-27.066    s27.065,12.142,27.065,27.066C312.319,272.387,300.178,284.528,285.254,284.528z M285.254,250.397    c-3.896,0-7.065,3.17-7.065,7.066s3.169,7.065,7.065,7.065s7.065-3.169,7.065-7.065S289.15,250.397,285.254,250.397z"
                    fill="#444B54"
                  />
                </g>

                <g>
                  <path
                    d="M206.161,311.924c0,23.008,18.643,41.65,41.651,41.65c23,0,41.643-18.642,41.643-41.65H206.161z"
                    fill="#D9DCE1"
                  />

                  <path
                    d="M247.812,363.574c-28.48,0-51.651-23.17-51.651-51.65c0-5.523,4.477-10,10-10h83.294    c5.523,0,10,4.477,10,10C299.455,340.404,276.288,363.574,247.812,363.574z M217.78,321.924    c4.195,12.567,16.073,21.65,30.032,21.65c13.956,0,25.831-9.083,30.025-21.65H217.78z"
                    fill="#444B54"
                  />
                </g>
              </g>
            </svg>
            با شرکت در نظرسنجی ، مارا در ارائه خدمات بهتر یاری کنید.
          </h2>

          <div className="flex gap-4 items-center flex-1 justify-end">
            <Link
              href={Routes.survey}
              className="text-white min-w-[182px] bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center"
            >
              فرم ارسال نظرسنجی
              <svg
                className="size-6 px-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"
                />
              </svg>
            </Link>
            <p className="font-semibold text-lg whitespace-nowrap"></p>
          </div>
        </div> */}

        <div className="bg-white p-6 rounded-3xl border-2 border-[#cc8e3520] ">
          <h1 className="mb-6 text-stone-600 font-bold text-lg text-center py-2">
            مراحل شرکت در قرعه کشی
          </h1>
          <div className="relative grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 md:gap-0 lg:flex lg:justify-center">
            <div className="size-72 border-t-4 border-yellow-400/60 border-dotted rounded-full text-center relative">
              <div className="p-8 relative text-center">
                <strong className="text-2xl xl:text-4xl block text-yellow-500/60">
                  قدم اول
                </strong>
                <span className="size-12 xl:size-16 my-4 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#cc8e3550] size-full"
                    viewBox="0 0 512 512"
                  >
                    <rect width="512" height="512" fill="none" />
                    <path
                      fill="currentColor"
                      d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175 175 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.03 175.03 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195M48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192m408.971 264.284a24.03 24.03 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.03 24.03 0 0 1-.002 33.941"
                      strokeWidth="6"
                      stroke="currentColor"
                    />
                  </svg>
                </span>
                <p className="px-4 font-medium text-stone-600">
                  استعلام و فعالسازی گارانتی
                </p>
              </div>
            </div>
            <div className="size-72 border-b-4 border-yellow-400/60 border-dotted rounded-full text-center relative">
              <div className="p-8 relative text-center">
                <strong className="text-2xl xl:text-4xl block text-yellow-500/60">
                  قدم دوم
                </strong>
                <span className="size-12 xl:size-16 my-4 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-full text-[#cc8e3550]"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M18.644 4a2.7 2.7 0 0 0-.626-.975C16.984 2 15.322 2 12 2S7.015 2 5.982 3.025A2.7 2.7 0 0 0 5.356 4M5 18c.087 1.42.326 2.323.982 2.975C7.015 22 8.677 22 12 22s4.985 0 6.017-1.025c.657-.652.896-1.556.983-2.975M6 10l2 2m0-2l-2 2m5-2l2 2m0-2l-2 2m5-2l2 2m0-2l-2 2m1-5H7c-1.886 0-2.828 0-3.414.586S3 9.114 3 11s0 2.828.586 3.414S5.114 15 7 15h10c1.886 0 2.828 0 3.414-.586S21 12.886 21 11s0-2.828-.586-3.414S18.886 7 17 7m-5 12v.01"
                      color="currentColor"
                    />
                  </svg>
                </span>
                <p className="px-4 font-medium text-stone-600">
                  دریافت کد قرعه کشی بصورت پیامک
                </p>
              </div>
            </div>
            <div className="size-72 border-t-4 border-yellow-400/60 border-dotted rounded-full text-center relative">
              <div className="p-8 relative text-center">
                <strong className="text-2xl xl:text-4xl block text-yellow-500/60">
                  قدم سوم
                </strong>
                <span className="size-12 xl:size-16 my-4 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#cc8e3550]"
                    viewBox="0 0 16 16"
                  >
                    <rect width="16" height="16" fill="none" />
                    <path
                      fill="currentColor"
                      d="M5 10c2.585 0 4.778 1.923 4.998 4.457a.5.5 0 0 1-.996.086C8.827 12.536 7.076 11 5 11c-2.035 0-3.825 1.597-4.002 3.545a.5.5 0 1 1-.996-.09C.226 11.986 2.452 10 5 10m0-7a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4a2 2 0 0 0 0-4M12.41.008L12.5 0a.5.5 0 0 1 .492.41L13 .5V3h2.5a.5.5 0 0 1 .09.992L15.5 4H13v2.5a.5.5 0 0 1-.41.492L12.5 7a.5.5 0 0 1-.492-.41L12 6.5V4H9.5a.5.5 0 0 1-.09-.992L9.5 3H12V.5a.5.5 0 0 1 .41-.492L12.5 0z"
                      strokeWidth="0.4"
                      stroke="currentColor"
                    />
                  </svg>
                </span>
                <p className="p-4 font-medium text-stone-600">
                  دنبال کردن صفحه اینستاگرام گروه بامداد
                </p>
              </div>
            </div>
            <div className="size-72 border-b-4 border-yellow-400/60 border-dotted rounded-full text-center relative">
              <div className="p-8 relative text-center">
                <strong className="text-2xl xl:text-4xl block text-yellow-500/60">
                  قدم چهارم
                </strong>
                <span className="size-12 xl:size-16 my-4 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#cc8e3550]"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M14.76 12H6.832m0 0c0-.275-.057-.55-.17-.808L4.285 5.814c-.76-1.72 1.058-3.442 2.734-2.591L20.8 10.217c1.46.74 1.46 2.826 0 3.566L7.02 20.777c-1.677.851-3.495-.872-2.735-2.591l2.375-5.378A2 2 0 0 0 6.83 12"
                    />
                  </svg>
                </span>
                <p className="p-4 font-medium text-stone-600">
                  ارسال کد قرعه کشی خود به دایرکت صفحه اینستاگرام بامداد
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
