'use client'
import { Routes } from '@/route/routes'
import useCartStore from '@/stores/cart'
import { getProductsByIds } from '@/lib/products'
import { imageUrl } from '@/utils/imageUrl'
import Link from 'next/link'
import React from 'react'

export default function Cart() {
  const {
    cart,
    increaseCart,
    decreaseCart,
    removeCart,
    totalPrice,
    setTotalPrice,
  } = useCartStore()
  const [products, setProducts] = React.useState([])
  const [hydrated, setHydrated] = React.useState(false)

  React.useEffect(() => {
    setHydrated(true)
  }, [])

  React.useEffect(() => {
    if (!hydrated) return
    if (cart.length > 0) {
      const ids = cart.map(item => item.id)
      setProducts(getProductsByIds(ids))
    } else {
      setProducts([])
    }
  }, [cart, hydrated])

  React.useEffect(() => {
    setTotalPrice(
      products.reduce((acc, product) => {
        const cartItem = cart.find(item => item.id === product.id)
        if (cartItem) {
          return acc + cartItem.qty * product.product_price
        }
        return acc
      }, 0)
    )
  }, [products, cart, setTotalPrice])

  if (!hydrated) {
    return (
      <main className="container mx-auto my-24 flex justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-neutral-200 border-t-amber-500" />
      </main>
    )
  }

  return (
    <main>
      <section className="container mx-auto mb-36 mt-12 px-4 2xl:mb-52 2xl:mt-16">
        {products.length > 0 ? (
          <>
            <div className="mb-10 text-center">
              <h1 className="text-2xl font-bold text-neutral-900">
                سبد خرید شما
              </h1>
              <p className="mt-2 text-sm text-neutral-500">
                {products.length} محصول آماده تسویه حساب
              </p>
            </div>

            <div className="mx-auto justify-center gap-6 md:flex xl:px-0">
              <div className="w-full overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm">
                <table className="w-full text-sm text-gray-500 rtl:text-right">
                  <thead className="hidden border-b text-base text-gray-700 md:table-header-group">
                    <tr>
                      <th scope="col" className="px-16 py-4">
                        تصویر
                      </th>
                      <th scope="col" className="py-4 md:pr-6">
                        نام محصول
                      </th>
                      <th scope="col" className="py-4 text-center">
                        تعداد
                      </th>
                      <th scope="col" className="px-6 py-4">
                        قیمت
                      </th>
                      <th scope="col" className="px-6 py-4 text-center">
                        حذف
                      </th>
                    </tr>
                  </thead>
                  <tbody className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:contents">
                    {products.map(product => {
                      const qty =
                        cart.find(item => item.id === product.id)?.qty || 1
                      const img =
                        product.product_image?.url ||
                        product.product_image?.formats?.small?.url

                      return (
                        <tr
                          key={product.id}
                          className="grid grid-cols-1 justify-items-center border-b bg-white hover:bg-stone-50 md:table-row"
                        >
                          <td className="p-4">
                            {img ? (
                              <img
                                src={imageUrl(img)}
                                className="max-h-full w-40 max-w-full rounded-xl object-contain md:w-28"
                                alt={product.product_title}
                              />
                            ) : (
                              <span className="block size-20 text-stone-300" />
                            )}
                          </td>
                          <td className="py-4 text-sm text-neutral-900 opacity-90 md:pr-6">
                            <Link
                              href={`${Routes.product}/${product.product_slug}`}
                              className="font-medium hover:text-amber-700"
                            >
                              {product.product_title}
                            </Link>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-center">
                              <button
                                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 bg-white text-sm text-gray-500 hover:bg-gray-100"
                                type="button"
                                onClick={() => increaseCart(product.id)}
                              >
                                +
                              </button>
                              <span className="mx-3 min-w-8 text-center text-lg font-semibold text-neutral-800">
                                {qty}
                              </span>
                              <button
                                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 bg-white text-sm text-gray-500 hover:bg-gray-100"
                                type="button"
                                onClick={() => decreaseCart(product.id)}
                              >
                                −
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold text-neutral-900">
                            {Number(product.product_price * qty).toLocaleString(
                              'fa-IR'
                            )}{' '}
                            تومان
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => removeCart(product.id)}
                              className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-rose-600 hover:bg-rose-50"
                              aria-label="حذف از سبد"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              <div className="sticky top-24 mt-6 h-fit rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between text-neutral-700">
                  <p>مجموع کالاها</p>
                  <p>{totalPrice.toLocaleString('fa-IR')} تومان</p>
                </div>
                <div className="flex justify-between text-neutral-700">
                  <p>هزینه ارسال</p>
                  <p className="text-emerald-600">رایگان</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">مبلغ قابل پرداخت</p>
                  <p className="text-lg font-bold text-neutral-900">
                    {totalPrice.toLocaleString('fa-IR')} تومان
                  </p>
                </div>
                <Link href={Routes.checkout}>
                  <button className="mt-6 w-full rounded-xl bg-neutral-900 py-3 font-semibold text-white transition hover:bg-neutral-800">
                    ادامه تسویه حساب
                  </button>
                </Link>
                <Link
                  href={Routes.store}
                  className="mt-3 block text-center text-sm text-neutral-500 hover:text-neutral-800"
                >
                  بازگشت به فروشگاه
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-5 py-16">
            <span className="block size-28 text-stone-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-full"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M8 16h7.263c4.488 0 5.17-2.82 5.998-6.93c.239-1.187.358-1.78.071-2.175s-.837-.395-1.938-.395H19m-13 0h2M10.5 3l3 3m0 0l3 3m-3-3l-3 3m3-3l3-3M8 16L5.379 3.515A2 2 0 0 0 3.439 2H2.5m6.38 14h-.411C7.105 16 6 17.151 6 18.571a.42.42 0 0 0 .411.429H17.5" />
                  <circle cx="10.5" cy="20.5" r="1.5" />
                  <circle cx="17.5" cy="20.5" r="1.5" />
                </g>
              </svg>
            </span>
            <h1 className="text-2xl font-semibold text-stone-500">
              سبد خرید شما خالی است
            </h1>
            <Link
              href={Routes.store}
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              رفتن به فروشگاه
            </Link>
          </div>
        )}
      </section>
    </main>
  )
}
