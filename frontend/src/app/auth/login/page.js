import Form from '@/components/section/auth/login/Form'

export default async function Login() {
  return (
    <section className="mx-auto  max-w-7xl flex justify-center">
      <div className="md:min-w-[420px] p-12 bg-white/80 border border-gray-200 backdrop-blur-md shadow-lg rounded-xl md:my-12 xl:my-24">
        <h1 className="text-center mb-6 text-xl font-semibold text-stone-600">
          ورود به حساب کاربری
        </h1>
        <Form />
      </div>
    </section>
  )
}
