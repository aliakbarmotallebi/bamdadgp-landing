'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { registerValidation } from '@/utils/validator/registerValidation'
import axios from 'axios'
import useAuthStore from '@/stores/auth'
const LOCAL_API_URL = process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL

export default function Form() {
  const { setUser } = useAuthStore()
  const usernameInput = React.useRef(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerValidation) })

  const onSubmit = async data => {
    delete data.confirmPassword
    try {
      const response = await axios.post(
        `${LOCAL_API_URL}/auth/register`,
        {
          data,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const user = response.data.user

      setUser({ id: user.documentId, username: user.username })
    } catch (error) {
      console.error('Error fetching register:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex flex-col">
        <label
          className="text-stone-600 font-medium text-sm mb-1 cursor-pointer"
          htmlFor="usernameInput"
        >
          نام کاربری
        </label>
        <input
          id="usernameInput"
          ref={usernameInput}
          {...register('username')}
          type="text"
          className={`${
            errors.username?.message ? '!border-red-300' : ''
          } p-1.5 font-medium rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200`}
          placeholder="نام کاربری را وارد کنید"
        />
        {errors.username && (
          <small className="text-red-500 pt-1">
            {errors.username?.message}
          </small>
        )}
      </div>
      <div className="flex flex-col">
        <label
          className="text-stone-600 font-medium text-sm mb-1 cursor-pointer"
          htmlFor="emailInput"
        >
          ایمیل
        </label>
        <input
          {...register('email')}
          id="emailInput"
          type="text"
          className={`${
            errors.email?.message ? '!border-red-300' : ''
          } p-1.5 font-medium rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200`}
          placeholder="ایمیل خود را وارد کنید"
        />
        {errors.email && (
          <small className="text-red-500 pt-1">{errors.email?.message}</small>
        )}
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
          dir="ltr"
          className={`${
            errors.password?.message ? '!border-red-300' : ''
          } p-1.5 font-medium rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200`}
          placeholder=""
        />
        {errors.password && (
          <small className="text-red-500 pt-1">
            {errors.password?.message}
          </small>
        )}
      </div>

      <div className="flex flex-col">
        <label
          className="text-stone-600 font-medium text-sm mb-1 cursor-pointer"
          htmlFor="confirmPassInput"
        >
          تکرار رمز عبور
        </label>
        <input
          {...register('confirmPassword')}
          id="confirmPassInput"
          type="password"
          dir="ltr"
          className={`${
            errors.confirmPassword?.message ? '!border-red-300' : ''
          } p-1.5 font-medium rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200`}
          placeholder=""
        />
        {errors.confirmPassword && (
          <small className="text-red-500 pt-1">
            {errors.confirmPassword.message}
          </small>
        )}
        <a
          href=""
          className="text-yellow-600 hover:text-yellow-800 transition-all duration-200 text-xs mt-1 underline underline-offset-4"
        ></a>
      </div>

      <div className="flex justify-center flex-col">
        <button
          type="submit"
          className="bg-yellow-300 hover:bg-yellow-500 transition-all duration-200 text-stone-800 w-full rounded-md p-2 text-sm font-medium"
        >
          ایجاد حساب
        </button>

        <div className="pt-3 text-sm font-medium text-stone-600">
          حساب کاربری دارید؟
          <a
            href=""
            className="text-yellow-600 hover:text-yellow-800 transition-all duration-200 ms-1"
          >
            وارد شوید.
          </a>
        </div>
      </div>
    </form>
  )
}
