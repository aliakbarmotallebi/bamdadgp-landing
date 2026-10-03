export default function Hero({ aboutTitle, aboutSlug }) {
  return (
    <section className="relative overflow-hidden pb-10 pt-16 antialiased md:pb-14 md:pt-20">
      <div className="pointer-events-none absolute -top-10 left-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(253,168,40,0.14)_0%,transparent_70%)] blur-2xl" />

      <div className="mx-auto grid max-w-screen-xl items-center gap-10 px-4 md:grid-cols-12 lg:gap-12">
        <div className="content-center justify-self-start md:col-span-6 lg:col-span-7">
          <p className="mb-3 text-sm font-medium text-amber-700">درباره ما</p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 md:max-w-2xl md:text-5xl">
            {aboutTitle}
          </h1>
          <p className="mb-4 max-w-2xl text-base leading-8 text-neutral-500 md:text-lg">
            {aboutSlug}
          </p>
        </div>

        <div className="flex justify-center md:col-span-6 md:justify-end lg:col-span-5">
          <img
            src="/assets/images/about-hero.png?v=2"
            alt="درباره گروه تجاری بامداد"
            className="h-auto max-h-80 w-full max-w-md object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.08)]"
          />
        </div>
      </div>
    </section>
  )
}
