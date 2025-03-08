import Faq from '@/components/section/home/Faq'
import Hero from '@/components/section/home/Hero'
import Statistics from '@/components/section/home/Statistics'
import Inquiry from '@/components/section/home/Inquiry'

export default function Home() {
  const faqs = [
    {
      question: 'چگونه از بامداد گالری به نرخ لحظه ای خرید کنیم؟',
      answer:
        'شما میتوانید در اینستاگرام بامداد گالری زیورآلات را مشاهده کرده و در پنل دیجی کالا به قیمت لحظه ای طلا سفارش خود را ثبت کنید.',
    },
    {
      question: 'آیا طلاها دارای استاندارد هستند؟',
      answer:
        'بله، زیورآلات و سکه‌های مجموعه ما با عیار صحیح و تحت نظارت اتحادیه طلا و جواهرات هستند و دارای کد استاندارد می‌باشند.',
    },
    {
      question: 'نحوه شرکت در قرعه‌کشی چگونه است؟',
      answer:
        'در صورت دارا بودن کد قرعه‌کشی، عدد ۲ را به سرشماره ۹۹۸۲۰۰۹۵۳۵ پیامک کنید.',
    },
    {
      question: 'اطلاع‌رسانی برنده‌های قرعه‌کشی چگونه است؟',
      answer:
        'به منظور اطلاع از برندگان قرعه‌کشی، اینستاگرام بامداد گالری را دنبال کنید. به‌صورت ماهانه برنده‌ها اعلام می‌شوند.',
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
