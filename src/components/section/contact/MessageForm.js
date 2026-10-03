'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'

export default function MessageForm() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const onChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.message) {
      toast.error('لطفاً همه فیلدها را تکمیل کنید')
      return
    }

    setLoading(true)
    setTimeout(() => {
      toast.success('پیام شما با موفقیت ثبت شد')
      setForm({ name: '', phone: '', message: '' })
      setLoading(false)
    }, 600)
  }

  return (
    <div className="rounded-3xl border border-neutral-200/80 bg-white p-5 shadow-sm md:p-7">
      <h2 className="mb-2 text-xl font-bold text-neutral-900">ارسال پیام</h2>
      <p className="mb-6 text-sm text-neutral-500">
        پیام خود را بنویسید؛ در اولین فرصت پاسخ می‌دهیم.
      </p>

      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-neutral-700">
            نام و نام خانوادگی
          </span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="مثلاً علی احمدی"
            className="w-full rounded-xl border border-neutral-200 bg-stone-50/50 px-4 py-3 text-sm outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-neutral-700">
            شماره همراه
          </span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="0912xxxxxxx"
            className="w-full rounded-xl border border-neutral-200 bg-stone-50/50 px-4 py-3 text-sm outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-neutral-700">
            پیام شما
          </span>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows={6}
            placeholder="متن پیام..."
            className="w-full resize-none rounded-xl border border-neutral-200 bg-stone-50/50 px-4 py-3 text-sm outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-neutral-900 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
        >
          {loading ? 'در حال ارسال...' : 'ارسال پیام'}
        </button>
      </form>
    </div>
  )
}
