import Hero from '@/components/section/representatives/Hero'
import Plans from '@/components/section/representatives/Plans'

export const metadata = {
  title: 'مراکز خدمات | گروه تجاری بامداد',
  description: 'فهرست مراکز خدمات گروه تجاری بامداد و بامداد سرویس.',
}

export default function Representatives() {
  return (
    <div className="pb-8">
      <Hero />
      <Plans />
    </div>
  )
}
