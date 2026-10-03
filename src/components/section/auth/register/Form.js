'use client'

import { mockRegister } from '@/data/mockAuth'
import { Routes } from '@/route/routes'
import useAuthStore from '@/stores/auth'
import { registerValidation } from '@/utils/validator/registerValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const fieldClass =
  'w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-3 text-sm font-medium text-neutral-800 outline-none transition focus:border-neutral-500 focus:ring-2 focus:ring-amber-200/70'
const errorFieldClass = '!border-red-300 focus:!ring-red-100'

export default function Form() {
  const [loading, setLoading] = useState(false)
  const { setUser, setIsAuth } = useAuthStore()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerValidation) })

  const onSubmit = async data => {
    setLoading(true)
    try {
      const user = mockRegister({
        username: data.username,
        email: data.email,
      })
      setUser({ id: user.documentId, username: user.username })
      setIsAuth(true)
      toast.success('حساب کاربری شما با موفقیت ایجاد شد!', {
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="flex flex-col">
        <label
          className="mb-1.5 cursor-pointer text-sm font-medium text-neutral-600"
          htmlFor="usernameInput"
        >
          نام کاربری
        </label>
        <input
          id="usernameInput"
          {...register('username')}
          type="text"
          className={`${fieldClass} ${
            errors.username?.message ? errorFieldClass : ''
          }`}
          placeholder="نام کاربری را وارد کنید"
        />
        <small className="pt-1 text-red-500">{errors.username?.message}</small>
      </div>

      <div className="flex flex-col">
        <label
          className="mb-1.5 cursor-pointer text-sm font-medium text-neutral-600"
          htmlFor="emailInput"
        >
          ایمیل
        </label>
        <input
          {...register('email')}
          id="emailInput"
          type="email"
          className={`${fieldClass} ${
            errors.email?.message ? errorFieldClass : ''
          }`}
          placeholder="ایمیل خود را وارد کنید"
        />
        <small className="pt-1 text-red-500">{errors.email?.message}</small>
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
          dir="ltr"
          className={`${fieldClass} ${
            errors.password?.message ? errorFieldClass : ''
          }`}
          placeholder="حداقل ۸ کاراکتر"
        />
        <small className="pt-1 text-red-500">{errors.password?.message}</small>
      </div>

      <div className="flex flex-col">
        <label
          className="mb-1.5 cursor-pointer text-sm font-medium text-neutral-600"
          htmlFor="confirmPassInput"
        >
          تکرار رمز عبور
        </label>
        <input
          {...register('confirmPassword')}
          id="confirmPassInput"
          type="password"
          dir="ltr"
          className={`${fieldClass} ${
            errors.confirmPassword?.message ? errorFieldClass : ''
          }`}
          placeholder="رمز عبور را دوباره وارد کنید"
        />
        <small className="pt-1 text-red-500">
          {errors.confirmPassword?.message}
        </small>
      </div>

      <div className="flex flex-col pt-1">
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'در حال ایجاد حساب...' : 'ایجاد حساب'}
        </button>

        <div className="pt-4 text-center text-sm font-medium text-neutral-600">
          حساب کاربری دارید؟
          <Link
            href={Routes.login}
            className="ms-1 text-amber-700 transition hover:text-amber-900"
          >
            وارد شوید
          </Link>
        </div>
      </div>
    </form>
  )
}
