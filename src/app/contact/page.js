import Hero from '@/components/section/contact/Hero'
import Info from '@/components/section/contact/Info'
import MessageForm from '@/components/section/contact/MessageForm'
import { mockContact } from '@/data/mockContent'

export const metadata = {
  title: 'تماس با ما | گروه تجاری بامداد',
  description: 'راه‌های ارتباط با گروه تجاری بامداد.',
}

export default function Contact() {
  const data = mockContact.data

  return (
    <div className="relative overflow-hidden pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_100%_0%,rgba(253,186,116,0.16),transparent_55%)]" />
      <Hero data={data} />
      <section className="relative mx-auto max-w-screen-xl px-4 lg:px-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <Info data={data} />
          <MessageForm />
        </div>
      </section>
    </div>
  )
}
