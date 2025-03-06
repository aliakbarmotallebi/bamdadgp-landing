import useAuthStore from '@/stores/auth'
import axios from 'axios'
import React from 'react'
const LOCAL_API_URL = process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL
// export const authCkeck = async () => {
//   const { setIsAuth } = useAuthStore()
//   console.log(`${LOCAL_API_URL}/auth/status`)
//   const response = await axios.get(`${LOCAL_API_URL}/auth/status`)
//   setIsAuth(response.data.isAuth)
//   return response.data.isAuth
// }

export const useAuthCheck = () => {
  const { setIsAuth } = useAuthStore()

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${LOCAL_API_URL}/auth/status`)
        console.log(response.data)
        // setIsAuth(response.data.isAuth)
      } catch (error) {
        console.error('خطا در اعتبار سنجی:', error)
      }
    }

    checkAuth()
  }, [])
}
