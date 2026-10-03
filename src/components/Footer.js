'use client'
import { useState } from 'react'
import { mockContact } from '@/data/mockContent'
import { Routes } from '@/route/routes'
import Link from 'next/link'
import { ToastContainer } from 'react-toastify'
import ReactMarkdown from 'react-markdown'

const footerLinks = [
  { href: Routes.home, label: 'صفحه اصلی' },
  { href: Routes.store, label: 'فروشگاه' },
  { href: Routes.survey, label: 'نظرسنجی' },
  { href: Routes.feedback, label: 'انتقادات و پیشنهادات' },
  { href: Routes.representatives, label: 'مراکز خدمات بامداد سرویس' },
  {
    href: '/after_sales_rules_v4.pdf',
    label: 'شرایط و ضوابط اجرایی خدمات پس از فروش',
    download: true,
  },
  { href: Routes.contact, label: 'تماس با ما' },
]

function ContactIcon({ children }) {
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
      {children}
    </span>
  )
}

function ContactRow({ href, children, icon }) {
  const content = (
    <>
      <ContactIcon>{icon}</ContactIcon>
      <span className="min-w-0 pt-1 text-sm leading-7 text-neutral-700">
        {children}
      </span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className="flex items-start gap-3 transition hover:text-amber-800"
      >
        {content}
      </a>
    )
  }

  return <div className="flex items-start gap-3">{content}</div>
}

export default function Footer() {
  const data = mockContact.data
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <footer className="relative mt-12 w-full border-t border-neutral-200/80 bg-gradient-to-b from-white via-amber-50/30 to-amber-50/50">
      <div className="mx-auto grid max-w-screen-xl gap-10 px-5 pb-8 pt-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:px-4">
        <div className="lg:col-span-4">
          <Link href={Routes.home} className="inline-flex items-center">
            <svg viewBox="0 0 14 16" className="h-16 text-neutral-700 lg:h-20">
              <use href="/assets/images/bamdad-logo.svg#logo" />
            </svg>
          </Link>
          <h2 className="mt-6 text-lg font-bold text-neutral-900">
            درباره گروه بامداد چه می‌دانید؟
          </h2>
          <p
            id="about-us"
            className="mt-3 max-w-sm text-sm leading-8 text-neutral-600"
          >
            پیشرو در خدمات پس از فروش در سراسر ایران
          </p>
        </div>

        <div className="lg:col-span-4">
          <div className="rounded-2xl border border-neutral-200/80 bg-white/70">
            <button
              type="button"
              onClick={() => setContactOpen(open => !open)}
              aria-expanded={contactOpen}
              className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-start"
            >
              <span className="text-sm font-semibold text-neutral-800">
                با ما در تماس باشید
              </span>
              <svg
                viewBox="0 0 24 24"
                className={`size-4 shrink-0 text-neutral-400 transition-transform duration-200 ${
                  contactOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                contactOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <ul className="space-y-3 border-t border-neutral-100 px-4 pb-4 pt-3">
                  <li>
                    <ContactRow
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <circle cx="12" cy="10" r="3" />
                          <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" />
                        </svg>
                      }
                    >
                      {data.contact_address}
                    </ContactRow>
                  </li>
                  <li>
                    <ContactRow
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path d="M4 7h16v12H4zM8 7V5a4 4 0 0 1 8 0v2" />
                        </svg>
                      }
                    >
                      کدپستی:
                      <span className="mr-1 font-medium">
                        {data.contact_postal_code}
                      </span>
                    </ContactRow>
                  </li>
                  <li>
                    <ContactRow
                      href="tel:02166429535"
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      }
                    >
                      {data.contact_telephone}
                    </ContactRow>
                  </li>
                  <li>
                    <ContactRow
                      href={`mailto:${data.contact_email}`}
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path d="M4 6h16v12H4z" />
                          <path d="m4 7 8 6 8-6" />
                        </svg>
                      }
                    >
                      {data.contact_email}
                    </ContactRow>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <h2 className="text-lg font-bold text-neutral-900">ساعات کاری</h2>
          <div className="mt-5 space-y-1 text-sm leading-8 text-neutral-700 prose-p:m-0">
            <ReactMarkdown>{data.contact_working_hours}</ReactMarkdown>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              referrerPolicy="origin"
              target="_blank"
              rel="noreferrer"
              href="https://trustseal.enamad.ir/?id=572853&Code=uXh6ihCBXAJ1ibSgOryqtDQS7UvKTInp"
              className="flex h-20 w-20 items-center justify-center rounded-xl border border-neutral-200 bg-white p-2 transition hover:border-amber-300"
            >
              <img
                referrerPolicy="origin"
                src="https://trustseal.enamad.ir/logo.aspx?id=572853&Code=uXh6ihCBXAJ1ibSgOryqtDQS7UvKTInp"
                alt="نماد اعتماد الکترونیکی"
                className="max-h-full max-w-full object-contain"
              />
            </a>
            <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-neutral-200 bg-white p-2">
              <img
                src="/assets/images/samandehi.png"
                alt="ساماندهی"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-neutral-200 bg-white p-2">
              <img
                src="/assets/images/logo-kar.png"
                alt="نشان کار"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200/80">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center gap-x-5 gap-y-2 px-5 py-5 text-sm lg:px-4">
          {footerLinks.map(link =>
            link.download ? (
              <a
                key={link.label}
                href={link.href}
                download
                className="text-neutral-600 transition hover:text-amber-800"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-neutral-600 transition hover:text-amber-800"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>

      <div className="border-t border-neutral-200/80 bg-white/60">
        <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-3 px-5 py-4 text-xs text-neutral-500 sm:flex-row sm:items-center lg:px-4 lg:text-sm">
          <p className="text-neutral-500">
            <Link href={Routes.home} className="font-medium text-neutral-700">
              گروه تجاری بامداد
            </Link>
            {' '}
            - پلتفرم برتر تجاری © ۲۰۲۴.
            <span className="text-neutral-400">
              {' '}
              تمامی حقوق متعلق به کوشا الکتریک بامداد است.
            </span>
          </p>
          <a
            href="#anchor"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-neutral-700 transition hover:border-neutral-400"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-4 fill-current"
              aria-hidden
            >
              <path d="M12 4l7 8h-4v8h-6v-8H5l7-8z" />
            </svg>
            رفتن به بالای صفحه
          </a>
        </div>
      </div>

      <ToastContainer position="bottom-right" />
    </footer>
  )
}
