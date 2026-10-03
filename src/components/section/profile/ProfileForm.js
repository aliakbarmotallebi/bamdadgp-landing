'use client'

import { mockUpdateProfile } from '@/data/mockAuth'
import Provinces from '@/utils/province'
import React from 'react'
import DatePicker from 'react-multi-date-picker'
import jalali from 'react-date-object/calendars/jalali'
import persian_fa from 'react-date-object/locales/persian_fa'
import { toast } from 'react-toastify'

const fieldClass =
  'w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-3 text-sm font-medium text-neutral-800 outline-none transition focus:border-neutral-500 focus:ring-2 focus:ring-amber-200/70'

function Field({ label, htmlFor, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="cursor-pointer text-sm font-medium text-neutral-600"
      >
        {label}
      </label>
      {children}
    </div>
  )
}

export default function ProfileForm({ userInfo }) {
  const [selectedDate, setSelectedDate] = React.useState(new Date())
  const provinces = Provinces()
  const [user, setUser] = React.useState({
    id: userInfo.id,
    fullname: userInfo.fullname,
    email: userInfo.email,
    mobile: userInfo.mobile,
    telephone: userInfo.telephone,
    gender: userInfo.gender,
    address: userInfo.address,
    zip_code: userInfo.zip_code,
    province: userInfo.province,
    national_code: userInfo.national_code,
  })

  React.useEffect(() => {
    setSelectedDate(Number(userInfo.birthday) || new Date())
    setUser(userInfo)
  }, [userInfo])

  const update = (key, value) =>
    setUser(prev => ({
      ...prev,
      [key]: value,
    }))

  const handleEditProfile = async e => {
    e.preventDefault()
    try {
      const updated = mockUpdateProfile({
        ...user,
        birthday: JSON.stringify(selectedDate),
      })
      if (updated) {
        toast.success('اطلاعات کاربری با موفقیت ویرایش شد')
      }
    } catch {
      toast.error('ویرایش اطلاعات با خطا مواجه شد')
    }
  }

  return (
    <form onSubmit={handleEditProfile} className="space-y-8">
      <div>
        <h2 className="text-lg font-bold text-neutral-900">اطلاعات شخصی</h2>
        <p className="mt-1 text-sm text-neutral-500">
          مشخصات حساب خود را بررسی و در صورت نیاز ویرایش کنید.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field label="نام و نام خانوادگی" htmlFor="fullname">
          <input
            id="fullname"
            type="text"
            value={user.fullname || ''}
            onChange={e => update('fullname', e.target.value)}
            className={fieldClass}
          />
        </Field>

        <Field label="پست الکترونیکی" htmlFor="email">
          <input
            id="email"
            type="email"
            placeholder="info@example.com"
            value={user.email || ''}
            onChange={e => update('email', e.target.value)}
            className={fieldClass}
          />
        </Field>

        <Field label="شماره تلفن همراه" htmlFor="mobile">
          <input
            id="mobile"
            type="text"
            placeholder="09xxxxxxxxx"
            value={user.mobile || ''}
            onChange={e => update('mobile', e.target.value)}
            className={fieldClass}
          />
        </Field>

        <Field label="شماره تلفن ثابت" htmlFor="telephone">
          <input
            id="telephone"
            type="text"
            placeholder="021xxxxxxxx"
            value={user.telephone || ''}
            onChange={e => update('telephone', e.target.value)}
            className={fieldClass}
          />
        </Field>

        <Field label="کد ملی" htmlFor="national_code">
          <input
            id="national_code"
            type="text"
            value={user.national_code || ''}
            onChange={e => update('national_code', e.target.value)}
            className={fieldClass}
          />
        </Field>

        <Field label="کد پستی" htmlFor="zip_code">
          <input
            id="zip_code"
            type="text"
            value={user.zip_code || ''}
            onChange={e => update('zip_code', e.target.value)}
            className={fieldClass}
          />
        </Field>

        <Field label="استان" htmlFor="province">
          <select
            id="province"
            value={user.province || ''}
            onChange={e => update('province', e.target.value)}
            className={fieldClass}
          >
            {provinces?.map((province, index) => (
              <option key={index} value={province.provinceName}>
                {province.provinceName}
              </option>
            ))}
          </select>
        </Field>

        <Field label="جنسیت" htmlFor="gender">
          <select
            id="gender"
            value={user.gender || ''}
            onChange={e => update('gender', e.target.value)}
            className={fieldClass}
          >
            <option value="" disabled>
              انتخاب جنسیت
            </option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>
        </Field>

        <Field label="تاریخ تولد" htmlFor="birthday">
          <div className={`${fieldClass} flex items-center py-2.5`}>
            <DatePicker
              id="birthday"
              locale={persian_fa}
              calendar={jalali}
              value={selectedDate}
              onChange={setSelectedDate}
              calendarPosition="bottom-right"
              containerClassName="w-full"
              inputClass="w-full border-0 bg-transparent text-sm font-medium text-neutral-800 outline-none"
            />
          </div>
        </Field>

        <Field label="آدرس" htmlFor="address">
          <textarea
            id="address"
            rows={4}
            value={user.address || ''}
            onChange={e => update('address', e.target.value)}
            className={`${fieldClass} resize-none`}
          />
        </Field>
      </div>

      <div className="flex justify-end border-t border-neutral-100 pt-6">
        <button
          type="submit"
          className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          ذخیره تغییرات
        </button>
      </div>
    </form>
  )
}
