'use client'

import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

export default function Form() {
  const usernameInput = React.useRef(null)
  const emailInput = React.useRef(null)

  const [registerForm, setRegisterForm] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [repeatPassword, setRepeatPassword] = useState('')

  React.useEffect(() => {
    if (emailInput.current) {
      registerForm.email.length > 0
        ? (emailInput.current.style.direction = 'ltr')
        : (emailInput.current.style.direction = 'rtl')
    }
  }, [registerForm.email])
  React.useEffect(() => {
    if (usernameInput.current) {
      registerForm.username.length > 0
        ? (usernameInput.current.style.direction = 'ltr')
        : (usernameInput.current.style.direction = 'rtl')
    }
  }, [registerForm.username])

  const handleRegister = () => {
    if (registerForm.password === repeatPassword) {
    } else {
      toast('رمز عبور یکسان نمی باشد')
    }
  }

  return (
    <div className="flex flex-col gap-6">
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
          value={registerForm.username}
          onChange={e =>
            setRegisterForm(prev => ({ ...prev, username: e.target.value }))
          }
          type="text"
          className="p-1.5 font-medium rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
          placeholder="نام کاربری را وارد کنید"
        />
      </div>
      <div className="flex flex-col">
        <label
          className="text-stone-600 font-medium text-sm mb-1 cursor-pointer"
          htmlFor="usernameInput"
        >
          ایمیل
        </label>
        <input
          ref={emailInput}
          value={registerForm.email}
          onChange={e =>
            setRegisterForm(prev => ({ ...prev, email: e.target.value }))
          }
          id="emailInput"
          type="email"
          className="p-1.5 font-medium rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
          placeholder="ایمیل خود را وارد کنید"
        />
      </div>
      <div className="flex flex-col">
        <label
          className="text-stone-600 font-medium text-sm mb-1 cursor-pointer"
          htmlFor="passInput"
        >
          رمز عبور (حداقل 6 کاراکتر)
        </label>
        <input
          id="passInput"
          type="password"
          value={registerForm.password}
          onChange={e =>
            setRegisterForm(prev => ({ ...prev, password: e.target.value }))
          }
          dir="ltr"
          className="p-1.5 font-medium rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
          placeholder=""
        />
        <a
          href=""
          className="text-yellow-600 hover:text-yellow-800 transition-all duration-200 text-xs mt-1 underline underline-offset-4"
        ></a>
      </div>

      <div className="flex flex-col">
        <label
          className="text-stone-600 font-medium text-sm mb-1 cursor-pointer"
          htmlFor="passInput"
        >
          تکرار رمز عبور
        </label>
        <input
          value={repeatPassword}
          onChange={e => setRepeatPassword(e.target.value)}
          id="passInput"
          type="password"
          dir="ltr"
          className="p-1.5 font-medium rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
          placeholder=""
        />
        <a
          href=""
          className="text-yellow-600 hover:text-yellow-800 transition-all duration-200 text-xs mt-1 underline underline-offset-4"
        ></a>
      </div>

      <div className="flex justify-center flex-col">
        <button
          onClick={handleRegister}
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
    </div>
  )
}
