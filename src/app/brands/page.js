import { Routes } from '@/route/routes'
import Link from 'next/link'

export const metadata = {
  title: 'برندها | کوشا الکتریک بامداد',
  description: 'برندهای همکار کوشا الکتریک بامداد و فروشگاه بامداد.',
}

const brands = [
  { src: '/assets/images/brands/brand00001.png', alt: 'برند ۱' },
  { src: '/assets/images/brands/brand00002.png', alt: 'برند ۲' },
  { src: '/assets/images/brands/brand00003.png', alt: 'برند ۳' },
  { src: '/assets/images/brands/brand00004.png', alt: 'برند ۴' },
  { src: '/assets/images/brands/brand00005.png', alt: 'برند ۵' },
  { src: '/assets/images/brands/brand00006.png', alt: 'برند ۶' },
  { src: '/assets/images/brands/brand00007.png', alt: 'برند ۷' },
  { src: '/assets/images/brands/brand00008.jpg', alt: 'برند ۸' },
  { src: '/assets/images/brands/brand00009.png', alt: 'برند ۹' },
  { src: '/assets/images/brands/brand00010.png', alt: 'برند ۱۰' },
  { src: '/assets/images/brands/brand00011.png', alt: 'برند ۱۱' },
  { src: '/assets/images/brands/brand00012.jpg', alt: 'برند ۱۲' },
  { src: '/assets/images/brands/brand00013.jpg', alt: 'برند ۱۳' },
  { src: '/assets/images/brands/brand00014.png', alt: 'برند ۱۴' },
  { src: '/assets/images/brands/brand00015.png', alt: 'برند ۱۵' },
  { src: '/assets/images/brands/brand00016.png', alt: 'برند ۱۶' },
  { src: '/assets/images/brands/brand00017.png', alt: 'برند ۱۷' },
  { src: '/assets/images/brands/brand00018.jpg', alt: 'برند ۱۸' },
  { src: '/assets/images/brands/brand00019.png', alt: 'برند ۱۹' },
  { src: '/assets/images/brands/brand00020.jpg', alt: 'برند ۲۰' },
  { src: '/assets/images/brands/brand00021.jpg', alt: 'برند ۲۱' },
]

export default function Brands() {
  return (
    <div className="relative overflow-hidden pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_100%_0%,rgba(253,186,116,0.16),transparent_55%)]" />

      <section className="relative mx-auto max-w-screen-xl px-4 pb-10 pt-12 lg:px-0 lg:pt-16">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <h1 className="text-3xl font-extrabold leading-tight text-neutral-900 md:text-5xl">
              برندهای ما
            </h1>
            <p className="mt-4 max-w-xl text-base leading-8 text-neutral-500 md:text-lg">
              مجموعه‌ای از برندهای معتبر که از طریق فروشگاه بامداد و خدمات
              بامداد سرویس در کنار شما هستیم.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={Routes.store}
                className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                مشاهده فروشگاه
              </Link>
              <Link
                href={Routes.contact}
                className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:border-neutral-500"
              >
                همکاری با ما
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:col-span-5 md:justify-end">
            <img
              src="/assets/images/brands-hero.png?v=2"
              alt="برندهای کوشا الکتریک بامداد"
              className="h-auto max-h-80 w-full max-w-md object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.08)]"
            />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-screen-xl px-4 lg:px-0">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              برندهای همکار
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              {brands.length.toLocaleString('fa-IR')} برند منتخب
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4">
          {brands.map(brand => (
            <article
              key={brand.src}
              className="group flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-[0_6px_20px_rgba(0,0,0,0.03)] transition duration-300 hover:-translate-y-1 hover:border-amber-300/60 hover:shadow-[0_14px_30px_rgba(180,120,40,0.1)]"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
