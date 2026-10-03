'use client'
import { Routes } from '@/route/routes'
import useCartStore from '@/stores/cart'
import { imageUrl } from '@/utils/imageUrl'
import Link from 'next/link'
import { toast } from 'react-toastify'

export default function ProductItem({ productItem }) {
  const { addCart } = useCartStore()
  const thumb =
    productItem?.product_image?.formats?.small?.url ||
    productItem?.product_image?.url

  const handleAddCart = id => {
    addCart({ id, qty: 1 })
    toast.success('با موفقیت به سبد خرید افزوده شد')
  }

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-amber-300/60 hover:shadow-[0_16px_40px_rgba(253,168,40,0.12)]">
      <Link
        href={`${Routes.product}/${productItem.product_slug}`}
        className="relative mb-4 block overflow-hidden rounded-xl bg-stone-50"
      >
        <figure className="flex h-48 items-center justify-center">
          {thumb ? (
            <img
              className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-105"
              src={imageUrl(thumb)}
              alt={productItem.product_title}
            />
          ) : (
            <span className="block size-20 text-stone-300">
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
      </Link>

      <div className="mb-3">
        <span className="inline-block rounded-md bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800">
          {productItem.product_category?.cat_title}
        </span>
      </div>

      <Link
        href={`${Routes.product}/${productItem.product_slug}`}
        className="mb-4 grow"
      >
        <h3 className="line-clamp-2 text-sm font-semibold leading-7 text-neutral-800 transition group-hover:text-neutral-950">
          {productItem.product_title}
        </h3>
      </Link>

      <div className="mb-4 flex items-baseline justify-between gap-2 border-t border-neutral-100 pt-3">
        <span className="text-xs text-neutral-400">قیمت</span>
        <h4 className="text-base font-bold text-neutral-900">
          {Number(productItem.product_price)?.toLocaleString('fa-IR')}
          <span className="mr-1 text-xs font-medium text-neutral-500">
            تومان
          </span>
        </h4>
      </div>

      <div className="mt-auto flex items-center gap-2">
        <Link
          href={`${Routes.product}/${productItem.product_slug}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-900 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          مشاهده
        </Link>
        <button
          onClick={() => handleAddCart(productItem.id)}
          aria-label="افزودن به سبد خرید"
          className="flex size-11 items-center justify-center rounded-xl bg-amber-400 text-neutral-900 transition hover:bg-amber-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
            >
              <path d="M8 16h7.263c4.488 0 5.17-2.82 5.998-6.93c.239-1.187.358-1.78.071-2.175c-.229-.315-.624-.379-1.332-.392M9 6.5h8m-4 4v-8M8 16L5.379 3.515A2 2 0 0 0 3.439 2H2.5m6.38 14h-.411C7.105 16 6 17.151 6 18.571a.42.42 0 0 0 .411.429H17.5" />
              <circle cx="10.5" cy="20.5" r="1.5" />
              <circle cx="17.5" cy="20.5" r="1.5" />
            </g>
          </svg>
        </button>
      </div>
    </article>
  )
}
