import Hero from "@/section/contact/Hero";
import Info from "@/section/contact/Info";
import MessageForm from "@/section/contact/MessageForm";

export default function Contact(){
    return (
        <>
        <Hero />
        <section id="plans" className="bg-primary-50 pb-16">
          <div className="flex md:flex-row flex-col items-center mb-10 pt-10 mx-auto max-w-7xl">
            <section>
              <div className="content">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Info />
                  <MessageForm />
                </div>
              </div>
            </section>
          </div>

        </section>
        </>
    )
}