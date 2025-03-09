'use client'

import Form from '@/components/section/checkout/Form'
import Info from '@/components/section/checkout/Info'
import useUserStore from '@/stores/user'
import axios from 'axios'
import React from 'react'
export default function Checkout() {
  const { user, setUser } = useUserStore()
  const getProfile = async () => {
    try {
      const response = await axios.get(`/api/profile`)
      setUser(response.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  React.useEffect(() => {
    getProfile()
  }, [])
  return (
    <>
      <main className="container mx-auto mt-6 2xl:mb-40 mb-36">
        <div className="text-center items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
          <a href="#" className="text-2xl font-bold text-green-900">
            تسویه حساب
          </a>
          <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
            در این قسمت اطلاعات محل سکونت و آخرین مبلغ خرید و روش پرداخت وجود
            دارد
          </div>
        </div>
        <section className="md:grid md:grid-cols-2 grid grid-cols-1 w-full mt-6">
          <div>
            <Form />
          </div>
          <div className="md:px-24">
            <Info />
          </div>
        </section>
      </main>
    </>
  )
}
