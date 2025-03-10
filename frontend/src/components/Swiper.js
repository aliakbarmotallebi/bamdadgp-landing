'use client'
import React from 'react'
export default function Swiper({ title, data }) {
  const [w, setW] = React.useState(0)
  const [swip, setSwip] = React.useState(1)
  const [left, setLeft] = React.useState(0)
  const wrapper = React.useRef(null)
  const articles = React.useRef(null)

  React.useEffect(() => {
    setW(wrapper.current.clientWidth / 4)
  }, [])

  const handleNextSwip = () => {
    const swipPage = Math.ceil(
      articles?.current.scrollWidth / wrapper?.current.clientWidth
    )
    if (swipPage > swip) {
      setLeft(wrapper?.current.clientWidth * swip)
      setSwip(swip + 1)
    }
  }
  const handlePrevSwip = () => {
    const swipPage = Math.ceil(
      articles?.current.scrollWidth / wrapper?.current.clientWidth
    )
    if (swip > 1) {
      setLeft(
        wrapper?.current.clientWidth * (swip - 1) - wrapper?.current.clientWidth
      )
      setSwip(swip - 1)
    }
  }

  return (
    <section className="my-4 w-full">
      <header className="flex justify-between border-t border-gray-200 py-6">
        <div className="font-semibold text-xl text-orange-900">{title}</div>
        <div className="flex gap-1">
          <button
            onClick={handlePrevSwip}
            className="swiper-button-prev-products text-black border bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 font-medium rounded-full text-sm w-8 h-8 justify-center text-center inline-flex items-center me-2"
            tabIndex="0"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-9c3a37910e1a8554c"
          >
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 11L6.5 6L1.5 1"
                stroke="#111827"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <button
            onClick={handleNextSwip}
            className="swiper-button-next-products text-black border bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 font-medium rounded-full text-sm w-8 h-8 justify-center text-center inline-flex items-center me-2 rotate-180"
            tabIndex="0"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-9c3a37910e1a8554c"
          >
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 11L6.5 6L1.5 1"
                stroke="#111827"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </header>
      <div ref={wrapper} className="w-full flex overflow-hidden">
        {w && w > 0 ? (
          <div
            ref={articles}
            style={{ left: left + 'px' }}
            className="flex relative items-center transition-[left] duration-500 ease-in"
          >
            {data &&
              data.map((item, index) => (
                <article
                  key={index}
                  style={{ width: w && w > 0 ? w + 'px' : '50%' }}
                  className="relative p-3 h-[400px]"
                >
                  <div className="h-full hover:bg-orange-100 p-3 hover:shadow-md transition-all delay-200 bg-white flex flex-col justify-around gap-3 border border-gray-200 rounded-lg">
                    <div className="w-full relative">
                      <figure className="w-full h-44 overflow-hidden bg-blue-400">
                        <img
                          className="min-h-full"
                          src={
                            process.env.NEXT_PUBLIC_BASE_URL +
                            item.product_image?.url
                          }
                          alt="./assets/images/product4.png"
                        />
                      </figure>
                    </div>
                    <div className="text-sm font-medium text-gray-500 text-justify">
                      <h3>{item.product_title}</h3>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-right pt-4 w-full">
                        {item.product_price} تومان
                      </h3>
                    </div>
                    <a
                      href="./single-product.html"
                      className="mt-8 block w-full bg-neutral-800 rounded-md py-2 text-sm font-semibold text-white text-center border-b-4 border-neutral-900 hover:opacity-40"
                    >
                      خرید محصول
                    </a>
                  </div>
                </article>
              ))}
          </div>
        ) : (
          <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <div className="flex items-end gap-8">
              <svg
                className="w-12 h-12 text-gray-200 animate-spin"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-yellow-500"
                ></path>
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
