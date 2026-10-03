import Form from '@/components/section/auth/register/Form'

export const metadata = {
  title: 'ثبت‌نام | کوشا الکتریک بامداد',
  description: 'ایجاد حساب کاربری در کوشا الکتریک بامداد.',
}

export default function Register() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-10 md:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_100%_0%,rgba(253,186,116,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_100%,rgba(251,191,36,0.1),transparent_50%)]" />

      <div className="relative mx-auto flex max-w-screen-xl justify-center">
        <div className="w-full max-w-md overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/90 shadow-[0_24px_60px_rgba(0,0,0,0.08)] backdrop-blur-md">
          <div className="border-b border-neutral-100 bg-gradient-to-l from-amber-50/80 via-white to-orange-50/40 px-8 pb-6 pt-8 text-center">
            <p className="text-sm font-medium text-amber-700">کوشا الکتریک بامداد</p>
            <h1 className="mt-2 text-2xl font-extrabold text-neutral-900">
              ایجاد حساب کاربری
            </h1>
            <p className="mt-2 text-sm leading-7 text-neutral-500">
              برای خرید، پیگیری سفارش و دسترسی به خدمات پس از فروش ثبت‌نام کنید.
            </p>
          </div>
          <div className="px-6 py-7 sm:px-8">
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}
