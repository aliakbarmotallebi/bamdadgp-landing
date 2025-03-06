import useAuthStore from '@/stores/auth'
import axios from 'axios'
import React from 'react'

export const useAuthCheck = () => {
  const { setIsAuth } = useAuthStore()

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`/api/auth/status`)
        setIsAuth(response.data.isAuth)
      } catch (error) {
        console.error('خطا در اعتبار سنجی:', error)
      }
    }

    checkAuth()
  }, [])
}
