'use client'

import { mockLogin } from '@/data/mockAuth'
import { Routes } from '@/route/routes'
import useAuthStore from '@/stores/auth'
import { loginValidation } from '@/utils/validator/loginValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const tabs = [
  { id: 'customer', label: 'ورود' },
  { id: 'partner', label: 'ورود همکار' },
]

const fieldClass =
  'w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-3 text-sm font-medium text-neutral-800 outline-none transition focus:border-neutral-500 focus:ring-2 focus:ring-amber-200/70'
const errorFieldClass = '!border-red-300 focus:!ring-red-100'

export default function Form() {
  const [tab, setTab] = useState('customer')
  const [loading, setLoading] = useState(false)
  const { setIsAuth, setUser } = useAuthStore()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginValidation) })

  const onSubmit = async data => {
    setLoading(true)
    try {
      const user = mockLogin({ identifier: data.identifier })
      setUser({ id: user.documentId, username: user.username })
      setIsAuth(true)
      toast.success('وارد حساب کاربری خود شدید!', {
        theme: 'colored',
      })
      setTimeout(() => {
        redirect(Routes.home)
      }, 500)
    } catch (error) {
      console.error('Error fetching register:', error)
      toast.error('عملیات با خطا مواجه شد، لطفا دوباره تلاش کنید')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="نوع ورود"
        className="mb-7 grid grid-cols-2 rounded-2xl bg-neutral-100 p-1"
      >
        {tabs.map(item => {
          const active = tab === item.id
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setTab(item.id)}
              className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                active
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      {tab === 'customer' ? (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label
              className="mb-1.5 cursor-pointer text-sm font-medium text-neutral-600"
              htmlFor="identifierInput"
            >
              نام کاربری یا ایمیل
            </label>
            <input
              id="identifierInput"
              type="text"
              {...register('identifier')}
              className={`${fieldClass} ${
                errors.identifier?.message ? errorFieldClass : ''
              }`}
              placeholder="نام کاربری یا ایمیل خود را وارد کنید"
            />
            <small className="pt-1 text-red-500">
              {errors.identifier?.message}
            </small>
          </div>

          <div className="flex flex-col">
            <label
              className="mb-1.5 cursor-pointer text-sm font-medium text-neutral-600"
              htmlFor="passInput"
            >
              رمز عبور
            </label>
            <input
              id="passInput"
              type="password"
              {...register('password')}
              className={`${fieldClass} ${
                errors.password?.message ? errorFieldClass : ''
              }`}
              placeholder="رمز عبور خود را وارد کنید"
            />
            <small className="pt-1 text-red-500">
              {errors.password?.message}
            </small>
            <a
              href="#"
              className="mt-2 text-end text-xs text-amber-700 underline underline-offset-4 transition hover:text-amber-900"
            >
              رمز عبور خود را فراموش کردید؟
            </a>
          </div>

          <div className="flex flex-col pt-1">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'در حال ورود...' : 'ورود'}
            </button>

            <div className="pt-4 text-center text-sm font-medium text-neutral-600">
              حساب کاربری ندارید؟
              <Link
                href={Routes.register}
                className="ms-1 text-amber-700 transition hover:text-amber-900"
              >
                ثبت نام کنید
              </Link>
            </div>
          </div>
        </form>
      ) : (
        <div className="flex flex-col">
          <div className="mb-6 rounded-2xl border border-amber-200/70 bg-gradient-to-l from-amber-50 to-orange-50/50 p-5">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-amber-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-neutral-900"
                aria-hidden
              >
                <path
                  d="M4 7.5h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-11Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M8 7.5V6a4 4 0 0 1 8 0v1.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M9.5 13h5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-neutral-900">
              پنل همکاران بامداد
            </h2>
            <p className="mt-2 text-sm leading-7 text-neutral-600">
              اگر نماینده، همکار فروش یا عضو شبکه خدمات هستید، از این مسیر وارد
              پنل تخصصی همکاران شوید.
            </p>
          </div>

          <ul className="mb-6 space-y-2.5 text-sm text-neutral-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              مدیریت سفارش‌ها و موجودی
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              دسترسی به گزارش‌ها و ابزارهای فروش
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              ورود امن از طریق پنل اختصاصی همکاران
            </li>
          </ul>

          <a
            href={Routes.seller}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            ورود به پنل همکار
          </a>

          <p className="mt-4 text-center text-xs leading-6 text-neutral-500">
            پس از انتقال، با اطلاعات حساب همکار خود وارد شوید.
          </p>
        </div>
      )}
    </div>
  )
}
