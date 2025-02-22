import Pagination from "@/components/Pagination";

export default function Store() {
    return(
        <>
        <div
        className="antialiased mx-auto grid max-w-screen-xl px-4 md:grid-cols-12 lg:gap-12 xl:gap-0"
      >
        <div
          className="content-center justify-self-start md:col-span-7 md:text-start"
        >
          <h1
            className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:max-w-2xl md:text-5xl xl:text-6xl"
          >
            محصولات ما
            <div>بامداد سرویس - بامداد گالری</div>
          </h1>
          <p
            className="mb-4 max-w-2xl text-gray-500 md:mb-12 md:text-lg lg:mb-5 lg:text-xl"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
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
      <section
        className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"
      >
        <div className="bg-white rounded-2xl">
          <div
            className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 px-1 rounded-2xl py-5"
          >
            <article
              className="hover:bg-orange-100 transition-all delay-200 relative bg-white rounded-lg flex flex-col px-6 py-5 justify-around gap-3 border border-gray-200"
            >
              <div
                className="w-full h-52 flex items-center justify-center relative"
              >
                <img
                  className="w-2/3 h-2/3"
                  src="/assets/images/product4.png"
                  alt="./assets/images/product4.png"
                  
                />
              </div>
              <div className="text-sm font-medium text-gray-500 text-justify">
                <h3>
                  موبایل اپل مدل iPhone 14 ظرفیت 128 گیگابایت و رم 4 گیگابایت...
                </h3>
              </div>
              <div>
                <h3 className="text-base font-semibold text-right pt-4 w-full">
                  69,200,000 تومان
                </h3>
              </div>
              <a
                href="./single-product.html"
                className="mt-8 block w-full bg-neutral-800 rounded-md py-2 text-sm font-semibold text-white text-center border-b-4 border-neutral-900 hover:opacity-40"
              >
                جهت خرید تماس بگیرید
              </a>
            </article>
            <article
              className="hover:bg-orange-100 transition-all delay-200 relative bg-white rounded-lg flex flex-col px-6 py-5 justify-around gap-3 border border-gray-200"
            >
              <div
                className="w-full h-52 flex items-center justify-center relative"
              >
                <img
                  className="w-2/3 h-2/3"
                  src="/assets/images/product4.png"
                  alt="./assets/images/product4.png"
                  
                />
              </div>
              <div className="text-sm font-medium text-gray-500 text-justify">
                <h3>گوشی موبایل آنر مدل دو سیمکارته ظرفیت 64 گیگابایت</h3>
              </div>
              <div>
                <h3 className="text-base font-semibold text-right pt-4 w-full">
                  47,000,000 تومان
                </h3>
              </div>
              <a
                href="./single-product.html"
                className="mt-8 block w-full bg-neutral-800 rounded-md py-2 text-sm font-semibold text-white text-center border-b-4 border-neutral-900 hover:opacity-40"
              >
                جهت خرید تماس بگیرید
              </a>
            </article>
            <article
              className="hover:bg-orange-100 transition-all delay-200 relative bg-white rounded-lg flex flex-col px-6 py-5 justify-around gap-3 border border-gray-200"
            >
              <div
                className="w-full h-52 flex items-center justify-center relative"
              >
                <img
                  className="w-2/3 h-2/3"
                  src="/assets/images/product4.png"
                  alt="./assets/images/product4.png"
                  
                />
              </div>
              <div className="text-sm font-medium text-gray-500 text-justify">
                <h3>ساعت هوشمند</h3>
              </div>
              <div>
                <h3 className="text-base font-semibold text-right pt-4 w-full">
                  17,800,000 تومان
                </h3>
              </div>
              <a
                href="./single-product.html"
                className="mt-8 block w-full bg-neutral-800 rounded-md py-2 text-sm font-semibold text-white text-center border-b-4 border-neutral-900 hover:opacity-40"
              >
                جهت خرید تماس بگیرید
              </a>
            </article>
            <article
              className="hover:bg-orange-100 transition-all delay-200 relative bg-white rounded-lg flex flex-col px-6 py-5 justify-around gap-3 border border-gray-200"
            >
              <div
                className="w-full h-52 flex items-center justify-center relative"
              >
                <img
                  className="w-2/3 h-2/3"
                  src="/assets/images/product4.png"
                  alt="./assets/images/product4.png"
                  
                />
              </div>
              <div className="text-sm font-medium text-gray-500 text-justify">
                <h3>تلویزیون 42 اینچی</h3>
              </div>
              <div>
                <h3 className="text-base font-semibold text-right pt-4 w-full">
                  81,000,000 تومان
                </h3>
              </div>
              <a
                href="./single-product.html"
                className="mt-8 block w-full bg-neutral-800 rounded-md py-2 text-sm font-semibold text-white text-center border-b-4 border-neutral-900 hover:opacity-40"
              >
                جهت خرید تماس بگیرید
              </a>
            </article>
            <article
              className="hover:bg-orange-100 transition-all delay-200 relative bg-white rounded-lg flex flex-col px-6 py-5 justify-around gap-3 border border-gray-200"
            >
              <div
                className="w-full h-52 flex items-center justify-center relative"
              >
                <img
                  className="w-2/3 h-2/3"
                  src="/assets/images/product4.png"
                  alt="./assets/images/product4.png"
                  
                />
              </div>
              <div className="text-sm font-medium text-gray-500 text-justify">
                <h3>هندزفری بلوتوثی</h3>
              </div>
              <div>
                <h3 className="text-base font-semibold text-right pt-4 w-full">
                  7,900,000 تومان
                </h3>
              </div>
              <a
                href="./single-product.html"
                className="mt-8 block w-full bg-neutral-800 rounded-md py-2 text-sm font-semibold text-white text-center border-b-4 border-neutral-900 hover:opacity-40"
              >
                جهت خرید تماس بگیرید
              </a>
            </article>
            <article
              className="hover:bg-orange-100 transition-all delay-200 relative bg-white rounded-lg flex flex-col px-6 py-5 justify-around gap-3 border border-gray-200"
            >
              <div
                className="w-full h-52 flex items-center justify-center relative"
              >
                <img
                  className="w-2/3 h-2/3"
                  src="/assets/images/product4.png"
                  alt="./assets/images/product4.png"
                  
                />
              </div>
              <div className="text-sm font-medium text-gray-500 text-justify">
                <h3>تلفن همراه ظرفیت 128 گیگابایت</h3>
              </div>
              <div>
                <h3 className="text-base font-semibold text-right pt-4 w-full">
                  43,000,000 تومان
                </h3>
              </div>
              <a
                href="./single-product.html"
                className="mt-8 block w-full bg-neutral-800 rounded-md py-2 text-sm font-semibold text-white text-center border-b-4 border-neutral-900 hover:opacity-40"
              >
                جهت خرید تماس بگیرید
              </a>
            </article>
            <article
              className="hover:bg-orange-100 transition-all delay-200 relative bg-white rounded-lg flex flex-col px-6 py-5 justify-around gap-3 border border-gray-200"
            >
              <div
                className="w-full h-52 flex items-center justify-center relative"
              >
                <img
                  className="w-2/3 h-2/3"
                  src="/assets/images/product4.png"
                  alt="./assets/images/product4.png"
                  
                />
              </div>
              <div className="text-sm font-medium text-gray-500 text-justify">
                <h3>هندزفری بلوتوثی مدل AirPods pro</h3>
              </div>
              <div>
                <h3 className="text-base font-semibold text-right pt-4 w-full">
                  69,200,000 تومان
                </h3>
              </div>
              <a
                href="./single-product.html"
                className="mt-8 block w-full bg-neutral-800 rounded-md py-2 text-sm font-semibold text-white text-center border-b-4 border-neutral-900 hover:opacity-40"
              >
                جهت خرید تماس بگیرید
              </a>
            </article>
            <article
              className="hover:bg-orange-100 transition-all delay-200 relative bg-white rounded-lg flex flex-col px-6 py-5 justify-around gap-3 border border-gray-200"
            >
              <div
                className="w-full h-52 flex items-center justify-center relative"
              >
                <img
                  className="w-2/3 h-2/3"
                  src="/assets/images/product4.png"
                  alt="./assets/images/product4.png"
                  
                />
              </div>
              <div className="text-sm font-medium text-gray-500 text-justify">
                <h3>ساعت عقربه ای مدل مردانه چرمی</h3>
              </div>
              <div>
                <h3 className="text-base font-semibold text-right pt-4 w-full">
                  21,000,000 تومان
                </h3>
              </div>
              <a
                href="./single-product.html"
                className="mt-8 block w-full bg-neutral-800 rounded-md py-2 text-sm font-semibold text-white text-center border-b-4 border-neutral-900 hover:opacity-40"
              >
                جهت خرید تماس بگیرید
              </a>
            </article>
            <article
              className="hover:bg-orange-100 transition-all delay-200 relative bg-white rounded-lg flex flex-col px-6 py-5 justify-around gap-3 border border-gray-200"
            >
              <div
                className="w-full h-52 flex items-center justify-center relative"
              >
                <img
                  className="w-2/3 h-2/3"
                  src="/assets/images/product4.png"
                  alt="./assets/images/product4.png"
                  
                />
              </div>
              <div className="text-sm font-medium text-gray-500 text-justify">
                <h3>لب تاپ مدل asus</h3>
              </div>
              <div>
                <h3 className="text-base font-semibold text-right pt-4 w-full">
                  51,000,000 تومان
                </h3>
              </div>
              <a
                href="./single-product.html"
                className="mt-8 block w-full bg-neutral-800 rounded-md py-2 text-sm font-semibold text-white text-center border-b-4 border-neutral-900 hover:opacity-40"
              >
                جهت خرید تماس بگیرید
              </a>
            </article>
          </div>
        </div>
        <Pagination />
      </section>
        </>
    )
}