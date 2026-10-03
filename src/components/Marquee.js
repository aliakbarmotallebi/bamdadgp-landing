// components/Marquee.tsx
import { useEffect, useRef } from 'react'

const items = [
  'سشوار',
  'سرخ کن',
  'بیگودی',
  'مایکرویو',
  'توستر',
  'اتو مو',
  'ساندویچ ساز',
  'حالت دهنده مو',
  'بخار پز',
  'اصلاح مو صورت',
  'تخم مرغ پز',
  'پلو پز',
  'اصلاح مو سر',
  'آرام پز',
  'اصلاح موی بدن آقایان',
  'اصلاح موی بدن بانوان',
  'زود پز',
  'آبمیوه گیری',
  'اصلاح موی گوش',
  'چای ساز',
  'سماور برقی',
  'سنگ پا برقی',
  'اسپرسو ساز',
  'ابزار مراقبت از پوست',
  'تصفیه آب',
  'سودا ساز',
  'اسپیکر',
  'رادیو',
  'غذا ساز',
  'همزن',
  'مخلوط کن',
  'خرد کن',
  'چرخ گوشت',
  'آسیاب',
  'گوشتکوب برقی',
  'جارو برقی',
  'لباسشویی',
  'ظرف شویی',
  'اتو',
  'جارو شارژی',
  'بخار شور',
  'جارو رباتیک',
  'مینی واش',
  'تصفیه کننده هوا',
  'شوفاژ برقی',
  'پنکه',
  'کولر',
  'آبگرمکن',
  'فن کوئل',
  'هود',
  'هدست',
  'هندزفری',
  'لپتاپ',
  'موس',
  'کیبورد',
  'وب کم',
  'فلش',
]

export default function Marquee({ direction = 'ltr', speed = 1 }) {
  const marqueeRef = useRef(null)
  const scrollRef = useRef(0)

  useEffect(() => {
    const marqueeEl = marqueeRef.current
    if (!marqueeEl) return

    const step = () => {
      scrollRef.current += speed
      if (direction === 'ltr') {
        marqueeEl.style.transform = `translateX(${scrollRef.current}px)`
      } else {
        marqueeEl.style.transform = `translateX(${-1 * scrollRef.current}px)`
      }

      if (Math.abs(scrollRef.current) >= marqueeEl.scrollWidth / 2) {
        scrollRef.current = 0
      }

      requestAnimationFrame(step)
    }

    step()
  }, [])

  return (
    <div className="relative h-11 w-full overflow-hidden">
      <ul
        ref={marqueeRef}
        className={`${
          direction === 'ltr' ? 'right-0' : 'left-0'
        } absolute flex h-full items-center gap-3 whitespace-nowrap`}
      >
        {[...items, ...items].map((item, idx) => (
          <li
            key={idx}
            className="min-w-16 whitespace-nowrap rounded-full bg-neutral-50 px-3.5 py-2 text-center text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200/80"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
