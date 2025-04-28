'use client'
import ReactMarkdown from 'react-markdown'

export default function Content({ body }) {
  return (
    <section className="relative pt-12 pb-5">
      <div className="mb-10 mx-auto max-w-7xl text-lg text-justify space-y-5 space-y-reverse">
        <h3 className="text-3xl font-bold mb-5">
          قوانین و مقررات گروه تجاری بامداد
        </h3>
        <div className="leading-loose">
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      </div>
    </section>
  )
}
