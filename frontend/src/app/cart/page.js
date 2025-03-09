'use client'
import { Routes } from '@/route/routes'
import useCartStore from '@/stores/cart'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
const PUBLIC_LOCAL_API_URL = process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL
const PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default function Cart() {
  const { cart, increaseCart, decreaseCart, totalPrice, setTotalPrice } =
    useCartStore()
  const [products, setProducts] = React.useState([])

  const getCartList = async () => {
    try {
      if (cart.length > 0) {
        let Ids = cart.map(item => item.id)

        const response = await axios.post(`/api/cart`, {
          Ids,
        })
        setProducts(response.data)
      }
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  const handleIncrease = id => {
    increaseCart(id)
  }

  const handleDecrease = id => {
    decreaseCart(id)
  }

  React.useEffect(() => {
    getCartList()
  }, [cart])

  React.useEffect(() => {
    handleTotalPrice()
  }, [products])

  const handleTotalPrice = () => {
    setTotalPrice(
      products.reduce((acc, product) => {
        const cartItem = cart.find(item => item.id === product.id)
        if (cartItem) {
          return acc + cartItem.qty * product.product_price
        }
        return acc
      }, 0)
    )
  }

  return (
    <>
      <main>
        <section className="container mx-auto mt-12 2xl:mt-16 mb-36 2xl:mb-52">
          {products.length > 0 ? (
            <>
              <h1 className="mb-10 text-center text-2xl font-bold text-green-900">
                سبد خرید شما
              </h1>
              <div className="mx-auto justify-center px-6 md:flex md:space-x-6 md:space-x-reverse xl:px-0">
                <div className="shadow border border-gray-50 border-b-0 rounded-lg overflow-hidden w-full bg-white">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="hidden md:table-header-group text-xs text-gray-700 border-b">
                      <tr>
                        <th scope="col" className="px-16 py-3">
                          تصویر
                        </th>
                        <th scope="col" className="md:pr-6 py-3">
                          نام محصول
                        </th>
                        <th scope="col" className="py-3 text-center">
                          تعداد
                        </th>
                        <th scope="col" className="px-6 py-3">
                          قیمت
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                          دستورات
                        </th>
                      </tr>
                    </thead>
                    <tbody className="grid grid-cols-1 sm:grid-cols-2 md:contents gap-5">
                      {products && products.length > 0 ? (
                        products.map((product, index) => (
                          <tr
                            key={index}
                            className="bg-white border-b hover:bg-gray-50 grid grid-cols-1 justify-items-center md:table-row"
                          >
                            <td className="p-4">
                              <img
                                src={
                                  PUBLIC_BASE_URL + product.product_image.url
                                }
                                className="w-48 md:w-32 max-w-full max-h-full rounded-lg"
                                alt=""
                              />
                            </td>
                            <td className="md:pr-6 py-4 text-sm opacity-90 text-gray-900">
                              {product.product_title}
                            </td>
                            <td className="px-6 py-4">
                              <div className="quantity flex items-center justify-center">
                                <button
                                  className="quantity-nav quantity-button quantity-up inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                                  type="button"
                                  onClick={() => handleIncrease(product.id)}
                                >
                                  <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 18"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M9 1v16M1 9h16"
                                    ></path>
                                  </svg>
                                </button>
                                <input
                                  type="text"
                                  value={
                                    cart.find(item => item.id === product.id)
                                      ?.qty || ''
                                  }
                                  onChange={() => ''}
                                  className="w-12 h-8 mx-2 text-lg text-center border focus:outline-none rounded-lg"
                                />
                                <button
                                  className="quantity-nav quantity-button quantity-down inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                                  type="button"
                                  onClick={() => handleDecrease(product.id)}
                                >
                                  <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 2"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M1 1h16"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm opacity-90 text-gray-900">
                              {Number(product.product_price)?.toLocaleString(
                                'fa-IR'
                              )}{' '}
                              تومان
                            </td>
                            <td className="px-6 py-4">
                              <button className="flex items-center justify-center p-2 text-xs mx-auto font-medium text-rose-700 bg-white w-9 h-9 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-green-700">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-4 h-4"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
                                </svg>
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <></>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 h-full rounded-lg border border-gray-50 bg-white p-6 shadow md:mt-0 md:w-1/3 sticky top-8">
                  <div className="mb-2 flex justify-between">
                    <p className="text-gray-700">مجموع پرداخت</p>
                    <p className="text-gray-700">
                      {totalPrice.toLocaleString()} تومان
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-700">کرایه</p>
                    <p className="text-gray-700">0 تومان</p>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between">
                    <p className="text-lg font-bold">مجموع</p>
                    <div className="">
                      <p className="mb-1 text-lg font-bold text-left">
                        {totalPrice.toLocaleString()} تومان
                      </p>
                      <p className="text-sm text-gray-700">
                        از جمله مالیات بر ارزش افزوده
                      </p>
                    </div>
                  </div>
                  <Link href={Routes.checkout}>
                    <button className="mt-6 w-full rounded-md bg-green-700 py-1.5 font-medium text-blue-50 hover:opacity-40">
                      تسویه حساب
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-4 flex-col">
              <span className="text-stone-400 block size-32">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" fill="none" />
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    color="currentColor"
                  >
                    <path d="M8 16h7.263c4.488 0 5.17-2.82 5.998-6.93c.239-1.187.358-1.78.071-2.175s-.837-.395-1.938-.395H19m-13 0h2M10.5 3l3 3m0 0l3 3m-3-3l-3 3m3-3l3-3M8 16L5.379 3.515A2 2 0 0 0 3.439 2H2.5m6.38 14h-.411C7.105 16 6 17.151 6 18.571a.42.42 0 0 0 .411.429H17.5" />
                    <circle cx="10.5" cy="20.5" r="1.5" />
                    <circle cx="17.5" cy="20.5" r="1.5" />
                  </g>
                </svg>
              </span>
              <h1 className="text-3xl font-semibold text-stone-400">
                سبد خرید شما خالی است
              </h1>
            </div>
          )}
        </section>
      </main>
    </>
  )
}
