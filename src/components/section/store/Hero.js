import Link from 'next/link'
import { Routes } from '@/route/routes'

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-screen-xl overflow-hidden px-4 pb-6 pt-10 lg:px-0">
      <div className="relative grid items-center gap-8 rounded-3xl border border-orange-900/10 bg-gradient-to-l from-amber-50 via-white to-orange-50/60 px-6 py-10 md:grid-cols-12 md:px-10 md:py-14">
        <div className="md:col-span-7">
          <p className="mb-3 text-sm font-medium text-amber-700">
            فروشگاه رسمی گروه تجاری بامداد
          </p>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 md:text-5xl">
            خرید مطمئن لوازم خانگی
            <span className="mt-2 block text-2xl font-bold text-neutral-700 md:text-3xl">
              با گارانتی و خدمات پس از فروش
            </span>
          </h1>
          <p className="mb-8 max-w-xl text-base leading-8 text-neutral-600 md:text-lg">
            از انتخاب تا پشتیبانی، کنار شما هستیم. محصولات منتخب با کیفیت بالا و
            ارسال مطمئن در سراسر کشور.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#store-products"
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              مشاهده محصولات
            </a>
            <Link
              href={Routes.contact}
              className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 transition hover:border-neutral-500"
            >
              مشاوره خرید
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:col-span-5 md:justify-end">
          <img
            src="/assets/images/store-hero.png?v=2"
            alt="فروشگاه بامداد"
            className="h-auto max-h-80 w-full max-w-md object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.08)]"
          />
        </div>
      </div>
      <div id="store-products" className="sr-only" />
    </section>
  )
}
