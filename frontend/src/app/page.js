import Faq from '@/components/section/home/Faq'
import Hero from '@/components/section/home/Hero'
import Statistics from '@/components/section/home/Statistics'
import Inquiry from '@/components/section/home/Inquiry'

export default function Home() {
  const faqs = [
    {
      question: 'نحوه فعالسازی گارانتی چگونه است؟',
      answer:
        'شما میتوانید از طریق فرم مربوطه در سایت با وارد کردن شماره گارانتی، نام و نام خانوادگی و شماره همراه نسبت به فعالسازی گارانتی اقدام کنید.',
    },
    {
      question: 'چگونه میتوانم از خدمات گارانتی خود استفاده کنم؟',
      answer:
        'با مراجعه به مراکز خدمات پس از فروش رسمی شرکت میتوانید از خدمات ما بهرمند شوید',
    },
    {
      question: 'نحوه شرکت در قرعه‌کشی چگونه است؟',
      answer:
        'در صورت دارا بودن کد قرعه‌کشی، عدد ۲ را به سرشماره ۹۹۸۲۰۰۹۵۳۵ پیامک کنید.',
    },
    {
      question: 'اطلاع‌رسانی برنده‌های قرعه‌کشی چگونه است؟',
      answer:
        'به منظور اطلاع از برندگان قرعه‌کشی، <a style="color:blue" href="https://www.instagram.com/bamdadgp" target="_blank" >اینستاگرام گروه تجاری بامداد </a> را دنبال کنید. به‌صورت ماهانه برنده‌ها اعلام می‌شوند.',
    },
  ]

  return (
    <>
      <Hero />

      <Statistics />

      <Inquiry />

      <Faq faqs={faqs} />
    </>
  )
}
