'use client'
import React from 'react'
import DatePicker from 'react-multi-date-picker'
import jalali from 'react-date-object/calendars/jalali'
import persian_fa from 'react-date-object/locales/persian_fa'
import axios from 'axios'

export default function ProfileForm({ userInfo }) {
  const [selectedDate, setSelectedDate] = React.useState(new Date())

  const [user, setUser] = React.useState({
    id: userInfo.id,
    fullname: userInfo.fullname,
    email: userInfo.email,
    mobile: userInfo.mobile,
    telephone: userInfo.telephone,
    gender: userInfo.gender,
    address: userInfo.address,
  })

  React.useEffect(() => {
    setSelectedDate(Number(userInfo.birthday))
  }, [userInfo])

  const handleEditProfile = async e => {
    e.preventDefault()
    try {
      const response = await axios.put('/api/profile', {
        ...user,
        birthday: JSON.stringify(selectedDate),
      })
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
                defaultValue={userInfo.email}
                onChange={e =>
                  setUser(prevState => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
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
                defaultValue={userInfo.telephone}
                onChange={e =>
                  setUser(prevState => ({
                    ...prevState,
                    telephone: e.target.value,
                  }))
                }
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
                  defaultValue={userInfo.gender}
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
              <div className="flex items-center rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200 p-3">
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
                className="text-gray-600 font-medium py-2 px-3 rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
              />
            </div>
          </div>
          <div className="w-full gap-7 flex flex-col">
            <div className="flex items-center justify-start gap-6">
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
                className="text-gray-600 resize-none w-1/2 mt-6 font-medium py-2 px-3 rounded-md outline-none border border-gray-200 focus:border-gray-500 transition-all duration-200"
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
