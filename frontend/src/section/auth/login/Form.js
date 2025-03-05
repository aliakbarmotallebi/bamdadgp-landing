'use client'

import { Routes } from '@/route/routes'
import useAuthStore from '@/stores/auth'
import { loginValidation } from '@/utils/validator/loginValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
const LOCAL_API_URL = process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL

export default function Form() {
  const { setUser } = useAuthStore()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginValidation) })
  const onSubmit = async data => {
    try {
      const response = await axios.post(
        `${LOCAL_API_URL}/auth/login`,
        {
          data,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      if (response.status === 201) {
        const user = response.data
        setUser({ id: user.documentId, username: user.username })
        toast.success('حساب کاربری شما با موفقیت ایجاد شد!', {
          theme: 'colored',
        })
        setTimeout(() => {
          redirect(Routes.home)
        }, 500)
      }
    } catch (error) {
      console.error('Error fetching register:', error)
      toast.error('عملیات با خطا مواجه شد، لطفا دوباره تلاش کنید')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex flex-col">
        <label
          className="text-stone-600 font-medium text-sm mb-1 cursor-pointer"
          htmlFor="usernameInput"
        >
          نام کاربری یا ایمیل
        </label>
        <input
          id="usernameInput"
          type="text"
          {...register('identifier')}
          className={`${
            errors.identifier?.message ? '!border-red-300' : ''
          } p-1.5 text-sm font-medium rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200`}
          placeholder="نام کاربری یا ایمیل خود را وارد کنید"
        />
        <small className="text-red-500 pt-1">
          {errors.identifier?.message}
        </small>
      </div>
      <div className="flex flex-col">
        <label
          className="text-stone-600 font-medium text-sm mb-1 cursor-pointer"
          htmlFor="passInput"
        >
          رمز عبور
        </label>
        <input
          id="passInput"
          type="password"
          {...register('password')}
          className={`${
            errors.password?.message ? '!border-red-300' : ''
          } p-1.5 text-sm font-medium rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200`}
          placeholder="رمز عبور خود را وارد کنید"
        />
        <small className="text-red-500 pt-1">{errors.password?.message}</small>
        <a
          href=""
          className="text-yellow-600 hover:text-yellow-800 transition-all duration-200 text-xs mt-1 underline underline-offset-4 text-end"
        >
          رمز عبور خود را فراموش کردید؟
        </a>
      </div>

      <div className="flex justify-center flex-col">
        <button className="bg-yellow-300 hover:bg-yellow-500 transition-all duration-200 text-stone-800 w-full rounded-md p-2 text-sm font-medium">
          ورود
        </button>

        <div className="pt-3 text-sm font-medium text-stone-600">
          حساب کاربری ندارید؟
          <Link
            href={Routes.register}
            className="text-yellow-600 hover:text-yellow-800 transition-all duration-200 ms-1"
          >
            ثبت نام کنید.
          </Link>
        </div>
      </div>
    </form>
  )
}
