'use client'
import Marquee from '@/components/Marquee'
import Modal from '@/components/Modal'
import { Routes } from '@/route/routes'
import Link from 'next/link'
import React from 'react'

const card =
  'group relative overflow-hidden rounded-[1.75rem] border border-neutral-200/80 bg-white shadow-[0_10px_32px_rgba(28,25,23,0.04)] transition duration-300 hover:-translate-y-1 hover:border-amber-300/50 hover:shadow-[0_18px_44px_rgba(180,120,40,0.1)]'

const softBtn =
  'inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-800 transition hover:border-amber-300 hover:bg-amber-50'

const solidBtn =
  'inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800'

export default function Statistics() {
  const [modal, setModal] = React.useState({
    lottary: false,
  })
  const toggleModal = key => {
    setModal(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <section id="statistics-section">
      <div className="relative w-full px-4 pb-16 pt-12 md:px-8 lg:px-0 lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-[-1] h-[65%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.16)_0%,transparent_70%)] blur-3xl lg:left-[35%]" />

        <div className="mx-auto w-full max-w-screen-xl">
          <div className="mb-8 flex max-w-3xl flex-col gap-3 lg:mb-12">
            <p className="text-sm font-medium text-amber-700">چرا بامداد؟</p>
            <h2 className="text-2xl font-bold leading-snug text-neutral-900 lg:text-3xl">
              گروه تجاری بامداد، پیشرو در ارائه انواع محصولات برقی و قطعات
            </h2>
            <p className="text-base font-medium leading-8 text-neutral-600 lg:text-lg">
              همراه شماییم برای تجربه شروعی مطمئن در خرید انواع محصولات با
              گارانتی معتبر
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-5 lg:gap-6">
              <div className={`${card} space-y-3 py-6`}>
                <div className="pointer-events-none absolute inset-0 z-20 flex">
                  <div className="w-1/4 bg-gradient-to-l from-white to-transparent" />
                  <div className="flex-1" />
                  <div className="w-1/4 bg-gradient-to-r from-white to-transparent" />
                </div>
                <div className="relative z-10 mb-1 px-5">
                  <p className="text-xs font-semibold tracking-wide text-neutral-400">
                    دسته‌بندی محصولات
                  </p>
                </div>
                <Marquee direction="ltr" speed={0.25} />
                <Marquee direction="rtl" speed={0.25} />
                <Marquee direction="ltr" speed={0.25} />
              </div>

              <article className={`${card} px-6 py-8 sm:px-8`}>
                <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-amber-100/50 blur-2xl" />
                <div className="relative flex w-full gap-2">
                  <div className="relative z-10 w-1/4 rounded-s-2xl border border-e-0 border-neutral-200/80 bg-neutral-50/80" />
                  <div className="relative z-10 flex w-2/4 items-center justify-center rounded-2xl border border-neutral-200 bg-white py-14 shadow-sm transition duration-300 group-hover:scale-[1.02]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 text-rose-600 sm:h-28 sm:w-28"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"
                        strokeWidth="1.4"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M31.876 20.484c-4.767 5.049-11.086 5.045-15.74-.021l-2.575 2.506c5.421 6.463 15.514 6.29 20.838.015z"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </div>
                  <div className="relative z-10 w-1/4 rounded-e-2xl border border-s-0 border-neutral-200/80 bg-neutral-50/80" />
                </div>
                <div className="relative mt-7 flex flex-col items-center gap-3 text-center">
                  <h3 className="text-lg font-bold text-neutral-900">
                    خرید تا خدمات پس از فروش با گروه بامداد
                  </h3>
                  <p className="max-w-sm text-sm leading-7 text-neutral-500">
                    از انتخاب کالا تا پشتیبانی و گارانتی، در هر قدم کنار شماییم.
                  </p>
                  <Link href={Routes.store} className={`${solidBtn} mt-1`}>
                    الان بخر
                  </Link>
                </div>
              </article>

              <article className={`${card} p-7`}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-neutral-900">
                    تخفیفات روزانه محصولات
                  </h3>
                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-800 ring-1 ring-amber-200/70">
                    ویژه
                  </span>
                </div>
                <div className="relative flex justify-center py-7">
                  <div className="flex size-20 items-center justify-center rounded-2xl bg-amber-50/80 ring-1 ring-amber-100 transition duration-300 group-hover:scale-105">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-10">
                      <path
                        d="M5.06152 12C5.55362 8.05369 8.92001 5 12.9996 5C17.4179 5 20.9996 8.58172 20.9996 13C20.9996 17.4183 17.4179 21 12.9996 21H8M13 13V9M11 3H15M3 15H8M5 18H10"
                        stroke="#b45309"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="absolute left-14 top-2 size-6 animate-pulse sm:left-16">
                    <StarIcon />
                  </div>
                  <div className="absolute bottom-4 right-14 size-6 sm:right-16">
                    <StarIcon />
                  </div>
                </div>
                <p className="text-sm leading-7 text-neutral-500">
                  برای اطلاع از تخفیف‌های روزانه فروشگاه، با ما همراه باشید.
                </p>
              </article>

              <article className={`${card} flex items-center justify-between gap-4 px-6 py-5`}>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">
                    پشتیبانی در کنار شماست
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500">
                    پاسخگویی سریع و راهنمایی خرید
                  </p>
                </div>
                <Link href={Routes.contact} className={softBtn}>
                  <span className="me-2 size-5">
                    <svg viewBox="0 0 32 32" fill="#d97706" aria-hidden className="h-full w-full">
                      <path d="M16,2C9.4,2,4,7.3,4,13.9v3.5c0,0.1,0,0.1,0,0.2c0,0.1,0,0.3,0,0.4c0,2.8,2.2,5,5,5c0.6,0,1-0.4,1-1v-8c0-0.6-0.4-1-1-1 c-1.1,0-2.2,0.4-3,1v-0.2C6,8.4,10.5,4,16,4s10,4.4,10,9.9V14c-0.8-0.6-1.9-1-3-1c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1 c0.7,0,1.4-0.2,2-0.4c-1,2.1-2.8,3.7-5,4.6c0-0.1,0-0.1,0-0.2c0-0.6-0.4-1-1-1h-3c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1 c6.6,0,12-5.2,12-11.6v-1V15v-1.1C28,7.3,22.6,2,16,2z" />
                    </svg>
                  </span>
                  تماس
                </Link>
              </article>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-5 lg:mt-10 lg:gap-6">
              <article className={`${card} px-6 py-8`}>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-amber-50/80 to-transparent" />
                <span className="absolute -top-2.5 right-6 size-8 drop-shadow-sm">
                  <svg viewBox="0 0 24 24" aria-hidden>
                    <path
                      fill="#d97706"
                      d="m19.184 7.805l-2.965-2.967c-2.027-2.03-3.04-3.043-4.129-2.803s-1.581 1.587-2.568 4.28l-.668 1.823c-.263.718-.395 1.077-.632 1.355a2 2 0 0 1-.36.332c-.296.213-.664.314-1.4.517c-1.66.458-2.491.687-2.804 1.23a1.53 1.53 0 0 0-.204.773c.004.627.613 1.236 1.83 2.455L6.7 16.216l-4.476 4.48a.764.764 0 0 0 1.08 1.08l4.475-4.48l1.466 1.468c1.226 1.226 1.839 1.84 2.47 1.84c.265 0 .526-.068.757-.2c.548-.313.778-1.149 1.239-2.822c.202-.735.303-1.102.515-1.399q.14-.194.322-.352c.275-.238.632-.372 1.345-.64l1.844-.693c2.664-1 3.996-1.501 4.23-2.586c.235-1.086-.77-2.093-2.783-4.107"
                    />
                  </svg>
                </span>
                <h3 className="relative text-center text-base font-bold text-neutral-900">
                  گروه بامداد را در اینستاگرام دنبال کنید
                </h3>
                <div className="relative my-6 flex items-center justify-center">
                  <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 p-4 ring-1 ring-amber-100 transition duration-500 group-hover:scale-105 group-hover:rotate-2">
                    <InstagramLogo />
                  </div>
                </div>
                <div className="relative flex justify-center">
                  <a
                    href="https://www.instagram.com/bamdadgp"
                    target="_blank"
                    rel="noreferrer"
                    className={solidBtn}
                  >
                    دنبال کنید
                  </a>
                </div>
              </article>

              <article className={`${card} flex flex-col items-center justify-center gap-2 py-16`}>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.12),transparent_60%)]" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/40" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/50 transition duration-500 group-hover:scale-110" />
                <p className="relative z-10 text-xs font-semibold text-amber-700">
                  آمار فروش
                </p>
                <h3 className="relative z-10 text-5xl font-extrabold tracking-tight text-neutral-900">
                  ۵٬۶۰۰+
                </h3>
                <span className="relative z-10 text-base font-semibold text-neutral-600">
                  تراکنش موفق
                </span>
              </article>

              <article className={`${card} flex flex-col items-center gap-5 py-10`}>
                <div className="flex size-28 items-center justify-center rounded-full bg-neutral-50 ring-1 ring-neutral-100 transition duration-300 group-hover:scale-105">
                  <svg
                    viewBox="0 0 14 16"
                    className="h-16 text-neutral-900 xl:h-20"
                  >
                    <use href="/assets/images/bamdad-logo.svg#logo" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-bold text-neutral-900">گروه تجاری بامداد</p>
                  <p className="mt-1 text-sm text-neutral-500">
                    کیفیت، گارانتی و خدمات واقعی
                  </p>
                </div>
              </article>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-1 lg:mt-4 lg:gap-6">
              <article className={`${card} flex flex-col gap-7 p-6`}>
                <div className="pointer-events-none absolute -right-8 top-0 h-32 w-32 rounded-full bg-amber-100/40 blur-2xl" />
                <div className="relative z-10">
                  <div className="relative flex items-center gap-3 rounded-2xl bg-neutral-900 px-4 py-3 shadow-lg">
                    <div className="absolute -bottom-2 left-1/2 h-8 w-[90%] -translate-x-1/2 rounded-2xl bg-neutral-900/10" />
                    <figure className="size-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20">
                      <img
                        src="https://avatars.githubusercontent.com/u/141553836?v=4"
                        alt=""
                      />
                    </figure>
                    <p className="flex items-center gap-1.5 text-sm font-medium text-white">
                      از خدمات بامداد راضیم!
                      <span className="block size-5">
                        <SmileIcon />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-1">
                  <h3 className="text-5xl font-extrabold tracking-tight text-neutral-900">
                    +۱٬۲۵۰
                  </h3>
                  <p className="font-semibold text-neutral-600">
                    مشتری راضی در ماه
                  </p>
                </div>
              </article>

              <article className={`${card} flex flex-col gap-4 p-7`}>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-neutral-900">
                    قرعه‌کشی ماهانه مشتریان وفادار
                  </h3>
                  <span className="rounded-full bg-rose-50 px-2.5 py-1 text-[11px] font-semibold text-rose-700 ring-1 ring-rose-100">
                    فعال
                  </span>
                </div>
                <div className="mx-auto flex size-28 items-center justify-center rounded-full bg-gradient-to-b from-amber-50 to-white shadow-sm ring-1 ring-amber-100 transition duration-300 group-hover:scale-105 sm:size-32">
                  <div className="size-16 sm:size-20">
                    <LotteryIcon />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <p className="text-center text-sm leading-7 text-neutral-500">
                    هر ماه به پاس همراهی شما، جوایز ویژه‌ای میان مشتریان وفادار
                    بامداد قرعه‌کشی می‌شود.
                  </p>
                  <button
                    type="button"
                    onClick={() => toggleModal('lottary')}
                    className={softBtn}
                  >
                    مشاهده بیشتر
                  </button>
                </div>

                {modal.lottary && (
                  <Modal isOpen={modal.lottary} setIsOpen={setModal}>
                    <div className="modal-content space-y-2">
                      <p>
                        شرکت ما به پاس قدردانی از حمایت‌های بی‌نظیر شما مشتریان
                        عزیز، هر ماه یک قرعه‌کشی هیجان‌انگیز برگزار می‌کند...
                      </p>
                      <a
                        href="https://www.instagram.com/bamdadgp"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block pt-1 text-amber-700 underline"
                      >
                        صفحه اینستاگرام
                      </a>
                    </div>
                  </Modal>
                )}
              </article>

              <article className={`${card} flex flex-col gap-3 px-7 pt-8`}>
                <h3 className="text-lg font-bold leading-8 text-neutral-900">
                  فروشگاهی با یه دنیا انتخاب و پشتیبانی
                </h3>
                <p className="text-sm text-neutral-500">
                  از آشپزخانه تا تکنولوژی، روی ما حساب کنید
                </p>
                <div className="relative mt-3 grid h-44 grid-cols-2 overflow-hidden rounded-2xl">
                  <div className="h-full bg-neutral-50">
                    <div className="absolute right-5 top-4 flex size-14 items-center justify-center rounded-2xl border border-neutral-200 bg-white p-3 text-amber-700 shadow-sm transition duration-300 group-hover:-translate-y-1 sm:size-16 sm:p-4">
                      <svg viewBox="0 0 24 24" aria-hidden>
                        <path
                          fill="currentColor"
                          d="M9 21v1H7v-1a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2v1h-2v-1zM7 4v5h10V4zm0 15h10v-8H7zm1-7h2v3H8zm0-6h2v2H8z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="h-full border-r-4 border-amber-300/50 bg-gradient-to-l from-amber-50 to-transparent">
                    <div className="absolute bottom-5 right-3 flex size-12 items-center justify-center rounded-2xl border border-neutral-200 bg-white p-2.5 text-amber-700 shadow-sm transition duration-300 delay-75 group-hover:-translate-y-1 sm:size-14 sm:p-3">
                      <svg viewBox="0 0 48 48" aria-hidden>
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
                    <div className="absolute bottom-5 left-3 flex size-14 items-center justify-center rounded-2xl border border-neutral-200 bg-white p-2 text-amber-700 shadow-sm transition duration-300 delay-150 group-hover:-translate-y-1 sm:size-16">
                      <svg viewBox="0 0 24 24" aria-hidden>
                        <path
                          fill="currentColor"
                          d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1H15V6H4.616q-.231 0-.424.192T4 6.616v10.769q0 .23.192.423t.423.192m12.693-9.308h1.384V7.308h-1.384zM18 12.77q.31 0 .54-.23t.23-.539t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23m0 4q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23m-7.25-1.27q-.484 0-.893-.215q-.409-.216-.695-.397q-.27-.175-.468-.281T8.25 14.5q-.256 0-.502.129t-.429.279l-.732-.708q.275-.223.704-.461q.43-.239.959-.239q.485 0 .865.209q.38.208.666.389q.263.189.505.295t.464.107q.256 0 .502-.129t.429-.279l.733.708q-.275.223-.705.462q-.43.238-.959.238m0-5q-.484 0-.893-.215q-.409-.216-.695-.397q-.27-.175-.468-.281T8.25 9.5q-.256 0-.502.129t-.429.279L6.587 9.2q.275-.223.704-.461q.43-.239.959-.239q.485 0 .865.209q.38.208.666.389q.263.189.505.295t.464.107q.256 0 .502-.129t.429-.279l.733.708q-.275.223-.705.462q-.43.238-.959.238"
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
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-full w-full">
      <circle cx="12" cy="12" r="4.5" fill="#d97706" opacity="0.2" />
      <path
        d="M12 3L13.4302 8.31181C13.6047 8.96 13.692 9.28409 13.8642 9.54905C14.0166 9.78349 14.2165 9.98336 14.451 10.1358C14.7159 10.308 15.04 10.3953 15.6882 10.5698L21 12L15.6882 13.4302C15.04 13.6047 14.7159 13.692 14.451 13.8642C14.2165 14.0166 14.0166 14.2165 13.8642 14.451C13.692 14.7159 13.6047 15.04 13.4302 15.6882L12 21L10.5698 15.6882C10.3953 15.04 10.308 14.7159 10.1358 14.451C9.98336 14.2165 9.78349 14.0166 9.54905 13.8642C9.28409 13.692 8.96 13.6047 8.31181 13.4302L3 12L8.31181 10.5698C8.96 10.3953 9.28409 10.308 9.54905 10.1358C9.78349 9.98336 9.98336 9.78349 10.1358 9.54905C10.308 9.28409 10.3953 8.96 10.5698 8.31181L12 3Z"
        stroke="#d97706"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SmileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-full w-full">
      <path
        d="M8.88875 14.5414C8.63822 14.0559 8.0431 13.8607 7.55301 14.1058C7.05903 14.3528 6.8588 14.9535 7.10579 15.4474C7.18825 15.6118 7.29326 15.7659 7.40334 15.9127C7.58615 16.1565 7.8621 16.4704 8.25052 16.7811C9.04005 17.4127 10.2573 18.0002 12.0002 18.0002C13.7431 18.0002 14.9604 17.4127 15.7499 16.7811C16.1383 16.4704 16.4143 16.1565 16.5971 15.9127C16.7076 15.7654 16.8081 15.6113 16.8941 15.4485C17.1387 14.961 16.9352 14.3497 16.4474 14.1058C15.9573 13.8607 15.3622 14.0559 15.1117 14.5414C15.0979 14.5663 14.9097 14.892 14.5005 15.2194C14.0401 15.5877 13.2573 16.0002 12.0002 16.0002C10.7431 16.0002 9.96038 15.5877 9.49991 15.2194C9.09071 14.892 8.90255 14.5663 8.88875 14.5414Z"
        fill="#fad605"
      />
      <path
        d="M6.5 7C5 7 5 8.66667 5 8.66667C5 10 7.5 12 8 12C8.5 12 11 10 11 8.66667C11 8.66667 11 7 9.5 7C8 7 8 9 8 9C8 9 8 7 6.5 7Z"
        fill="#fad605"
      />
      <path
        d="M13 8.66667C13 8.66667 13 7 14.5 7C16 7 16 9 16 9C16 9 16 7 17.5 7C19 7 19 8.66667 19 8.66667C19 10 16.5 12 16 12C15.5 12 13 10 13 8.66667Z"
        fill="#fad605"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
        fill="#fad605"
      />
    </svg>
  )
}

