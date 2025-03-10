'use client'
import react from 'react'
import useModalStore from '@/stores/modal'

export default function Hero() {
  const { isOpen, setIsOpen, setContentModal } = useModalStore()

  react.useEffect(() => {
    switch (isOpen) {
      case 'modal-service':
        setContentModal(`<p>
                گروه بامداد سعی داشته از پشتیبانی تلفنی و آنلاین تا تعمیرات و تأمین قطعات یدکی، همواره در کنار شما باشد...
                </p>`)
        break
      case 'modal-gallery':
        setContentModal(`<p>
                شرکت ما در زمینه توزیع زیورآلات طلا با هدف ارائه محصولات باکیفیت و طراحی‌های منحصر به فرد فعالیت می‌کند...
                </p>`)
        break
      case 'modal-lucky':
        setContentModal(`<p >
                شرکت ما به پاس قدردانی از حمایت‌های بی‌نظیر شما مشتریان عزیز، هر ماه یک قرعه‌کشی هیجان‌انگیز برگزار می‌کند...
                </p>`)
        break
      default:
        setContentModal(null)
        break
    }
  }, [isOpen])

  return (
    <>
      <section id="hero-section" className="lg:min-h-screen">
        <div className="group/hero relative w-full flex justify-center items-start">
          <div className="absolute top-1/4 w-[60%] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(255,255,0,0.2)_0%,rgba(255,255,0,0)_90%)] group-hover/hero:bg-[radial-gradient(circle,rgba(255,255,0,0.3)_0%,rgba(255,255,0,0)_90%)] transition-all duration-500 -translate-x-1/4 z-[-1] blur-xl"></div>
          <div className="max-w-screen-xl w-full bg-white/10 backdrop-blur-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 px-4 pt-16 pb-8 gap-8">
              <div className="flex flex-col items-start gap-8">
                <h2 className="text-2xl font-semibold text-neutral-800">
                  خدماتی برای فردایی بهتر
                </h2>
                <div>
                  <h1 className="text-5xl font-bold text-neutral-800">
                    گروه تجاری بامداد
                  </h1>
                </div>
                <p className="w-full text-justify text-lg font-medium text-neutral-800">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز است.
                </p>
              </div>

              <div className="flex gap-8 items-start mt-12 justify-end">
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

            <div className="hidden lg:block">
              <div className="flex flex-col sm:flex-row py-10 ps-24 space-y-4 sm:space-y-0 space-y-reverse space-x-reverse sm:-space-x-1 xl:-space-x-20 mx-8 sm:mx-0">
                <div className="relative flex justify-between z-20 hover:z-30 hover:scale-110 hover:rotate-0 transition-all duration-300 w-full -left-40 px-6 py-6 md:w-[380px] bg-white rounded-2xl shadow-xl -rotate-[6deg] border border-gray-100">
                  <div className="flex flex-col h-full gap-8">
                    <div className="px-4">
                      <h2 className="my-3 text-2xl text-gray-800 font-bold">
                        بامداد سرویس
                      </h2>
                      <div className="flex flex-row items-center justify-between w-full mb-2">
                        <div className="text-gray-800 font-medium text-sm">
                          خدمات پس از فروش
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <button
                        onClick={() => setIsOpen('modal-service')}
                        type="button"
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full text-xs px-5 py-4"
                      >
                        مشاهده بیشتر
                      </button>
                    </div>
                  </div>
                  <div className="relative w-1/3 -left-2 -bottom-4 bg-white h-full">
                    <img
                      src="/assets/images/cog.png"
                      className="mix-blend-multiply absolute bottom-0 w-[120px] left-0"
                      // alt=""
                      // srcSet=""
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 w-16 h-1 bg-[radial-gradient(circle,rgba(0,0,0,0.1)_0%,rgba(200,200,200,0.1)_90%)] rounded-full bottom-1"></div>
                  </div>
                </div>
                <div className="relative z-10 hover:z-30 hover:scale-110 hover:animate-fadeInOut animate-fadeOutIn hover:rotate-0 transition-all duration-300 w-full -left-32 px-6 py-6 md:w-[338px] bg-gradient-to-l from-yellow-300 to-yellow-100 rounded-2xl shadow-xl -rotate-[20deg] overflow-hidden">
                  <div className="flex flex-col gap-8 h-full">
                    <div className="px-4">
                      <h2 className="my-3 text-2xl text-gray-800 font-bold">
                        بامداد گالری
                      </h2>
                      <div className="flex flex-row items-center justify-between w-full mb-2">
                        <div className="text-gray-800 font-medium text-sm">
                          فروش انواع طلا و سکه
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <button
                        onClick={() => setIsOpen('modal-gallery')}
                        type="button"
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full text-xs px-5 py-4"
                      >
                        مشاهده بیشتر
                      </button>
                    </div>
                  </div>
                  <div className="bg-white">
                    <img
                      src="/assets/images/757982_10.svg"
                      className="mix-blend-multiply absolute -bottom-14 w-[150px] left-0 min-h-full"
                      // alt
                      // srcSet=""
                    />
                  </div>
                </div>
                <div className="relative flex justify-between z-0 hover:z-30 hover:animate-fadeInOut animate-fadeOutIn hover:scale-110 hover:rotate-0 transition-all duration-300 w-full -left-32 px-6 py-6 md:w-[346px] bg-white rounded-2xl shadow-xl -rotate-[32deg] overflow-hidden">
                  <div className="flex flex-col h-full gap-8">
                    <div className="px-4">
                      <h2 className="my-3 text-2xl font-bold text-gray-800">
                        قرعه کشی بامداد
                      </h2>
                      <div className="flex flex-row items-center justify-between w-full mb-2">
                        شانس خود را امتحان کنید
                      </div>
                    </div>
                    <div className="mt-auto">
                      <button
                        onClick={() => setIsOpen('modal-lucky')}
                        type="button"
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full text-xs px-5 py-4"
                      >
                        مشاهده بیشتر
                      </button>
                    </div>
                  </div>
                  <div className="relative w-1/3 left-0 bottom-0 bg-white h-full">
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
