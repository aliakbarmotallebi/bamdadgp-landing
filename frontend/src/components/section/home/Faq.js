'use client'
import ReactMarkdown from 'react-markdown'
import react from 'react'
export default function Faq({ faqs }) {
  const [activeIndex, setActiveIndex] = react.useState(1)

  const itemFaqRef = react.useRef([])

  const faqDefaultStyle = {
    maxHeight: '0px',
    opacity: 0,
    transition: 'max-height 0.5s ease-out, opacity 0.3 ease-out',
  }
  const [heights, setHeights] = react.useState([])
  react.useEffect(() => {
    const newHeights = faqs.map((_, index) => {
      return itemFaqRef.current[index]
        ? itemFaqRef.current[index].scrollHeight
        : 0
    })
    setHeights(newHeights)
  }, [])

  return (
    <section id="faq-section">
      <div className="w-full flex flex-col items-center py-16 px-4 sm:px-8 lg:px-0 bg-orange-50/50">
        <div className="max-w-screen-xl w-full bg-white/10 backdrop-blur-lg">
          <div className="flex flex-col items-center gap-8">
            <h2 className="font-bold text-3xl text-center text-neutral-800">
              سوالات متداول
            </h2>
            <ul className="w-full lg:w-2/3">
              {faqs.map((faq, index) => {
                const faqActiveStyle =
                  activeIndex === index
                    ? { maxHeight: heights[index] + 'px', opacity: 1 }
                    : {}
                return (
                  <li
                    key={index}
                    className={`faq-item border-t-2 border-[#888e3520] ${
                      activeIndex === index ? 'open' : ''
                    }`}
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer py-6 px-2"
                      onClick={() =>
                        setActiveIndex(activeIndex === index ? null : index)
                      }
                    >
                      <h3 className="font-semibold text-sm sm:text-base md:font-bold md:text-lg">{`${
                        index + 1
                      }.${faq.question}`}</h3>
                      <div className="relative me-2">
                        <span className="p-h h-0.5 w-3.5 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-neutral-800 rounded-full block absolute"></span>
                        <span
                          className={`${
                            activeIndex === index ? 'rotate-90' : ''
                          } p-v w-0.5 transition-transform duration-300 h-3.5 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-neutral-800 rounded-full block absolute`}
                        ></span>
                      </div>
                    </div>

                    <div
                      ref={el => (itemFaqRef.current[index] = el)}
                      className="faq-sub-item overflow-hidden transition-all duration-500 ease-out"
                      id={`${index}`}
                      style={{ ...faqDefaultStyle, ...faqActiveStyle }}
                    >
                      <div className="pb-6 px-2">
                        <div
                          className="font-medium md:font-semibold text-sm md:text-base pb-3"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        ></div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
