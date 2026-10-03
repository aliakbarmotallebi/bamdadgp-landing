'use client'
import useCartStore from '@/stores/cart'
import { getProductsByIds } from '@/lib/products'
import React from 'react'
import { toast } from 'react-toastify'

export default function Info() {
  const { cart, totalPrice } = useCartStore()
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    const ids = cart.map(item => item.id)
    setItems(getProductsByIds(ids))
  }, [cart])

  const handleSubmit = () => {
    toast.success('سفارش شما با موفقیت ثبت شد (حالت نمایشی)')
  }

  return (
    <article className="pt-4 md:pt-10">
      <div className="sticky top-24 rounded-2xl border border-neutral-100 bg-stone-50 p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-neutral-900">سفارش شما</h2>

        <ul className="mb-4 space-y-3">
          {items.map(product => {
            const qty = cart.find(item => item.id === product.id)?.qty || 1
            return (
              <li
                key={product.id}
                className="flex items-start justify-between gap-3 border-b border-neutral-200/70 pb-3 text-sm"
              >
                <span className="text-neutral-700">
                  {product.product_title}
                  <span className="mr-1 text-neutral-400">× {qty}</span>
                </span>
                <span className="shrink-0 font-semibold text-neutral-900">
                  {(product.product_price * qty).toLocaleString('fa-IR')} تومان
                </span>
              </li>
            )
          })}
        </ul>

        <div className="space-y-2 text-sm text-neutral-700">
          <div className="flex justify-between">
            <span>جمع سبد خرید</span>
            <span>{totalPrice.toLocaleString('fa-IR')} تومان</span>
          </div>
          <div className="flex justify-between">
            <span>هزینه ارسال</span>
            <span className="text-emerald-600">رایگان</span>
          </div>
          <div className="flex justify-between border-t border-neutral-200 pt-3 text-base font-bold text-neutral-900">
            <span>مجموع</span>
            <span>{totalPrice.toLocaleString('fa-IR')} تومان</span>
          </div>
        </div>

        <div className="my-5 rounded-xl border border-neutral-100 bg-white p-3">
          <div className="flex items-center gap-3">
            <img
              src="/assets/images/zarinpal.png"
              className="h-12 w-12 object-contain"
              alt="زرین‌پال"
            />
            <div>
              <p className="text-sm font-semibold text-neutral-800">
                پرداخت امن زرین‌پال
              </p>
              <p className="text-xs text-neutral-500">
                پرداخت با کلیه کارت‌های عضو شتاب
              </p>
            </div>
          </div>
        </div>

        <button
          form="checkout"
          type="button"
          onClick={handleSubmit}
          className="w-full rounded-xl bg-neutral-900 py-3 text-center font-semibold text-white transition hover:bg-neutral-800"
        >
          ثبت سفارش
        </button>
      </div>
    </article>
  )
}
