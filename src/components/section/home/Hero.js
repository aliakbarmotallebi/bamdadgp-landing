'use client'
import { useState } from 'react'
import Modal from '@/components/Modal'
import { Routes } from '@/route/routes'
import Link from 'next/link'

function ServiceIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden className="h-full w-full">
      <path
        d="M32 8c-7.4 0-13.6 5.2-15.1 12.1A11 11 0 0 0 10 31c0 5.5 4 10 9.2 10.8V44c0 2.2 1.8 4 4 4h17.6c2.2 0 4-1.8 4-4v-2.2c5.2-.8 9.2-5.3 9.2-10.8a11 11 0 0 0-6.9-10.9C45.6 13.2 39.4 8 32 8Z"
        fill="#FBBF24"
        opacity="0.28"
      />
      <path
        d="M22 46.5h20M25 51h14"
        stroke="#171717"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M20.5 28.5c0-6.4 5.1-11.5 11.5-11.5s11.5 5.1 11.5 11.5c0 4.2-2.3 7.9-5.7 9.8v4.7c0 1.1-.9 2-2 2h-7.6c-1.1 0-2-.9-2-2v-4.7c-3.4-1.9-5.7-5.6-5.7-9.8Z"
        stroke="#171717"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="27.5" r="3.2" fill="#171717" />
      <path
        d="M14 22.5 10.5 19M50 22.5 53.5 19M12 34h-4.5M56.5 34H52"
        stroke="#D97706"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function StoreIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden className="h-full w-full">
      <rect
        x="14"
        y="24"
        width="36"
        height="28"
        rx="5"
        fill="#FBBF24"
        opacity="0.3"
      />
      <path
        d="M18 28h28l-2.2 20.2A4 4 0 0 1 39.8 52H24.2a4 4 0 0 1-4-3.8L18 28Z"
        stroke="#171717"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M24 28V20a8 8 0 0 1 16 0v8"
        stroke="#171717"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M27 38h10"
        stroke="#D97706"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function LotteryIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden className="h-full w-full">
      <circle cx="32" cy="32" r="20" fill="#FBBF24" opacity="0.28" />
      <path
        d="M32 12v40M12 32h40"
        stroke="#D97706"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="32" cy="32" r="16" stroke="#171717" strokeWidth="2.6" />
      <path
        d="M32 18.5c3.4 3.2 5.4 7.1 5.4 11.2S35.4 37.7 32 40.9c-3.4-3.2-5.4-7.1-5.4-11.2S28.6 21.7 32 18.5Z"
        fill="#171717"
      />
      <circle
        cx="32"
        cy="32"
        r="3.4"
        fill="#FBBF24"
        stroke="#171717"
        strokeWidth="1.8"
      />
      <path
        d="M32 10v4M32 50v4M10 32h4M50 32h4"
        stroke="#171717"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

const cards = [
  {
    id: 1,
    key: 'service',
    title: 'بامداد سرویس',
    subtitle: 'خدمات پس از فروش',
    Icon: ServiceIcon,
    bg: 'bg-white',
    pose: 'md:-translate-x-16 md:rotate-[-8deg] md:scale-[0.94] group-hover/deck:translate-x-0 group-hover/deck:rotate-0 group-hover/deck:scale-100',
    z: 'z-10',
    featured: false,
    modal: (
      <p>
        گروه بامداد از پشتیبانی تلفنی و آنلاین تا تعمیرات و تأمین قطعات یدکی،
        همواره در کنار شماست.
      </p>
    ),
  },
  {
    id: 2,
    key: 'gallery',
    title: 'فروشگاه بامداد',
    subtitle: 'فروش انواع محصولات',
    Icon: StoreIcon,
    bg: 'bg-gradient-to-br from-amber-300 via-amber-200 to-amber-50',
    pose: 'md:scale-105 md:-translate-y-4 group-hover/deck:scale-110 group-hover/deck:-translate-y-6',
    z: 'z-30',
    featured: true,
    href: Routes.store,
    modal: (
      <p>
        از خرید تا پشتیبانی کنار شما هستیم تا با خیال راحت بهترین‌ها را انتخاب
        کنید.
      </p>
    ),
  },
  {
    id: 3,
    key: 'lottary',
    title: 'قرعه‌کشی بامداد',
    subtitle: 'شانس خود را امتحان کنید',
    Icon: LotteryIcon,
    bg: 'bg-white',
    pose: 'md:translate-x-16 md:rotate-[8deg] md:scale-[0.94] group-hover/deck:translate-x-0 group-hover/deck:rotate-0 group-hover/deck:scale-100',
    z: 'z-10',
    featured: false,
    modal: (
      <>
        <p>
          به پاس قدردانی از حمایت شما، هر ماه یک قرعه‌کشی هیجان‌انگیز برگزار
          می‌کنیم.
        </p>
        <a
          href="https://www.instagram.com/bamdadgp"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-amber-700 underline"
        >
          صفحه اینستاگرام
        </a>
      </>
    ),
  },
]

