'use client'
import React from 'react'
import DatePicker from 'react-multi-date-picker'
import jalali from 'react-date-object/calendars/jalali'
import persian_fa from 'react-date-object/locales/persian_fa'
import axios from 'axios'
import Provinces from '@/utils/province'
import { toast } from 'react-toastify'

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
    setSelectedDate(Number(userInfo.birthday))
    setUser(userInfo)
  }, [userInfo])

  const handleEditProfile = async e => {
    e.preventDefault()
    try {
      const response = await axios.put('/api/profile', {
        ...user,
        birthday: JSON.stringify(selectedDate),
      })
      if (response.data) {
        toast.success('اطلاعات کاربری با موفقیت ویرایش شد')
      }
    } catch (error) {
      console.log('Failed to update profile')
    }
  }

  return (
    <>
      <form
        action=""
        onSubmit={handleEditProfile}
        className="container mx-auto"
      >
        <div className="flex flex-col flex-wrap lg:flex-row w-full justify-between px-16">
          <div className="w-full lg:w-2/4 gap-7 flex flex-col">
            <div className="flex items-center justify-start gap-6">
              <label className="text-gray-600 font-medium block w-32">
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                defaultValue={userInfo.fullname}
                onChange={e =>
                  setUser(prevState => ({
                    ...prevState,
                    fullname: e.target.value,
                  }))
                }
                className="text-gray-60 bg-white max-w-64 flex-1 font-medium py-2 px-3 rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
              />
            </div>
            <div className="flex items-center justify-start gap-6">
              <label className="text-gray-600 font-medium block w-32">
                پست الکترونیکی
              </label>
              <input
                type="text"
                placeholder="info@example.com"
                defaultValue={userInfo.email}
                onChange={e =>
                  setUser(prevState => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
                className="text-gray-60  bg-white max-w-64 flex-1 font-medium py-2 px-3 rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
              />
            </div>
            <div className="flex items-center justify-start gap-6">
              <label className="text-gray-600 font-medium block w-32">
                شماره تلفن ثابت
              </label>
              <input
                type="text"
                placeholder="021xxxxxxxx"
                defaultValue={userInfo.telephone}
                onChange={e =>
                  setUser(prevState => ({
                    ...prevState,
                    telephone: e.target.value,
                  }))
                }
                className="text-gray-60 max-w-64  bg-white flex-1 font-medium py-2 px-3 rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
              />
            </div>
            <div className="flex items-center justify-start w-full gap-6">
              <label className="text-gray-600 font-medium block w-32">
                کد پستی
              </label>
              <input
                type="text"
                defaultValue={userInfo.zip_code}
                onChange={e =>
                  setUser(prevState => ({
                    ...prevState,
                    zip_code: e.target.value,
                  }))
                }
                className="text-gray-60 max-w-64  bg-white flex-1 font-medium py-2 px-3 rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
              />
            </div>

            <div className="flex items-center justify-start w-full gap-6">
              <label className="text-gray-600 font-medium block w-32">
                استان
              </label>
              <select
                type="text"
                name="billing-state"
                defaultValue={userInfo.province || ''}
                value={user.province}
                onChange={event =>
                  setUser(prev => ({
                    ...prev,
                    province: event.target.value,
                  }))
                }
                className="border flex-1 max-w-64 border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5  outline-none"
              >
                {provinces &&
                  provinces.map((province, index) => (
                    <option key={index} value={province.provinceName}>
                      {province.provinceName}
                    </option>
                  ))}
              </select>
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
                  defaultValue={userInfo.gender || ''}
                  onChange={e =>
                    setUser(prevState => ({
                      ...prevState,
                      gender: e.target.value,
                    }))
                  }
                  className="cursor-pointer max-w-64 flex-1 bg-white text-gray-600 font-medium py-2 px-3 rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200 w-full"
                >
                  <option disabled value="defaul">
                    انتخاب جنسیت
                  </option>
                  <option value="male">مرد</option>
                  <option value="female">زن</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6">
              <label className="text-gray-600 font-medium block w-32">
                تاریخ تولد
              </label>
              <div className="flex items-center rounded-md  bg-white outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200 p-3">
                <DatePicker
                  locale={persian_fa}
                  calendar={jalali}
                  value={selectedDate}
                  onChange={setSelectedDate}
                  calendarPosition="bottom-right"
                  style={{
                    border: 'none !important',
                    outline: 'none !important',
                    boxShadow: 'none !important',
                  }}
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
                defaultValue={userInfo.mobile}
                onChange={e =>
                  setUser(prevState => ({
                    ...prevState,
                    mobile: e.target.value,
                  }))
                }
                className="text-gray-600 font-medium py-2 px-3  max-w-64 flex-1 bg-white rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
              />
            </div>
            <div className="flex items-center justify-start w-full gap-6">
              <label className="text-gray-600 font-medium block w-32">
                کد ملی
              </label>
              <input
                type="text"
                defaultValue={userInfo.national_code}
                onChange={e =>
                  setUser(prevState => ({
                    ...prevState,
                    national_code: e.target.value,
                  }))
                }
                className="text-gray-60 max-w-64 bg-white flex-1 font-medium py-2 px-3 rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
              />
            </div>
            <div className="flex items-start justify-start w-full gap-6">
              <label className="text-gray-600 font-medium block w-32">
                آدرس
              </label>
              <textarea
                type="text"
                placeholder=""
                defaultValue={userInfo.address}
                onChange={e =>
                  setUser(prevState => ({
                    ...prevState,
                    address: e.target.value,
                  }))
                }
                rows={5}
                className="text-gray-600 flex-1 resize-none w-1/2 bg-white font-medium py-2 px-3 rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
              ></textarea>
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
