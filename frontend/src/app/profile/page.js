import ProfileForm from '@/section/profile/ProfileForm'
import ProfileHeader from '@/section/profile/ProfileHeader'
import ProfileTab from '@/section/profile/ProfileTab'
import axios from 'axios'
import { cookies } from 'next/headers'
const LOCAL_API_URL = process.env.LOCAL_API_BASE_URL

export default async function Profile() {
  let user = {}
  try {
    const cookie = await cookies()
    const token = cookie.get('token')
    const response = await axios.get(`${LOCAL_API_URL}/profile`, {
      headers: {
        Cookie: `token=${token?.value}`,
      },
    })
    user = response.data
  } catch (error) {
    console.error('Error fetching products:', error)
  }
  return (
    <>
      <main>
        <div className="container mx-auto">
          <div className="mx-4 lg:mx-0">
            <ProfileHeader />
            <div className="w-full flex">
              <div className="w-full border pb-6 rounded-xl">
                <ProfileTab />
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