export default function Hero() {
  const [modal, setModal] = useState({
    service: false,
    gallery: false,
    lottary: false,
  })
  const [hovered, setHovered] = useState(null)

  const toggleModal = key => {
    setModal(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <section id="hero-section" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 z-[-1] h-[520px] w-[80%] max-w-5xl -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(253,186,116,0.26)_0%,rgba(255,255,0,0)_70%)] blur-2xl" />

      <div className="relative mx-auto w-full max-w-screen-xl px-4 pb-12 pt-12 sm:px-8 md:pt-16 lg:px-0 lg:pb-24 lg:pt-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <p className="text-base font-medium text-amber-700 md:text-lg">
              خدماتی برای فردایی بهتر
            </p>
            <span className="text-[11px] font-normal text-neutral-300">
              کوشا الکتریک بامداد
            </span>
          </div>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.15] tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            گروه تجاری بامداد
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-neutral-600 md:text-lg md:leading-9">
            در گروه تجاری بامداد با مجموعه‌ای از بهترین محصولات، کیفیت و نوآوری
            را به خانه شما می‌آوریم. از خرید تا پشتیبانی، همراهتان هستیم.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={Routes.store}
              className="rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              ورود به فروشگاه
            </Link>
            <a
              href="#warranty-inquiry"
              className="rounded-full border border-neutral-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-neutral-800 transition hover:border-neutral-600"
            >
              استعلام گارانتی
            </a>
          </div>
        </div>

        {/* mobile: stacked */}
        <div className="mt-12 flex flex-col gap-4 md:hidden">
          {cards.map(card => (
            <CardItem
              key={card.id}
              card={card}
              modal={modal}
              toggleModal={toggleModal}
              setModal={setModal}
              dimmed={false}
            />
          ))}
        </div>

        {/* desktop: overlapping fan deck */}
        <div
          className="group/deck relative mx-auto mt-14 hidden h-[340px] max-w-[980px] md:block lg:mt-16"
          onMouseLeave={() => setHovered(null)}
        >
          <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-center gap-0 transition-all duration-500 ease-out group-hover/deck:gap-5">
            {cards.map((card, index) => {
              const dimmed = hovered !== null && hovered !== card.id
              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setHovered(card.id)}
                  className={`relative w-[280px] shrink-0 transition-all duration-500 ease-out xl:w-[310px] ${card.z} ${card.pose} ${
                    dimmed ? 'opacity-55 brightness-95' : 'opacity-100'
                  } ${
                    hovered === card.id
                      ? 'z-40 !-translate-y-5 !rotate-0 !scale-110'
                      : ''
                  }`}
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <CardItem
                    card={card}
                    modal={modal}
                    toggleModal={toggleModal}
                    setModal={setModal}
                    dimmed={dimmed}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function CardItem({ card, modal, toggleModal, setModal, dimmed }) {
  const Icon = card.Icon

  return (
    <div
      className={`group relative flex h-52 justify-between overflow-hidden rounded-2xl border border-neutral-900/10 px-5 py-5 shadow-[0_18px_44px_rgba(0,0,0,0.12)] ring-1 ring-black/5 transition-all duration-300 ${
        card.featured
          ? 'shadow-[0_26px_56px_rgba(180,120,40,0.22)]'
          : ''
      } ${dimmed ? '' : 'hover:shadow-[0_28px_56px_rgba(180,120,40,0.22)]'} ${card.bg}`}
    >
      <div className="pointer-events-none absolute -left-10 -top-10 h-36 w-36 rounded-full bg-amber-200/30 blur-2xl transition duration-300 group-hover:bg-amber-300/50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/[0.03] to-transparent" />

      <div className="relative z-10 flex h-full min-w-0 flex-1 flex-col">
        <div className="px-1">
          <h2 className="my-2 text-xl font-extrabold text-neutral-900 lg:text-2xl">
            {card.title}
          </h2>
          <p className="text-sm font-medium text-neutral-600">{card.subtitle}</p>
        </div>

        <div className="mt-auto">
          {card.href ? (
            <Link
              href={card.href}
              className="inline-flex rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              مشاهده بیشتر
            </Link>
          ) : (
            <button
              onClick={() => toggleModal(card.key)}
              type="button"
              className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              مشاهده بیشتر
            </button>
          )}

          {modal[card.key] && (
            <Modal isOpen={modal[card.key]} setIsOpen={setModal}>
              <div className="modal-content space-y-2 text-neutral-700">
                {card.modal}
              </div>
            </Modal>
          )}
        </div>
      </div>

      <div className="relative flex w-[38%] shrink-0 items-end justify-center">
        <div className="absolute bottom-1 left-1/2 h-3 w-16 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.16)_0%,rgba(200,200,200,0)_90%)]" />
        <div className="relative mb-0.5 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_10px_24px_rgba(0,0,0,0.08)] ring-1 ring-neutral-900/5 transition duration-300 group-hover:scale-110 sm:h-[108px] sm:w-[108px]">
          <div className="h-14 w-14 sm:h-16 sm:w-16">
            <Icon />
          </div>
        </div>
      </div>
    </div>
  )
}
