'use client'
import useCartStore from '@/stores/cart'
import { imageUrl } from '@/utils/imageUrl'
import { toast } from 'react-toastify'

export default function Details({ data }) {
  const {
    id,
    product_title,
    product_price,
    product_stock,
    product_category,
    product_image,
  } = data
  const { addCart } = useCartStore()
  const img = product_image?.url || product_image?.formats?.medium?.url

  const handleAddCart = productId => {
    addCart({ id: productId, qty: 1 })
    toast.success('با موفقیت به سبد خرید افزوده شد')
  }

  return (
    <article className="rounded-3xl border border-neutral-200/80 bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] md:p-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <section>
          <div className="flex items-center justify-center rounded-2xl border border-neutral-100 bg-stone-50 p-6 md:min-h-[420px]">
            {img ? (
              <img
                src={imageUrl(img)}
                alt={product_title}
                className="max-h-[380px] w-full object-contain"
              />
            ) : (
              <span className="block size-24 text-stone-300">
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
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <div>
            <span className="inline-block rounded-md bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800">
              {product_category?.cat_title}
            </span>
            <h1 className="mt-3 text-2xl font-bold leading-10 text-neutral-900 md:text-3xl">
              {product_title}
            </h1>
          </div>

          <div className="rounded-2xl border border-neutral-100 bg-stone-50/80 px-4 py-3 text-sm leading-7 text-neutral-600">
            ارسال رایگان برای خرید بالای ۵۰۰ هزار تومان · گارانتی معتبر بامداد
            سرویس · پشتیبانی تخصصی
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4 border-y border-neutral-100 py-5">
            <div>
              <p className="mb-1 text-sm text-neutral-500">قیمت محصول</p>
              <div className="flex items-baseline gap-1 text-2xl font-bold text-orange-600">
                <span>{Number(product_price).toLocaleString('fa-IR')}</span>
                <span className="text-sm font-medium text-neutral-500">
                  تومان
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-500">
              موجودی:
              <span className="mr-1 font-semibold text-emerald-700">
                {product_stock > 0 ? `${product_stock} عدد` : 'ناموجود'}
              </span>
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleAddCart(id)}
            disabled={!product_stock}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-40 md:w-auto md:px-8"
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
            افزودن به سبد خرید
          </button>
        </section>
      </div>
    </article>
  )
}
