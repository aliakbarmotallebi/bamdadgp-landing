'use client'
import React from 'react'
import moment from 'moment-jalaali'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function ProfileForm({ userInfo }) {
  const [selectedDate, setSelectedDate] = React.useState(
    moment().format('jYYYY/jMM/jDD')
  )

  const handleChange = date => {
    setSelectedDate(date)
  }

  const [user, setUser] = React.useState({
    fullname: userInfo.fullname,
    email: userInfo.email,
    mobile: userInfo.mobile,
    telephone: userInfo.telephone,
    gender: userInfo.gender,
    birthday: userInfo.birthday,
  })
  return (
    <>
      <form action="" className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-32 w-full justify-center">
          <div className="w-full lg:w-2/4 gap-7 flex flex-col">
            <div className="flex items-center justify-start gap-6">
              <label className="text-gray-600 font-medium block w-32">
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                defaultValue={user.fullname}
                className="text-gray-60 max-w-64 flex-1 font-medium py-2 px-3 rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
              />
            </div>
            <div className="flex items-center justify-start gap-6">
              <label className="text-gray-600 font-medium block w-32">
                پست الکترونیکی
              </label>
              <input
                type="text"
                placeholder="info@example.com"
                defaultValue={user.email}
                className="text-gray-60 max-w-64 flex-1 font-medium py-2 px-3 rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
              />
            </div>
            <div className="flex items-center justify-start gap-6">
              <label className="text-gray-600 font-medium block w-32">
                شماره تلفن ثابت
              </label>
              <input
                type="text"
                placeholder="021xxxxxxxx"
                defaultValue={user.telephone}
                className="text-gray-60 max-w-64 flex-1 font-medium py-2 px-3 rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/4 gap-7 flex flex-col">
            <div className="flex items-center justify-start w-full gap-6">
              <label className="text-gray-600 font-medium block w-32">
                جنسیت
              </label>
              <div className="w-fit">
                <select
                  name="جنسیت"
                  defaultValue={user.gender}
                  className="cursor-pointer bg-white text-gray-600 font-medium py-2 px-12 rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200 w-full"
                >
                  <option value="defaul">انتخاب جنسیت</option>
                  <option value="male">مرد</option>
                  <option value="female">زن</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6">
              <label className="text-gray-600 font-medium block w-32">
                تاریخ تولد
              </label>
              <div className="flex items-center rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200 p-3">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleChange}
                  dateFormat="yyyy/MM/dd"
                  calendarStartDay={6} // شروع هفته از شنبه
                  locale="fa" // برای تقویم فارسی
                />
              </div>
            </div>
            <div className="flex items-center justify-start gap-6">
              <label className="text-gray-600 font-medium block w-32">
                شماره تلفن همراه
              </label>
              <input
                type="text"
                placeholder="09xxxxxxxxx"
                defaultValue={user.mobile}
                className="text-gray-600 font-medium py-2 px-3 rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-8">
          <div className="col-span-2 justify-self-end">
            <button
              type="submit"
              className="px-7 py-2 text-center text-yellow-300 font-medium bg-stone-800 hover:bg-stone-600 transition-all duration-200 w-full rounded-md text-sm"
            >
              ویرایش اطلاعات
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
