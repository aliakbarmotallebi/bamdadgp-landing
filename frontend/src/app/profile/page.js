'use client'
import ProfileForm from '@/components/section/profile/ProfileForm'
import ProfileHeader from '@/components/section/profile/ProfileHeader'
import ProfileTab from '@/components/section/profile/ProfileTab'
import axios from 'axios'
import { usePathname } from 'next/navigation'
import React from 'react'
const LOCAL_API_URL = process.env.LOCAL_API_BASE_URL

export default function Profile() {
  const [user, setUser] = React.useState({})
  const path = usePathname()
  const getProfile = async () => {
    try {
      const response = await axios.get(`/api/profile`)
      console.log(response.data)
      setUser(() => ({
        ...response.data,
      }))
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  React.useEffect(() => {
    getProfile()
  }, [])
  return (
    <>
      <main>
        <div className="container mx-auto">
          <div className="mx-4 lg:mx-0">
            <ProfileHeader />
            <div className="w-full flex">
              <div className="w-full border pb-6 rounded-xl">
                <ProfileTab path={path} />
                <div className="px-5 mt-4 w-full gap-10 flex flex-col">
                  <div className="flex flex-col gap-2">
                    <p className="text-xl text-green-900 font-bold">
                      اطلاعات شخصی
                    </p>
                  </div>
                  <ProfileForm userInfo={user} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
