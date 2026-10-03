'use client'
import ReactMarkdown from 'react-markdown'

export default function Content({ aboutUs, whyUs }) {
  return (
    <section className="relative pb-16 pt-4">
      <div className="mx-auto max-w-7xl space-y-8 px-4 text-justify text-lg">
        <div className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm md:p-10">
          <h3 className="mb-5 text-2xl font-bold text-neutral-900 md:text-3xl">
            درباره کوشا الکتریک بامداد
          </h3>
          <div className="prose prose-neutral max-w-none leading-loose text-neutral-700">
            <ReactMarkdown>{aboutUs}</ReactMarkdown>
          </div>
        </div>

        <div className="rounded-3xl border border-amber-100 bg-gradient-to-l from-amber-50/80 to-white p-6 shadow-sm md:p-10">
          <h3 className="mb-5 text-2xl font-bold text-neutral-900 md:text-3xl">
            چرا ما؟
          </h3>
          <div className="prose prose-neutral max-w-none leading-loose text-neutral-700">
            <ReactMarkdown>{whyUs}</ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  )
}
