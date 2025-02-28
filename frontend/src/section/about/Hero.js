export default function Hero({ aboutTitle, aboutSlug }) {
  return (
    <section className="pb-8 antialiased md:pb-16 pt-32">
      <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
        <div className="content-center justify-self-start md:col-span-7 md:text-start">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:max-w-2xl md:text-5xl xl:text-6xl">
            {aboutTitle}
          </h1>
          <p className="mb-4 max-w-2xl text-gray-500 md:mb-12 md:text-lg lg:mb-5 lg:text-xl">
            {aboutSlug}
          </p>
        </div>
        <div className="hidden md:col-span-5 md:mt-0 md:flex">
          <img src="/assets/images/about.svg" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
