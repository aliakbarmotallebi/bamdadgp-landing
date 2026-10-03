export default function Hero({ data }) {
  const phone = data?.contact_telephone || '۰۲۱-۶۶۴۲۹۵۳۵'
  const telHref = `tel:${phone.replace(/[^\d+]/g, '')}`

  return (
    <section className="relative mx-auto max-w-screen-xl px-4 pb-10 pt-12 lg:px-0 lg:pt-16">
      <div className="flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-extrabold text-neutral-900 md:text-5xl">
            تماس با ما
          </h1>
          <p className="mt-3 text-base leading-8 text-neutral-500 md:text-lg">
            {data?.contact_slug ||
              'آماده پاسخگویی به سوالات و درخواست‌های شما هستیم'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={telHref}
            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            تماس با پشتیبانی
          </a>
          <span className="text-lg font-bold text-neutral-800 md:text-xl">
            {phone}
          </span>
        </div>
      </div>
    </section>
  )
}