function InstagramLogo() {
  return (
    <svg className="h-28 w-28" viewBox="0 0 512 512" aria-hidden>
      <path
        className="fill-[#fde494]"
        d="M114.759,512h61.103l-96.414-61.793L0.198,403.898C3.659,464.09,53.716,512,114.759,512z"
      />
      <path
        className="fill-[#fea150]"
        d="M335.448,476.69l-69.006-17.655H114.759c-34.072,0-61.793-27.721-61.793-61.793v-33.876l-26.483-28.42L0,339.628v57.613c0,2.236,0.072,4.454,0.198,6.657L175.862,512h208.767L335.448,476.69z"
      />
      <path
        className="fill-[#ff5d4a]"
        d="M441.655,440.14c-11.244,11.637-26.993,18.894-44.414,18.894H266.442L384.629,512h12.612c41.202,0,77.396-21.829,97.64-54.527l-27.022-16.094L441.655,440.14z"
      />
      <path
        className="fill-[#e45261]"
        d="M459.034,326.014v71.228c0,16.652-6.633,31.775-17.379,42.899l53.227,17.333C505.728,439.954,512,419.318,512,397.241v-62.805l-27.396-15.391L459.034,326.014z"
      />
      <polygon
        className="fill-[#ff4d95]"
        points="512,149.19 483.797,142.474 459.034,157.3 459.034,326.014 512,334.436 "
      />
      <path
        className="fill-[#cb319c]"
        d="M512,114.759c0-57.633-42.708-105.473-98.136-113.55L344.43,30.101l-35.183,22.865h87.994c34.072,0,61.793,27.721,61.793,61.793V157.3L512,149.19V114.759z"
      />
      <path
        className="fill-[#8a3293]"
        d="M317.732,0l-65.682,24.636l-51.805,28.33h109.002L413.864,1.208C408.435,0.417,402.887,0,397.241,0H317.732z"
      />
      <path
        className="fill-[#ff5d4a]"
        d="M256,406.069c18.358,0,35.954-3.32,52.226-9.38l-86.02-39.047l-91.178-18.657C157.946,379.39,203.913,406.069,256,406.069z"
      />
      <path
        className="fill-[#e45261]"
        d="M329.153,305.358c-15.883,23.465-42.748,38.918-73.153,38.918c-40.273,0-74.308-27.118-84.867-64.046l-23.682-14.801l-40.847,4.538c2.353,25.345,11.014,48.887,24.425,69.017l177.198,57.705c38.303-14.264,69.237-43.757,85.458-81.068l-31.753-16.085L329.153,305.358z"
      />
      <path
        className="fill-[#ff4d95]"
        d="M167.724,256c0-21.878,8.018-41.907,21.247-57.346l-37.658-5.268l-38.25,16.892c-4.625,14.422-7.132,29.784-7.132,45.722c0,4.712,0.244,9.365,0.671,13.966l64.53,10.262C168.929,272.524,167.724,264.403,167.724,256z"
      />
      <path
        className="fill-[#ff4d95]"
        d="M406.069,256c0-32.138-10.159-61.946-27.428-86.39l-37.397-5.308l-38.418,16.917c24.873,15.631,41.45,43.298,41.45,74.781c0,18.27-5.58,35.261-15.123,49.358l64.531,10.262C401.634,297.334,406.069,277.18,406.069,256z"
      />
      <path
        className="fill-[#cb319c]"
        d="M256,167.724c17.194,0,33.242,4.959,46.826,13.495l75.815-11.609c-27.196-38.493-72.03-63.679-122.641-63.679c-66.81,0-123.554,43.889-142.937,104.345l75.908-11.624C205.173,179.742,229.203,167.724,256,167.724z"
      />
      <path
        className="fill-[#cb319c]"
        d="M397.241,150.069c19.47,0,35.31-15.84,35.31-35.31s-15.84-35.31-35.31-35.31c-19.47,0-35.31,15.84-35.31,35.31S377.771,150.069,397.241,150.069z"
      />
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
        d="M205.059,0L84.206,46.481L1.387,96.928C0.477,102.741,0,108.695,0,114.759v28.482l52.966-23.878v-4.605c0-34.072,27.721-61.793,61.793-61.793h85.487L317.732,0H205.059z"
      />
      <path
        className="fill-[#2d2d87]"
        d="M114.759,0C57.545,0,9.978,42.088,1.387,96.928L205.059,0H114.759z"
      />
    </svg>
  )
}

