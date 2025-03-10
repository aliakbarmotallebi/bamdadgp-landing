'use client'
import { Routes } from '@/route/routes'
import useCartStore from '@/stores/cart'
import Link from 'next/link'
import { toast } from 'react-toastify'
const PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
export default function ProductItem({ productItem }) {
  const { addCart } = useCartStore()

  const handleAddCart = id => {
    addCart({ id, qty: 1 })
    toast.success('با موفقیت به سبد خرید افزوده شد')
  }
  return (
    <article className="group transition-all delay-200 relative bg-white rounded-lg flex flex-col px-6 py-5 justify-around gap-3 border border-gray-200 hover:scale-105 hover:z-20 shadow-sm">
      <div className="w-full flex items-center justify-center relative">
        <figure className="w-full h-44 overflow-hidden rounded-md relative flex justify-center items-center bg-stone-100">
          {productItem?.product_image?.formats?.small ? (
            <img
              className="min-h-full object-cover rounded-md"
              src={
                PUBLIC_BASE_URL +
                productItem?.product_image?.formats?.small?.url
              }
              alt={productItem.product_title}
            />
          ) : (
            <span className="block size-24 text-stone-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-full"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.937 14.218V5.564a1.5 1.5 0 0 0-1.5-1.5H7.809a.5.5 0 0 1 0-1h10.628a2.5 2.5 0 0 1 2.5 2.5v10.624a.5.5 0 0 1-1 .001v-.556l-4.583-4.584c-.456-.456.251-1.163.707-.707zm-.121 6.304a2.5 2.5 0 0 1-1.379.415H5.563a2.5 2.5 0 0 1-2.5-2.5V5.564c0-.51.153-.984.414-1.38l-.263-.263c-.456-.456.251-1.163.707-.707l.263.263l16.339 16.338l.263.263c.455.456-.252 1.163-.707.707zM8.712 9.419L6.711 7.418a1.5 1.5 0 0 0 2.001 2.001M5.979 6.686l-1.77-1.77a1.5 1.5 0 0 0-.146.648v10.717l1.926-1.926a1.5 1.5 0 0 1 2.122 0l.555.554a.497.497 0 0 0 .706 0l2.415-2.415l-2.343-2.343a2.5 2.5 0 0 1-3.465-3.465M4.063 17.695v.741a1.5 1.5 0 0 0 1.5 1.5h12.874c.232 0 .451-.052.647-.145l-6.59-6.59l-2.414 2.415a1.5 1.5 0 0 1-2.122 0l-.554-.554a.5.5 0 0 0-.708 0z"
                />
              </svg>
            </span>
          )}
        </figure>
      </div>
      <div className="text-sm font-medium text-gray-500 text-justify">
        <a
          href={Routes.product + '/' + productItem.product_slug}
          className="font-medium"
        >
          <h3>{productItem.product_title}</h3>
        </a>
      </div>
      <div>
        <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm inline-block">
          {productItem.product_category.cat_title}
        </span>
      </div>
      <div>
        <h3 className="text-base font-semibold text-left pt-2 w-full">
          {Number(productItem.product_price)?.toLocaleString('fa-IR')} تومان
        </h3>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Link
          href={Routes.product + '/' + productItem.product_slug}
          className="mt-8 flex-1 bg-neutral-800 flex relative z-10 justify-center items-center gap-2 rounded-md py-2 text-sm font-semibold text-white text-center hover:opacity-90"
        >
          <span className="size-6 block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-full"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M3.182 12.808C4.233 14.613 7.195 18.81 12 18.81c4.813 0 7.77-4.199 8.82-6.002a1.6 1.6 0 0 0-.001-1.615C19.769 9.389 16.809 5.19 12 5.19s-7.768 4.197-8.818 6.001a1.6 1.6 0 0 0 0 1.617Z" />
                <path d="M12 14.625a2.625 2.625 0 1 0 0-5.25a2.625 2.625 0 0 0 0 5.25Z" />
              </g>
            </svg>
          </span>
          <span className="pt-1">مشاهده محصول</span>
        </Link>
        <button
          onClick={() => handleAddCart(productItem.id)}
          className="mt-8 p-2 bg-yellow-400 flex relative z-10 justify-center items-center gap-2 rounded-md text-sm font-semibold text-stone-800 text-center  hover:opacity-90"
        >
          <span className="size-6 block">
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
                strokeWidth="1.6"
                color="currentColor"
              >
                <path d="M8 16h7.263c4.488 0 5.17-2.82 5.998-6.93c.239-1.187.358-1.78.071-2.175c-.229-.315-.624-.379-1.332-.392M9 6.5h8m-4 4v-8M8 16L5.379 3.515A2 2 0 0 0 3.439 2H2.5m6.38 14h-.411C7.105 16 6 17.151 6 18.571a.42.42 0 0 0 .411.429H17.5" />
                <circle cx="10.5" cy="20.5" r="1.5" />
                <circle cx="17.5" cy="20.5" r="1.5" />
              </g>
            </svg>
          </span>
        </button>
      </div>
    </article>
  )
}
