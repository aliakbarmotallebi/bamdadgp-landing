import Navbar from '@/components/Navbar'
import '@/assets/globals.css'
import Footer from '@/components/Footer'
import Fab from '@/components/Fab'

export const metadata = {
  title: 'گروه تجاری بامداد',
  description:
    'گروه تجاری بامداد یک فروشگاه لوازم خانگی همراه با سرویس خدمات پس فروش',
  authors: [
    { name: 'Hamid Kamyab - hamidkamyab.ir' },
    { name: 'Aliakbar Motallebi' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body id="anchor" className="overflow-x-hidden relative mx-auto">
        <Navbar />
        <Fab />
        {children}
        <Footer />
        <div id="modal-root"></div>
      </body>
    </html>
  )
}
