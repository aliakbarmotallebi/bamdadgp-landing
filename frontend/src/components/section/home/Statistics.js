'use client'
import Marquee from '@/components/Marquee'
import Modal from '@/components/Modal'
import { Routes } from '@/route/routes'
import Link from 'next/link'
import React from 'react'

export default function Statistics() {
  const [modal, setModal] = React.useState({
    lottary: false,
  })
  const toggleModal = key => {
    setModal(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <>
      <section id="statistics-section">
        <div className="relative w-full flex justify-center items-start pt-12 lg:pt-24 2xl:pt-12 pb-12 px-4 md:px-8 lg:px-0">
          <div className="absolute right-0 left-1/2 lg:left-0 lg:-translate-x-0 -translate-x-1/2 lg:right-60 top-1/2 -translate-y-1/2 w-[55%] h-[80%] rounded-full bg-[radial-gradient(circle,rgba(255,255,50,0.2)_0%,rgba(255,255,0,0)_90%)] z-[-1] blur-xl"></div>
          <div className="max-w-screen-xl w-full bg-white/10 backdrop-blur-lg">
            <div className="flex flex-col gap-3 mb-6">
              <h2 className="text-xl font-bold">
                گروه تجاری بامداد، پیشرو در ارائه انواع محصولات برقی و قطعات
              </h2>
              <h3 className="font-medium">
                همراه شماییم برای تجربه شروعی مطمئن در خرید انواع محصولات با
                گارانتی معتبر
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:px-16 md:px-36">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-5 relative bg-[#fefefe] py-6 w-full rounded-3xl border border-orange-900/10 overflow-hidden space-y-4">
                  <div className="absolute inset-0 pointer-events-none flex z-20">
                    <div className="w-1/2 bg-gradient-to-l from-[#fefefe] to-transparent"></div>
                    <div className="flex-1"></div>
                    <div className="w-1/2 bg-gradient-to-r from-[#fefefe] to-transparent"></div>
                  </div>
                  <Marquee direction="ltr" speed={0.25} />
                  <Marquee direction="rtl" speed={0.25} />
                  <Marquee direction="ltr" speed={0.25} />
                </div>

                <article className="bg-[#fefefe] w-full border border-orange-900/10 py-12 rounded-3xl">
                  <div className="w-full flex gap-2 relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[100%] rounded-full bg-[radial-gradient(circle,rgba(100,100,100,0.15)_0%,rgba(255,255,0,0)_90%)] z-[0] blur-xl"></div>
                    <div className="w-1/4 bg-white/20 backdrop-blur-lg border-2 border-orange-700/10 border-r-0 rounded-l-2xl relative z-10"></div>
                    <div className="w-2/4 bg-white backdrop-blur-lg py-20 border-2 border-orange-700/10 rounded-2xl flex justify-center relative z-10">
                      <div className="size-24 flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-red-600 w-40 h-40"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"
                            strokeWidth="1"
                          />
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M31.876 20.484c-4.767 5.049-11.086 5.045-15.74-.021l-2.575 2.506c5.421 6.463 15.514 6.29 20.838.015z"
                            strokeWidth="1"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-1/4 bg-white/20 backdrop-blur-lg border-2 border-orange-700/10 border-l-0 rounded-r-2xl relative z-10"></div>
                  </div>
                  <div className="mt-8 px-16 flex flex-col gap-4">
                    <h2 className="text-center font-semibold text-neutral-800">
                      خرید تا خدمات پس از فروش با گروه بامداد
                    </h2>
                    <p className="text-center text-neutral-600 font-medium">
                      ما در هرقدم از مسیر از انتخاب کالا تا خدمات پس از فروش در
                      کنار شما هستیم.
                    </p>
                    <div className="text-center">
                      <a
                        href="https://bamdadgp.com/store"
                        className="bg-white hover:bg-slate-50 transition-all duration-200 border border-orange-900/10 text-center rounded-full py-3 p-6 font-semibold"
                      >
                        الان بخر
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-[#fefefe] p-12 w-full rounded-3xl border border-orange-900/10">
                  <div>
                    <h2 className="font-semibold">تخفیفات روزانه محصولات</h2>
                    <div className="relative flex justify-center p-8">
                      <div className="size-20">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M5.06152 12C5.55362 8.05369 8.92001 5 12.9996 5C17.4179 5 20.9996 8.58172 20.9996 13C20.9996 17.4183 17.4179 21 12.9996 21H8M13 13V9M11 3H15M3 15H8M5 18H10"
                              stroke="#cc8e3550"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <div className="size-8 absolute top-2 left-20">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="-1.68 -1.68 27.36 27.36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="SVGRepo_bgCarrier"
                            strokeWidth="0"
                            transform="translate(8.280000000000001,8.280000000000001), scale(0.31)"
                          >
                            <rect
                              x="-1.68"
                              y="-1.68"
                              width="27.36"
                              height="27.36"
                              rx="13.68"
                              fill="#cc8e35"
                              strokeWidth="0"
                            ></rect>
                          </g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="transparent"
                            strokeWidth="0.048"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M12 3L13.4302 8.31181C13.6047 8.96 13.692 9.28409 13.8642 9.54905C14.0166 9.78349 14.2165 9.98336 14.451 10.1358C14.7159 10.308 15.04 10.3953 15.6882 10.5698L21 12L15.6882 13.4302C15.04 13.6047 14.7159 13.692 14.451 13.8642C14.2165 14.0166 14.0166 14.2165 13.8642 14.451C13.692 14.7159 13.6047 15.04 13.4302 15.6882L12 21L10.5698 15.6882C10.3953 15.04 10.308 14.7159 10.1358 14.451C9.98336 14.2165 9.78349 14.0166 9.54905 13.8642C9.28409 13.692 8.96 13.6047 8.31181 13.4302L3 12L8.31181 10.5698C8.96 10.3953 9.28409 10.308 9.54905 10.1358C9.78349 9.98336 9.98336 9.78349 10.1358 9.54905C10.308 9.28409 10.3953 8.96 10.5698 8.31181L12 3Z"
                              stroke="#cc8e35"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <div className="size-8 absolute bottom-8 right-20">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="-1.68 -1.68 27.36 27.36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="SVGRepo_bgCarrier"
                            strokeWidth="0"
                            transform="translate(8.280000000000001,8.280000000000001), scale(0.31)"
                          >
                            <rect
                              x="-1.68"
                              y="-1.68"
                              width="27.36"
                              height="27.36"
                              rx="13.68"
                              fill="#cc8e35"
                              strokeWidth="0"
                            ></rect>
                          </g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="transparent"
                            strokeWidth="0.048"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M12 3L13.4302 8.31181C13.6047 8.96 13.692 9.28409 13.8642 9.54905C14.0166 9.78349 14.2165 9.98336 14.451 10.1358C14.7159 10.308 15.04 10.3953 15.6882 10.5698L21 12L15.6882 13.4302C15.04 13.6047 14.7159 13.692 14.451 13.8642C14.2165 14.0166 14.0166 14.2165 13.8642 14.451C13.692 14.7159 13.6047 15.04 13.4302 15.6882L12 21L10.5698 15.6882C10.3953 15.04 10.308 14.7159 10.1358 14.451C9.98336 14.2165 9.78349 14.0166 9.54905 13.8642C9.28409 13.692 8.96 13.6047 8.31181 13.4302L3 12L8.31181 10.5698C8.96 10.3953 9.28409 10.308 9.54905 10.1358C9.78349 9.98336 9.98336 9.78349 10.1358 9.54905C10.308 9.28409 10.3953 8.96 10.5698 8.31181L12 3Z"
                              stroke="#cc8e35"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="pe-10">
                      <p>جهت اطلاع از تخفیفات روزانه با ما همراه باشید</p>
                    </div>
                  </div>
                </article>

                <article className="bg-[#fefefe] py-12 px-8 w-full rounded-3xl border border-orange-900/10 flex justify-center">
                  <Link
                    href={Routes.contact}
                    className="px-4 py-4 border rounded-full text-neutral-600 hover:text-neutral-800 hover:border-orange-900/40 transition-all duration-300 border-orange-900/10 font-medium text-sm flex items-center gap-4"
                  >
                    پشتیبانی در کنار شماست
                    <span className="block size-8">
                      <svg
                        version="1.1"
                        id="Icons"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 32 32"
                        xmlSpace="preserve"
                        fill="#fed330"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M16,2C9.4,2,4,7.3,4,13.9v3.5c0,0.1,0,0.1,0,0.2c0,0.1,0,0.3,0,0.4c0,2.8,2.2,5,5,5c0.6,0,1-0.4,1-1v-8c0-0.6-0.4-1-1-1 c-1.1,0-2.2,0.4-3,1v-0.2C6,8.4,10.5,4,16,4s10,4.4,10,9.9V14c-0.8-0.6-1.9-1-3-1c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1 c0.7,0,1.4-0.2,2-0.4c-1,2.1-2.8,3.7-5,4.6c0-0.1,0-0.1,0-0.2c0-0.6-0.4-1-1-1h-3c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1 c6.6,0,12-5.2,12-11.6v-1V15v-1.1C28,7.3,22.6,2,16,2z"></path>
                        </g>
                      </svg>
                    </span>
                  </Link>
                </article>
              </div>

              <div className="flex flex-col gap-8">
                <article className="relative bg-[#fefefe] py-6 w-full rounded-3xl border border-orange-900/10 lg:mt-28">
                  <span className="absolute size-8 -top-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#e58e26"
                        d="m19.184 7.805l-2.965-2.967c-2.027-2.03-3.04-3.043-4.129-2.803s-1.581 1.587-2.568 4.28l-.668 1.823c-.263.718-.395 1.077-.632 1.355a2 2 0 0 1-.36.332c-.296.213-.664.314-1.4.517c-1.66.458-2.491.687-2.804 1.23a1.53 1.53 0 0 0-.204.773c.004.627.613 1.236 1.83 2.455L6.7 16.216l-4.476 4.48a.764.764 0 0 0 1.08 1.08l4.475-4.48l1.466 1.468c1.226 1.226 1.839 1.84 2.47 1.84c.265 0 .526-.068.757-.2c.548-.313.778-1.149 1.239-2.822c.202-.735.303-1.102.515-1.399q.14-.194.322-.352c.275-.238.632-.372 1.345-.64l1.844-.693c2.664-1 3.996-1.501 4.23-2.586c.235-1.086-.77-2.093-2.783-4.107"
                        strokeWidth="0.5"
                        stroke="#e58e26"
                      />
                    </svg>
                  </span>
                  <h2 className="font-semibold text-center">
                    گروه بامداد را در اینستاگرام دنبال کنید
                  </h2>

                  <div className="my-6 px-16 relative flex justify-center items-center">
                    <svg
                      className="w-36 h-36"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                      xmlSpace="preserve"
                    >
                      <path
                        className="fill-[#fde494]"
                        d="M114.759,512h61.103l-96.414-61.793L0.198,403.898C3.659,464.09,53.716,512,114.759,512z"
                      />
                      <path
                        className="fill-[#fea150]"
                        d="M335.448,476.69l-69.006-17.655H114.759c-34.072,0-61.793-27.721-61.793-61.793v-33.876
                 l-26.483-28.42L0,339.628v57.613c0,2.236,0.072,4.454,0.198,6.657L175.862,512h208.767L335.448,476.69z"
                      />
                      <path
                        className="fill-[#ff5d4a]"
                        d="M441.655,440.14c-11.244,11.637-26.993,18.894-44.414,18.894H266.442L384.629,512h12.612
                 c41.202,0,77.396-21.829,97.64-54.527l-27.022-16.094L441.655,440.14z"
                      />
                      <path
                        className="fill-[#e45261]"
                        d="M459.034,326.014v71.228c0,16.652-6.633,31.775-17.379,42.899l53.227,17.333
                 C505.728,439.954,512,419.318,512,397.241v-62.805l-27.396-15.391L459.034,326.014z"
                      />
                      <polygon
                        className="fill-[#ff4d95]"
                        points="512,149.19 483.797,142.474 459.034,157.3 459.034,326.014 512,334.436 "
                      />
                      <path
                        className="fill-[#cb319c]"
                        d="M512,114.759c0-57.633-42.708-105.473-98.136-113.55L344.43,30.101l-35.183,22.865h87.994
                 c34.072,0,61.793,27.721,61.793,61.793V157.3L512,149.19V114.759z"
                      />
                      <path
                        className="fill-[#8a3293]"
                        d="M317.732,0l-65.682,24.636l-51.805,28.33h109.002L413.864,1.208C408.435,0.417,402.887,0,397.241,0
                 H317.732z"
                      />
                      <path
                        className="fill-[#ff5d4a]"
                        d="M256,406.069c18.358,0,35.954-3.32,52.226-9.38l-86.02-39.047l-91.178-18.657
                 C157.946,379.39,203.913,406.069,256,406.069z"
                      />
                      <path
                        className="fill-[#e45261]"
                        d="M329.153,305.358c-15.883,23.465-42.748,38.918-73.153,38.918c-40.273,0-74.308-27.118-84.867-64.046
                 l-23.682-14.801l-40.847,4.538c2.353,25.345,11.014,48.887,24.425,69.017l177.198,57.705c38.303-14.264,69.237-43.757,85.458-81.068
                 l-31.753-16.085L329.153,305.358z"
                      />
                      <g>
                        <path
                          className="fill-[#ff4d95]"
                          d="M167.724,256c0-21.878,8.018-41.907,21.247-57.346l-37.658-5.268l-38.25,16.892
                   c-4.625,14.422-7.132,29.784-7.132,45.722c0,4.712,0.244,9.365,0.671,13.966l64.53,10.262
                   C168.929,272.524,167.724,264.403,167.724,256z"
                        />
                        <path
                          className="fill-[#ff4d95]"
                          d="M406.069,256c0-32.138-10.159-61.946-27.428-86.39l-37.397-5.308l-38.418,16.917
                   c24.873,15.631,41.45,43.298,41.45,74.781c0,18.27-5.58,35.261-15.123,49.358l64.531,10.262
                   C401.634,297.334,406.069,277.18,406.069,256z"
                        />
                      </g>
                      <g>
                        <path
                          className="fill-[#cb319c]"
                          d="M256,167.724c17.194,0,33.242,4.959,46.826,13.495l75.815-11.609
                   c-27.196-38.493-72.03-63.679-122.641-63.679c-66.81,0-123.554,43.889-142.937,104.345l75.908-11.624
                   C205.173,179.742,229.203,167.724,256,167.724z"
                        />
                        <path
                          className="fill-[#cb319c]"
                          d="M397.241,150.069c19.47,0,35.31-15.84,35.31-35.31s-15.84-35.31-35.31-35.31
                   c-19.47,0-35.31,15.84-35.31,35.31S377.771,150.069,397.241,150.069z"
                        />
                      </g>
                      <polygon
                        className="fill-[#ff5d4a]"
                        points="52.966,313.564 27.47,300.847 0,296.316 0,339.629 52.966,363.366 "
                      />
                      <polygon
                        className="fill-[#e45261]"
                        points="0,253.014 0,296.316 52.966,313.564 52.966,261.437 25.446,251.543 "
                      />
                      <polygon
                        className="fill-[#ff4d95]"
                        points="52.966,219.479 25.749,219.233 0,227.59 0,253.014 52.966,261.437 "
                      />
                      <polygon
                        className="fill-[#cb319c]"
                        points="52.966,179.757 24.911,182.603 0,205.962 0,227.59 52.966,219.479 "
                      />
                      <polygon
                        className="fill-[#8a3293]"
                        points="0,205.962 52.966,179.757 52.966,119.362 21.9,122.333 0,143.241 "
                      />
                      <path
                        className="fill-[#523494]"
                        d="M205.059,0L84.206,46.481L1.387,96.928C0.477,102.741,0,108.695,0,114.759v28.482l52.966-23.878
                 v-4.605c0-34.072,27.721-61.793,61.793-61.793h85.487L317.732,0H205.059z"
                      />
                      <path
                        className="fill-[#2d2d87]"
                        d="M114.759,0C57.545,0,9.978,42.088,1.387,96.928L205.059,0H114.759z"
                      />
                    </svg>
                  </div>

                  <div className="flex justify-center">
                    <a
                      href="https://www.instagram.com/bamdadgp"
                      target="_b"
                      className="bg-white hover:bg-slate-50 transition-all duration-200 border border-orange-900/10 text-center rounded-full py-3 p-6 font-semibold"
                    >
                      دنبال کنید
                    </a>
                  </div>
                </article>

                <article className="relative bg-[#fefefe] py-24 w-full rounded-3xl border border-orange-900/10 flex flex-col gap-4 overflow-hidden">
                  <div className="size-[400px] rounded-full border border-orange-800/10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[10]"></div>
                  <div className="size-[300px] rounded-full border border-orange-800/10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[10]"></div>
                  <div className="size-[200px] rounded-full border border-orange-800/10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[10]"></div>
                  <div className="size-[100px] rounded-full border border-orange-800/10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[10]"></div>

                  <h2 className="font-semibold text-5xl text-center">5,600+</h2>
                  <span className="text-lg font-semibold text-center">
                    تراکنش موفق
                  </span>
                </article>

                <article className="relative bg-[#fefefe] py-16 w-full rounded-3xl border border-orange-900/10 flex flex-col gap-9">
                  <div className="px-16 flex justify-center">
                    <svg
                      viewBox="0 0 14 16"
                      className="text-neutral-800 h-32 xl:h-36"
                    >
                      <use href="/assets/images/bamdad-logo.svg#logo"></use>
                    </svg>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <p className="text-center font-semibold">
                      گروه تجاری بامداد
                    </p>
                  </div>
                </article>
              </div>

              <div className="flex flex-col gap-8">
                <article className="relative bg-[#fefefe] p-6 w-full flex flex-col gap-8 rounded-3xl border border-orange-900/10 lg:mt-14 overflow-hidden">
                  <div className="absolute left-0 right-0 -translate-x-4 top-1/2 size-80 m-auto border-2 border-orange-900/5 rounded-full">
                    <div className="size-8 absolute top-1 left-16 rotate-12">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="-1.68 -1.68 27.36 27.36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          id="SVGRepo_bgCarrier"
                          strokeWidth="0"
                          transform="translate(8.280000000000001,8.280000000000001), scale(0.31)"
                        >
                          <rect
                            x="-1.68"
                            y="-1.68"
                            width="27.36"
                            height="27.36"
                            rx="13.68"
                            fill="#cc8e35"
                            strokeWidth="0"
                          ></rect>
                        </g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke="transparent"
                          strokeWidth="0.048"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M12 3L13.4302 8.31181C13.6047 8.96 13.692 9.28409 13.8642 9.54905C14.0166 9.78349 14.2165 9.98336 14.451 10.1358C14.7159 10.308 15.04 10.3953 15.6882 10.5698L21 12L15.6882 13.4302C15.04 13.6047 14.7159 13.692 14.451 13.8642C14.2165 14.0166 14.0166 14.2165 13.8642 14.451C13.692 14.7159 13.6047 15.04 13.4302 15.6882L12 21L10.5698 15.6882C10.3953 15.04 10.308 14.7159 10.1358 14.451C9.98336 14.2165 9.78349 14.0166 9.54905 13.8642C9.28409 13.692 8.96 13.6047 8.31181 13.4302L3 12L8.31181 10.5698C8.96 10.3953 9.28409 10.308 9.54905 10.1358C9.78349 9.98336 9.98336 9.78349 10.1358 9.54905C10.308 9.28409 10.3953 8.96 10.5698 8.31181L12 3Z"
                            stroke="#cc8e35"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute left-0 right-0 top-1/2 size-80 m-auto border-2 border-orange-900/5 rounded-full"></div>

                  <div>
                    <div className="relative bg-neutral-800 py-2 px-4 rounded-2xl flex items-center gap-6">
                      <div className="absolute -bottom-2.5 h-12 rounded-2xl w-[92%] bg-neutral-800/10 left-1/2 -translate-x-1/2 -z-[0] shadow-lg"></div>
                      <figure className="size-10 rounded-full overflow-hidden">
                        <img
                          src="https://avatars.githubusercontent.com/u/141553836?v=4"
                          // alt=""
                        />
                      </figure>
                      <p className="text-white flex items-center gap-1">
                        از خدمات بامداد راضیم!
                        <span className="size-6 block">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                d="M8.88875 14.5414C8.63822 14.0559 8.0431 13.8607 7.55301 14.1058C7.05903 14.3528 6.8588 14.9535 7.10579 15.4474C7.18825 15.6118 7.29326 15.7659 7.40334 15.9127C7.58615 16.1565 7.8621 16.4704 8.25052 16.7811C9.04005 17.4127 10.2573 18.0002 12.0002 18.0002C13.7431 18.0002 14.9604 17.4127 15.7499 16.7811C16.1383 16.4704 16.4143 16.1565 16.5971 15.9127C16.7076 15.7654 16.8081 15.6113 16.8941 15.4485C17.1387 14.961 16.9352 14.3497 16.4474 14.1058C15.9573 13.8607 15.3622 14.0559 15.1117 14.5414C15.0979 14.5663 14.9097 14.892 14.5005 15.2194C14.0401 15.5877 13.2573 16.0002 12.0002 16.0002C10.7431 16.0002 9.96038 15.5877 9.49991 15.2194C9.09071 14.892 8.90255 14.5663 8.88875 14.5414Z"
                                fill="#fad605"
                              ></path>
                              <path
                                d="M6.5 7C5 7 5 8.66667 5 8.66667C5 10 7.5 12 8 12C8.5 12 11 10 11 8.66667C11 8.66667 11 7 9.5 7C8 7 8 9 8 9C8 9 8 7 6.5 7Z"
                                fill="#fad605"
                              ></path>
                              <path
                                d="M13 8.66667C13 8.66667 13 7 14.5 7C16 7 16 9 16 9C16 9 16 7 17.5 7C19 7 19 8.66667 19 8.66667C19 10 16.5 12 16 12C15.5 12 13 10 13 8.66667Z"
                                fill="#fad605"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
                                fill="#fad605"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col mt-6">
                    <h2 className="font-semibold text-5xl text-center">
                      +1,250
                    </h2>
                    <p className="text-center font-semibold">
                      مشتری راضی در ماه
                    </p>
                  </div>
                </article>

                <article className="relative bg-[#fefefe] p-12 w-full rounded-3xl border border-orange-900/10 flex flex-col gap-4">
                  <h2 className="text-lg font-semibold text-center">
                    قرعه کشی ماهانه برای مشتریان وفادار
                  </h2>
                  <div className="size-32 rounded-full bg-white m-auto flex justify-center items-center shadow-sm">
                    <div className="size-20">
                      <svg
                        height="100%"
                        width="100%"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 511.984 511.984"
                        xmlSpace="preserve"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <polygon
                            style={{ fill: '#cc8e3550' }}
                            points="172.046,405.314 53.331,286.601 53.331,118.715 172.046,0 339.924,0 458.638,118.715 458.638,286.601 339.924,405.314 "
                          ></polygon>
                          <path
                            style={{ fill: '#ed5564' }}
                            d="M255.988,336.318c0,11.781-9.554,21.326-21.335,21.326s-21.327-9.545-21.327-21.326 s9.546-21.328,21.327-21.328S255.988,324.537,255.988,336.318z"
                          ></path>
                          <path
                            style={{ fill: '#ac92eb' }}
                            d="M213.326,336.318c0,11.781-9.555,21.326-21.336,21.326c-11.78,0-21.335-9.545-21.335-21.326 s9.555-21.328,21.335-21.328C203.771,314.99,213.326,324.537,213.326,336.318z"
                          ></path>
                          <path
                            style={{ fill: '#a0d468' }}
                            d="M170.655,336.318c0,11.781-9.547,21.326-21.327,21.326c-11.789,0-21.335-9.545-21.335-21.326 s9.546-21.328,21.335-21.328C161.108,314.99,170.655,324.537,170.655,336.318z"
                          ></path>
                          <path
                            style={{ fill: '#ac92eb' }}
                            d="M298.643,336.318c0,11.781-9.531,21.326-21.312,21.326c-11.797,0-21.344-9.545-21.344-21.326 s9.547-21.328,21.344-21.328C289.112,314.99,298.643,324.537,298.643,336.318z"
                          ></path>
                          <path
                            style={{ fill: '#fc6e51' }}
                            d="M341.329,336.318c0,11.781-9.562,21.326-21.342,21.326c-11.781,0-21.344-9.545-21.344-21.326 s9.562-21.328,21.344-21.328C331.767,314.99,341.329,324.537,341.329,336.318z"
                          ></path>
                          <path
                            style={{ fill: '#48cfad' }}
                            d="M383.985,336.318c0,11.781-9.562,21.326-21.344,21.326s-21.312-9.545-21.312-21.326 s9.531-21.328,21.312-21.328S383.985,324.537,383.985,336.318z"
                          ></path>
                          <g>
                            <polygon
                              style={{ fill: '#fffefd' }}
                              points="458.638,118.715 450.482,110.544 53.331,275.054 53.331,286.601 61.495,294.771 458.638,130.262 "
                            ></polygon>
                            <polygon
                              style={{ fill: '#fffefd' }}
                              points="339.924,0 328.392,0 247.872,194.385 267.574,202.556 348.095,8.157 "
                            ></polygon>
                            <polygon
                              style={{ fill: '#fffefd' }}
                              points="163.882,8.157 245.966,206.337 265.676,198.181 183.593,0 172.046,0 "
                            ></polygon>
                            <polygon
                              style={{ fill: '#fffefd' }}
                              points="61.495,110.544 53.331,118.715 53.331,130.262 450.482,294.771 458.638,286.601 458.638,275.054 "
                            ></polygon>
                          </g>
                          <path
                            style={{ fill: '#48cfad' }}
                            d="M234.653,373.316c0,11.781-9.547,21.328-21.327,21.328c-11.789,0-21.336-9.547-21.336-21.328 s9.547-21.328,21.336-21.328C225.106,351.988,234.653,361.535,234.653,373.316z"
                          ></path>
                          <path
                            style={{ fill: '#fc6e51' }}
                            d="M191.99,373.316c0,11.781-9.554,21.328-21.335,21.328c-11.78,0-21.327-9.547-21.327-21.328 s9.547-21.328,21.327-21.328C182.436,351.988,191.99,361.535,191.99,373.316z"
                          ></path>
                          <path
                            style={{ fill: '#ffce54' }}
                            d="M277.332,373.316c0,11.781-9.562,21.328-21.344,21.328c-11.78,0-21.335-9.547-21.335-21.328 s9.555-21.328,21.335-21.328C267.769,351.988,277.332,361.535,277.332,373.316z"
                          ></path>
                          <path
                            style={{ fill: '#5d9cec' }}
                            d="M319.987,373.316c0,11.781-9.562,21.328-21.344,21.328s-21.312-9.547-21.312-21.328 s9.53-21.328,21.312-21.328S319.987,361.535,319.987,373.316z"
                          ></path>
                          <path
                            style={{ fill: '#ed5564' }}
                            d="M362.641,373.316c0,11.781-9.531,21.328-21.312,21.328c-11.796,0-21.342-9.547-21.342-21.328 s9.546-21.328,21.342-21.328C353.11,351.988,362.641,361.535,362.641,373.316z"
                          ></path>
                          <g>
                            <path
                              style={{ fill: '#cc8e3550' }}
                              d="M127.993,469.312h-4.352l150.284-244.459l-35.882-23.062L72.916,469.312h-8.921 c-11.781,0-21.336,9.547-21.336,21.328s9.555,21.344,21.336,21.344h63.998c11.78,0,21.335-9.562,21.335-21.344 S139.773,469.312,127.993,469.312z"
                            ></path>
                            <path
                              style={{ fill: '#cc8e3550' }}
                              d="M383.985,469.312h4.343L238.044,224.853l35.882-23.062l165.135,267.521h8.921 c11.781,0,21.343,9.547,21.343,21.328s-9.562,21.344-21.343,21.344h-63.997c-11.781,0-21.344-9.562-21.344-21.344 S372.204,469.312,383.985,469.312z"
                            ></path>
                            <path
                              style={{ fill: '#cc8e3550' }}
                              d="M287.987,202.65c0,17.687-14.327,31.999-31.999,31.999c-17.671,0-31.999-14.312-31.999-31.999 c0-17.671,14.328-31.999,31.999-31.999C273.66,170.651,287.987,184.979,287.987,202.65z"
                            ></path>
                          </g>
                          <path
                            style={{ fill: '#cc8e3550' }}
                            d="M255.988,245.321c-23.522,0-42.662-19.14-42.662-42.67c0-23.515,19.14-42.655,42.662-42.655 c23.531,0,42.655,19.14,42.655,42.655C298.643,226.181,279.519,245.321,255.988,245.321z M255.988,181.323 c-11.765,0-21.335,9.578-21.335,21.328c0,11.765,9.57,21.343,21.335,21.343c11.766,0,21.344-9.578,21.344-21.343 C277.332,190.901,267.754,181.323,255.988,181.323z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <p className="text-center text-neutral-600 font-medium">
                      گروه بامداد قصد دارد به پاس قدر دانی از همراهی و اعتماد
                      شما هر ماه جوایز نفیسی به شما عزیزان اهدا کند
                    </p>
                    <button
                      onClick={() => toggleModal('lottary')}
                      className="bg-white hover:bg-slate-50 transition-all duration-200 border border-orange-900/10 text-center rounded-full py-3 p-6 font-semibold"
                    >
                      مشاهده بیشتر
                    </button>
                  </div>

                  {modal.lottary && (
                    <Modal isOpen={modal.lottary} setIsOpen={setModal}>
                      <div className="modal-content">
                        <p>
                          شرکت ما به پاس قدردانی از حمایت‌های بی‌نظیر شما
                          مشتریان عزیز، هر ماه یک قرعه‌کشی هیجان‌انگیز برگزار
                          می‌کند...
                        </p>
                        <a
                          href="https://www.instagram.com/bamdadgp"
                          target="_blank"
                          className="text-blue-500 underline pt-1"
                        >
                          صفحه اینستاگرام
                        </a>
                      </div>
                    </Modal>
                  )}
                </article>

                <article className="relative bg-[#fefefe] pt-12 px-12 w-full rounded-3xl border border-orange-900/10 flex flex-col gap-4">
                  <h2 className="text-lg font-semibold">
                    فروشگاهی با یه دنیا انتخاب و پشتیبانی فقط برای شما
                  </h2>
                  <div className="flex flex-col items-center gap-3">
                    <p className="text-neutral-600 font-medium">
                      از آشپزخانه تا تکنولوژی روی ما حساب کنید
                    </p>
                  </div>
                  <div className="w-full h-48 pt-4 relative grid grid-cols-2">
                    <div className="h-full bg-white">
                      <div className="size-16 absolute top-6 right-6 p-4 bg-white/20 border shadow-sm text-[#cc8e3550] shadow-[#cc8e3550] rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <rect width="24" height="24" fill="none" />
                          <path
                            fill="currentColor"
                            d="M9 21v1H7v-1a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2v1h-2v-1zM7 4v5h10V4zm0 15h10v-8H7zm1-7h2v3H8zm0-6h2v2H8z"
                            strokeWidth="0.3"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="h-full bg-gradient-to-l from-[#cc8e3510] to-transparent border-r-4 border-[#cc8e3550]">
                      <div className="size-14 absolute bottom-5 right-4 p-3 bg-white/20 border shadow-sm shadow-[#cc8e3550] text-[#cc8e3550] rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                        >
                          <rect width="48" height="48" fill="none" />
                          <g fill="none" stroke="currentColor" strokeWidth="4">
                            <path d="M26 22.5V10c0-3 2-6 6-6s6 3 6 6v24" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M32.75 34h10.5l.75 6H32zM10 40h15.886c.063 0 .114-.05.114-.114V23.255C26 15.935 20.066 10 12.745 10v0A5.745 5.745 0 0 0 7 15.745V29"
                            />
                            <circle cx="10" cy="34" r="6" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14 10v19"
                            />
                          </g>
                        </svg>
                      </div>

                      <div className="size-16 absolute bottom-5 left-4 p-2 bg-white/20 border shadow-sm text-[#cc8e3550] shadow-[#cc8e3550] rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <rect width="24" height="24" fill="none" />
                          <path
                            fill="currentColor"
                            d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1H15V6H4.616q-.231 0-.424.192T4 6.616v10.769q0 .23.192.423t.423.192m12.693-9.308h1.384V7.308h-1.384zM18 12.77q.31 0 .54-.23t.23-.539t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23m0 4q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23m-7.25-1.27q-.484 0-.893-.215q-.409-.216-.695-.397q-.27-.175-.468-.281T8.25 14.5q-.256 0-.502.129t-.429.279l-.732-.708q.275-.223.704-.461q.43-.239.959-.239q.485 0 .865.209q.38.208.666.389q.263.189.505.295t.464.107q.256 0 .502-.129t.429-.279l.733.708q-.275.223-.705.462q-.43.238-.959.238m0-5q-.484 0-.893-.215q-.409-.216-.695-.397q-.27-.175-.468-.281T8.25 9.5q-.256 0-.502.129t-.429.279L6.587 9.2q.275-.223.704-.461q.43-.239.959-.239q.485 0 .865.209q.38.208.666.389q.263.189.505.295t.464.107q.256 0 .502-.129t.429-.279l.733.708q-.275.223-.705.462q-.43.238-.959.238"
                            strokeWidth="0.5"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
