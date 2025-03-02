import { getContactus } from '@/app/api/contact'
import Hero from '@/section/contact/Hero'
import Info from '@/section/contact/Info'
import MessageForm from '@/section/contact/MessageForm'

export default async function Contact() {
  const { data } = await getContactus()
  return (
    <>
      <Hero data={data} />
      <section id="plans" className="bg-primary-50 pb-16">
        <div className="flex md:flex-row flex-col items-center mb-10 pt-10 mx-auto max-w-7xl">
          <section>
            <div className="content">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Info data={data} />
                <MessageForm />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
