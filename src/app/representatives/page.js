import Hero from '@/components/section/representatives/Hero'
import Plans from '@/components/section/representatives/Plans'

export const metadata = {
  title: 'نمایندگان | گروه تجاری بامداد',
  description:
    'فهرست نمایندگان و تعمیرگاه‌های مجاز کوشا الکتریک و بامداد سرویس.',
}

export default function Representatives() {
  return (
    <div className="pb-8">
      <Hero />
      <Plans />
    </div>
  )
}