function LotteryIcon() {
  return (
    <svg viewBox="0 0 511.984 511.984" className="h-full w-full" aria-hidden>
      <polygon
        fill="rgba(204,142,53,0.3)"
        points="172.046,405.314 53.331,286.601 53.331,118.715 172.046,0 339.924,0 458.638,118.715 458.638,286.601 339.924,405.314 "
      />
      <path
        fill="#ed5564"
        d="M255.988,336.318c0,11.781-9.554,21.326-21.335,21.326s-21.327-9.545-21.327-21.326s9.546-21.328,21.327-21.328S255.988,324.537,255.988,336.318z"
      />
      <path
        fill="#ac92eb"
        d="M213.326,336.318c0,11.781-9.555,21.326-21.336,21.326c-11.78,0-21.335-9.545-21.335-21.326s9.555-21.328,21.335-21.328C203.771,314.99,213.326,324.537,213.326,336.318z"
      />
      <path
        fill="#a0d468"
        d="M170.655,336.318c0,11.781-9.547,21.326-21.327,21.326c-11.789,0-21.335-9.545-21.335-21.326s9.546-21.328,21.335-21.328C161.108,314.99,170.655,324.537,170.655,336.318z"
      />
      <path
        fill="#ac92eb"
        d="M298.643,336.318c0,11.781-9.531,21.326-21.312,21.326c-11.797,0-21.344-9.545-21.344-21.326s9.547-21.328,21.344-21.328C289.112,314.99,298.643,324.537,298.643,336.318z"
      />
      <path
        fill="#fc6e51"
        d="M341.329,336.318c0,11.781-9.562,21.326-21.342,21.326c-11.781,0-21.344-9.545-21.344-21.326s9.562-21.328,21.344-21.328C331.767,314.99,341.329,324.537,341.329,336.318z"
      />
      <path
        fill="#48cfad"
        d="M383.985,336.318c0,11.781-9.562,21.326-21.344,21.326s-21.312-9.545-21.312-21.326s9.531-21.328,21.312-21.328S383.985,324.537,383.985,336.318z"
      />
      <polygon
        fill="#fffefd"
        points="458.638,118.715 450.482,110.544 53.331,275.054 53.331,286.601 61.495,294.771 458.638,130.262 "
      />
      <polygon
        fill="#fffefd"
        points="339.924,0 328.392,0 247.872,194.385 267.574,202.556 348.095,8.157 "
      />
      <polygon
        fill="#fffefd"
        points="163.882,8.157 245.966,206.337 265.676,198.181 183.593,0 172.046,0 "
      />
      <polygon
        fill="#fffefd"
        points="61.495,110.544 53.331,118.715 53.331,130.262 450.482,294.771 458.638,286.601 458.638,275.054 "
      />
      <path
        fill="#48cfad"
        d="M234.653,373.316c0,11.781-9.547,21.328-21.327,21.328c-11.789,0-21.336-9.547-21.336-21.328s9.547-21.328,21.336-21.328C225.106,351.988,234.653,361.535,234.653,373.316z"
      />
      <path
        fill="#fc6e51"
        d="M191.99,373.316c0,11.781-9.554,21.328-21.335,21.328c-11.78,0-21.327-9.547-21.327-21.328s9.547-21.328,21.327-21.328C182.436,351.988,191.99,361.535,191.99,373.316z"
      />
      <path
        fill="#ffce54"
        d="M277.332,373.316c0,11.781-9.562,21.328-21.344,21.328c-11.78,0-21.335-9.547-21.335-21.328s9.555-21.328,21.335-21.328C267.769,351.988,277.332,361.535,277.332,373.316z"
      />
      <path
        fill="#5d9cec"
        d="M319.987,373.316c0,11.781-9.562,21.328-21.344,21.328s-21.312-9.547-21.312-21.328s9.53-21.328,21.312-21.328S319.987,361.535,319.987,373.316z"
      />
      <path
        fill="#ed5564"
        d="M362.641,373.316c0,11.781-9.531,21.328-21.312,21.328c-11.796,0-21.342-9.547-21.342-21.328s9.546-21.328,21.342-21.328C353.11,351.988,362.641,361.535,362.641,373.316z"
      />
      <path
        fill="rgba(204,142,53,0.3)"
        d="M255.988,245.321c-23.522,0-42.662-19.14-42.662-42.67c0-23.515,19.14-42.655,42.662-42.655c23.531,0,42.655,19.14,42.655,42.655C298.643,226.181,279.519,245.321,255.988,245.321z M255.988,181.323c-11.765,0-21.335,9.578-21.335,21.328c0,11.765,9.57,21.343,21.335,21.343c11.766,0,21.344-9.578,21.344-21.343C277.332,190.901,267.754,181.323,255.988,181.323z"
      />
    </svg>
  )
}
