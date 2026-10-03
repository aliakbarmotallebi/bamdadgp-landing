'use client'
import useAuthStore from '@/stores/auth'
import { mockAuthStatus } from '@/data/mockAuth'
import React from 'react'

export const useAuthCheck = () => {
  const { setIsAuth } = useAuthStore()

  React.useEffect(() => {
    const { isAuth } = mockAuthStatus()
    setIsAuth(isAuth)
  }, [setIsAuth])
}
