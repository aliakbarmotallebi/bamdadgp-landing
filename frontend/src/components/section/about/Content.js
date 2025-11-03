'use client'
import ReactMarkdown from 'react-markdown'

export default function Content({ aboutUs, whyUs }) {
  return (
    <section className="relative pt-12 pb-5">
      <div className="mb-10 mx-auto max-w-7xl text-lg text-justify space-y-5 space-y-reverse px-4">
        <h3 className="text-3xl font-bold mb-5">درباره گروه تجاری بامداد</h3>
        <div className="leading-loose">
          <ReactMarkdown>{aboutUs}</ReactMarkdown>
        </div>
        <div className="bg-zinc-300 h-px w-full"></div>
        <h3 className="text-3xl font-bold">چرا ما؟</h3>
        <div className="leading-loose">
          <ReactMarkdown>{whyUs}</ReactMarkdown>
        </div>
      </div>
    </section>
  )
}
