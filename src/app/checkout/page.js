'use client'

import Form from '@/components/section/checkout/Form'
import Info from '@/components/section/checkout/Info'
import useCartStore from '@/stores/cart'
import { Routes } from '@/route/routes'
import Link from 'next/link'
import React from 'react'

export default function Checkout() {
  const { cart, totalPrice } = useCartStore()
  const [hydrated, setHydrated] = React.useState(false)

  React.useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return (
      <main className="container mx-auto my-24 flex justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-neutral-200 border-t-amber-500" />
      </main>
    )
  }

  if (!cart.length) {
    return (
      <main className="container mx-auto my-24 flex flex-col items-center gap-4 px-4 text-center">
        <h1 className="text-2xl font-bold text-neutral-800">سبد خرید خالی است</h1>
        <p className="text-neutral-500">برای تسویه حساب ابتدا محصولی اضافه کنید.</p>
        <Link
          href={Routes.store}
          className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white"
        >
          رفتن به فروشگاه
        </Link>
      </main>
    )
  }

  return (
    <main className="container mx-auto mb-36 mt-8 px-4 2xl:mb-40">
      <div className="mb-8 border-b border-neutral-100 bg-white py-6 text-center">
        <h1 className="text-2xl font-bold text-neutral-900">تسویه حساب</h1>
        <p className="mt-2 text-sm text-neutral-500">
          اطلاعات ارسال را تکمیل کنید · مبلغ قابل پرداخت:{' '}
          {totalPrice.toLocaleString('fa-IR')} تومان
        </p>
      </div>
      <section className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-100 bg-white p-2 shadow-sm md:p-4">
          <Form />
        </div>
        <div>
          <Info />
        </div>
      </section>
    </main>
  )
}
