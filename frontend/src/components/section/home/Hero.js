'use client'
import react, { useEffect, useRef, useState } from 'react'
import Modal from '@/components/Modal'

export default function Hero() {
  const [activeCard, setActiveCard] = useState(null)
  const containerRef = useRef(null)

  const [modal, setModal] = useState({
    service: false,
    gallery: false,
    lottary: false,
  })
  const toggleModal = key => {
    setModal(prev => ({ ...prev, [key]: !prev[key] }))
  }

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setActiveCard(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  const handleCardClick = id => {
    setActiveCard(prev => (prev === id ? null : id))
  }

  return (
    <>
      <section id="hero-section" className="lg:min-h-screen">
        <div className="group/hero relative w-full flex justify-center items-start">
          <div className="absolute top-1/4 w-[60%] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(255,255,0,0.2)_0%,rgba(255,255,0,0)_90%)] group-hover/hero:bg-[radial-gradient(circle,rgba(255,255,0,0.3)_0%,rgba(255,255,0,0)_90%)] transition-all duration-500 -translate-x-1/4 z-[-1] blur-xl"></div>
          <div className="max-w-screen-xl px-3 sm:px-8 lg:px-0 w-full bg-white/10 backdrop-blur-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 px-4 pt-16 pb-8 gap-8">
              <div className="flex flex-col items-start gap-8">
                <h2 className="text-2xl font-medium lg:font-semibold text-neutral-800">
                  خدماتی برای فردایی بهتر
                </h2>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-neutral-800">
                    گروه تجاری بامداد
                  </h1>
                </div>
                <p className="hidden lg:block w-full text-justify text-lg font-medium text-neutral-800">
                  در گروه تجاری بامداد با مجموعه‌ای از بهترین محصولات، کیفیت و
                  نوآوری را به خانه شما می‌آوریم. علاوه بر ارائه محصولات
                  باکیفیت، خدمات پس از فروش حرفه‌ای ما تضمین‌کننده آرامش شماست.
                  از خرید تا پشتیبانی، همراهتان هستیم تا تجربه‌ای مطمئن و
                  لذت‌بخش داشته باشید!
                </p>
              </div>

              <div className="flex gap-8 items-start mt-4 lg:mt-12 justify-center lg:justify-end">
                <a
                  href="#warranty-inquiry"
                  className="border border-gray-300 rounded-full py-3 px-4 hover:border-gray-800 transition-all duration-300"
                >
                  استعلام گارانتی
                </a>
                <a
                  href="#footer-aboutus"
                  className="border border-gray-300 rounded-full py-3 px-4 hover:border-gray-800 transition-all duration-300"
                >
                  درباره ما بخوانید
                </a>
              </div>
            </div>

            <div className="block mb-6 lg:mb-0 mt-6">
              <div
                ref={containerRef}
                className="relative h-96 md:h-72 lg:h-96 lg:h-auto lg:static flex flex-col md:flex-row py-10 ps-0 lg:ps-20 space-y-4 sm:space-y-0 space-y-reverse space-x-reverse sm:-space-x-1 xl:-space-x-20 lg:mx-8 sm:mx-0"
              >
                <div
                  onTouchStart={() => handleCardClick(1)}
                  className={`absolute md:relative h-56 top-[100px] flex justify-between w-[320px] sm:w-[420px] left-1/2 -translate-x-1/2 z-20 lg:z-20 md:scale-100 flex-shrink-0
                    hover:z-30 hover:scale-110 hover:rotate-0 transition-all duration-300 md:translate-x-0 md:top-0 md:-left-0 xl:-left-40 px-6 py-6 md:w-[310px] bg-white rounded-2xl xl:w-[380px]
                    shadow-xl md:-rotate-[6deg] border border-gray-100
                     ${activeCard === 1 ? 'z-30 scale-110 rotate-0' : ''}`}
                >
                  <div className="flex flex-col h-full gap-8">
                    <div className="px-4">
                      <h2 className="my-3 text-xl lg:text-2xl text-gray-800 font-bold">
                        بامداد سرویس
                      </h2>
                      <div className="flex flex-row items-center justify-between w-full mb-2">
                        <div className="text-gray-800 font-medium text-sm">
                          خدمات پس از فروش
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto  absolute bottom-4">
                      <button
                        onClick={() => toggleModal('service')}
                        type="button"
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full text-[14px] px-4 py-3 lg:px-5 lg:py-4"
                      >
                        مشاهده بیشتر
                      </button>
                      {modal.service && (
                        <Modal isOpen={modal.service} setIsOpen={setModal}>
                          <div className="modal-content">
                            <p>
                              گروه بامداد سعی داشته از پشتیبانی تلفنی و آنلاین
                              تا تعمیرات و تأمین قطعات یدکی، همواره در کنار شما
                              باشد..
                            </p>
                          </div>
                        </Modal>
                      )}
                    </div>
                  </div>
                  <div className="relative w-1/3 -left-2 -bottom-4 bg-white h-auto lg:h-full">
                    <img
                      src="/assets/images/cog.png"
                      className="mix-blend-multiply absolute bottom-0 w-[120px] left-0"
                      // alt=""
                      // srcSet=""
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 w-16 h-1 bg-[radial-gradient(circle,rgba(0,0,0,0.1)_0%,rgba(200,200,200,0.1)_90%)] rounded-full bottom-1"></div>
                  </div>
                </div>
                <div
                  onTouchStart={() => handleCardClick(2)}
                  className={`absolute md:relative h-56 top-[50px] w-[320px] sm:w-[420px] left-1/2 -translate-x-1/2 z-10 lg:z-10 lg:scale-100 hover:z-30 hover:scale-110 flex-shrink-0
                    hover:animate-fadeInOut animate-fadeOutIn hover:rotate-0 transition-all duration-300 md:translate-x-0 md:top-0 md:left-20 xl:-left-32 px-6 py-6 md:w-[290px] xl:w-[334px]
                    bg-gradient-to-l from-yellow-300 to-yellow-100 rounded-2xl shadow-xl md:-rotate-[20deg] overflow-hidden
                    ${activeCard === 2 ? 'z-30 scale-110 rotate-0' : ''}`}
                >
                  <div className="flex flex-col gap-8 h-full">
                    <div className="px-4">
                      <h2 className="my-3 text-xl lg:text-2xl text-gray-800 font-bold">
                        فروشگاه بامداد
                      </h2>
                      <div className="flex flex-row items-center justify-between w-full mb-2">
                        <div className="text-gray-800 font-medium text-sm">
                          فروش انواع محصولات
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto absolute bottom-4">
                      <button
                        onClick={() => toggleModal('gallery')}
                        type="button"
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full text-[14px] px-4 py-3 lg:px-5 lg:py-4"
                      >
                        مشاهده بیشتر
                      </button>
                      {modal.gallery && (
                        <Modal isOpen={modal.gallery} setIsOpen={setModal}>
                          <div className="modal-content">
                            <p>
                              از خرید تا پشتیبانی ، کنار شما هستیم تا با خیال
                              راحت، بهترین ها رو انتخاب کنید.
                            </p>
                          </div>
                        </Modal>
                      )}
                    </div>
                  </div>
                  <div className="bg-white">
                    <img
                      src="/assets/images/shopping cart.webp"
                      className="mix-blend-multiply absolute bottom-4 max-w-[120px] max-h-[120px] left-2"
                      // alt
                      // srcSet=""
                    />
                  </div>
                </div>
                <div
                  onTouchStart={() => handleCardClick(3)}
                  className={`absolute md:relative h-56 top-0 flex justify-between w-[320px] sm:w-[420px] left-1/2 -translate-x-1/2 z-0 lg:z-0 lg:scale-100 hover:z-30 flex-shrink-0 
                    hover:animate-fadeInOut animate-fadeOutIn hover:scale-110 hover:rotate-0 transition-all duration-300 md:translate-x-0 md:top-0 md:left-36 xl:-left-32 px-6 py-6 
                    md:w-[306px] xl:w-[334px] bg-white rounded-2xl shadow-neg lg:shadow-xl md:-rotate-[32deg] overflow-hidden
                    ${activeCard === 3 ? 'z-30 scale-110 rotate-0' : ''}`}
                >
                  <div className="flex flex-col h-full gap-8">
                    <div className="px-4">
                      <h2 className="my-3 text-xl lg:text-2xl font-bold text-gray-800">
                        قرعه کشی بامداد
                      </h2>
                      <div className="flex flex-row items-center justify-between w-full mb-2">
                        شانس خود را امتحان کنید
                      </div>
                    </div>
                    <div className="mt-auto absolute bottom-4">
                      <button
                        onClick={() => toggleModal('lottary')}
                        type="button"
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full text-[14px] px-4 py-3 lg:px-5 lg:py-4"
                      >
                        مشاهده بیشتر
                      </button>
                      {modal.lottary && (
                        <Modal isOpen={modal.lottary} setIsOpen={setModal}>
                          <div className="modal-content">
                            <p>
                              شرکت ما به پاس قدردانی از حمایت‌های بی‌نظیر شما
                              مشتریان عزیز، هر ماه یک قرعه‌کشی هیجان‌انگیز
                              برگزار می‌کند...
                            </p>
                            <a
                              href="https://www.instagram.com/bamdadgp"
                              target="_blank"
                              className="text-blue-500 underline pt-1"
                            >
                              صفحه اینستاگرام
                            </a>
                          </div>
                        </Modal>
                      )}
                    </div>
                  </div>
                  <div className="relative w-1/3 left-0 bottom-0 bg-white h-auto lg:h-full">
                    <img
                      src="/assets/images/lottery.png"
                      className="mix-blend-multiply absolute bottom-0 w-[120px] left-0"
                      // alt=""
                      // srcSet=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
