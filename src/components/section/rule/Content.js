'use client'
import ReactMarkdown from 'react-markdown'

export default function Content({ body }) {
  return (
    <section className="relative pb-16 pt-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm md:p-10">
          <h3 className="mb-6 text-2xl font-bold text-neutral-900 md:text-3xl">
            قوانین و مقررات گروه تجاری بامداد
          </h3>
          <div className="prose prose-neutral max-w-none space-y-4 text-justify leading-loose text-neutral-700">
            <ReactMarkdown>{body}</ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  )
}
