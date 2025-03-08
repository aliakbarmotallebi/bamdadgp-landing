'use client'
import React from 'react'

export default function ProfileForm({ userInfo }) {
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
                <select className="text-gray-600 font-medium">
                  <option value="بیست و دوم">روز</option>
                  <option value="یکم">1</option>
                  <option value="دوم">2</option>
                  <option value="سوم">3</option>
                </select>
                <select className="text-gray-600 font-medium pr-3 text-center">
                  <option value="خرداد">ماه</option>
                  <option value="فروردین">فروردین</option>
                  <option value="اردیبهشت">اردیبهشت</option>
                  <option value="خرداد">خرداد</option>
                </select>
                <select className="text-gray-600 font-medium pr-3">
                  <option value="1402">سال</option>
                  <option value="1400">1400</option>
                  <option value="1401">1401</option>
                  <option value="1402">1402</option>
                </select>
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
