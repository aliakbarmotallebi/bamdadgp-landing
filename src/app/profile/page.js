'use client'

import ProfileForm from '@/components/section/profile/ProfileForm'
import ProfileShell from '@/components/section/profile/ProfileShell'
import { buildMockUser, getMockProfile } from '@/data/mockAuth'
import React from 'react'

export default function Profile() {
  const [user, setUser] = React.useState({})

  React.useEffect(() => {
    const profile = getMockProfile() || buildMockUser({ username: 'کاربر' })
    setUser(profile)
  }, [])

  return (
    <ProfileShell
      title="حساب کاربری"
      subtitle="اطلاعات شخصی خود را مدیریت کنید"
    >
      <ProfileForm userInfo={user} />
    </ProfileShell>
  )
}
