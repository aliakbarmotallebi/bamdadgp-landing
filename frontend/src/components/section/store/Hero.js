export default function Hero() {
  return (
    <div className="antialiased mx-auto grid max-w-screen-xl px-4 md:grid-cols-12 lg:gap-12 xl:gap-0">
      <div className="content-center justify-self-start md:col-span-7 md:text-start">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:max-w-2xl md:text-5xl xl:text-6xl">
          محصولات ما
          <div>فروشگاه بامداد - بامداد سرویس</div>
        </h1>
        <p className="mb-4 max-w-2xl text-gray-500 md:mb-12 md:text-lg lg:mb-5 lg:text-xl">
          خرید هوشمندانه برای خانه‌ای بهتر، از محصولات تا پشتیبانی
        </p>
      </div>
      <div className="hidden md:col-span-5 md:mt-0 md:flex">
        <img
          className=""
          src="/assets/images/commerce.png"
          alt="shopping illustration"
        />
      </div>
    </div>
  )
}
