'use client'

import { useState } from 'react'

export default function Faq({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="faq-section" className="relative overflow-hidden py-16 px-4 sm:px-8 lg:px-0">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(253,186,116,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium text-amber-700">پشتیبانی بامداد</p>
          <h2 className="text-3xl font-bold text-neutral-900">سوالات متداول</h2>
          <p className="mt-3 text-sm text-neutral-500 md:text-base">
            پاسخ سریع به رایج‌ترین پرسش‌های گارانتی و قرعه‌کشی
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const open = activeIndex === index
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition duration-300 ${
                  open
                    ? 'border-amber-300/70 bg-white shadow-[0_12px_30px_rgba(180,120,40,0.08)]'
                    : 'border-neutral-200/80 bg-white/80 hover:border-neutral-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right md:px-6 md:py-5"
                  aria-expanded={open}
                >
                  <span className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                        open
                          ? 'bg-neutral-900 text-white'
                          : 'bg-amber-50 text-amber-800'
                      }`}
                    >
                      {(index + 1).toLocaleString('fa-IR')}
                    </span>
                    <h3 className="text-sm font-bold leading-7 text-neutral-900 md:text-base">
                      {faq.question}
                    </h3>
                  </span>

                  <span
                    className={`relative flex size-8 shrink-0 items-center justify-center rounded-full border transition ${
                      open
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-200 bg-white text-neutral-700'
                    }`}
                  >
                    <span className="absolute h-0.5 w-3 rounded-full bg-current" />
                    <span
                      className={`absolute h-3 w-0.5 rounded-full bg-current transition-transform duration-300 ${
                        open ? 'rotate-90 scale-y-0' : ''
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className="border-t border-neutral-100 px-5 pb-5 pt-3 text-sm leading-8 text-neutral-600 md:px-6 md:text-base [&_a]:font-medium [&_a]:text-amber-700 [&_a]:underline"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
