import Hero from '@/components/section/contact/Hero'
import Info from '@/components/section/contact/Info'
import MessageForm from '@/components/section/contact/MessageForm'
import axios from 'axios'
const LOCAL_API_URL = process.env.LOCAL_API_BASE_URL
export const metadata = {
  title: 'تماس با ما | گروه تجاری بامداد',
  description: 'درباره گروه تجاری بامداد و تاریخچه و خدمات آن.',
}
export default async function Contact() {
  let result = null
  try {
    const response = await axios.get(`${LOCAL_API_URL}/contact`)
    result = response.data
  } catch (error) {
    console.error('Error fetching products:', error)
  }
  return (
    <>
      <Hero data={result.data} />
      <section id="plans" className="bg-primary-50 pb-16">
        <div className="flex md:flex-row flex-col items-center justify-center mb-10 pt-10 mx-auto max-w-7xl">
          <div className="content w-full px-4 sm:px-16 md:px-6 lg:px-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Info data={result.data} />
              <MessageForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
