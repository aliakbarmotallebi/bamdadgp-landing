export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-14 md:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_100%_0%,rgba(253,186,116,0.18),transparent_55%)]" />
      <div className="relative mx-auto max-w-screen-xl text-center">
        <p className="text-sm font-medium text-amber-700">کوشا الکتریک بامداد</p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight text-neutral-900 md:text-5xl">
          مراکز خدمات
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-neutral-500 md:text-base">
          برای راحتی و سرعت بیشتر در دریافت خدمات، می‌توانید به مراکز حضوری بامداد
          سرویس در تهران و سایر شهرها مراجعه کنید.
        </p>
      </div>
    </section>
  )
}
