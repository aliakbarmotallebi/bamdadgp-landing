import { representatives } from '@/data/representatives'

function formatPhoneHref(phone) {
  if (!phone) return null
  const digits = phone.replace(/\D/g, '')
  return `tel:+98${digits.replace(/^0/, '')}`
}

export default function Plans() {
  return (
    <section id="plans" className="relative px-4 pb-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              فهرست مراکز خدمات
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              {representatives.length.toLocaleString('fa-IR')} مرکز فعال
            </p>
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-sm">
              <thead className="bg-neutral-50 text-neutral-600">
                <tr className="border-b border-neutral-200">
                  <th className="px-4 py-3.5 text-start font-semibold">
                    نام مرکز خدمات
                  </th>
                  <th className="px-4 py-3.5 text-start font-semibold">
                    استان / شهر
                  </th>
                  <th className="px-4 py-3.5 text-start font-semibold">
                    تلفن همراه
                  </th>
                  <th className="px-4 py-3.5 text-start font-semibold">
                    نام مدیر / مسئول
                  </th>
                  <th className="px-4 py-3.5 text-start font-semibold">آدرس</th>
                  <th className="px-4 py-3.5 text-start font-semibold">
                    تلفن ثابت
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {representatives.map(item => (
                  <tr
                    key={`${item.name}-${item.city}`}
                    className="align-top transition hover:bg-amber-50/40"
                  >
                    <td className="px-4 py-4 font-semibold text-neutral-900">
                      {item.name}
                    </td>
                    <td className="px-4 py-4 text-neutral-700 whitespace-nowrap">
                      {item.province} / {item.city}
                    </td>
                    <td className="px-4 py-4 text-neutral-700 whitespace-nowrap">
                      {item.mobile ? (
                        <a
                          href={formatPhoneHref(item.mobile)}
                          className="text-amber-800 transition hover:text-amber-950"
                          dir="ltr"
                        >
                          {item.mobile}
                        </a>
                      ) : (
                        '—'
                      )}
                    </td>
                    <td className="px-4 py-4 text-neutral-700 whitespace-nowrap">
                      {item.manager}
                    </td>
                    <td className="max-w-xs px-4 py-4 leading-7 text-neutral-600">
                      {item.address}
                    </td>
                    <td className="px-4 py-4 text-neutral-700 whitespace-nowrap">
                      {item.phone ? (
                        <a
                          href={formatPhoneHref(item.phone)}
                          className="text-amber-800 transition hover:text-amber-950"
                          dir="ltr"
                        >
                          {item.phone}
                        </a>
                      ) : (
                        '—'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {representatives.map(item => (
            <article
              key={`${item.name}-${item.city}-mobile`}
              className="rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
            >
              <h3 className="text-lg font-bold text-neutral-900">{item.name}</h3>
              <p className="mt-1 text-sm text-amber-800">
                {item.province} / {item.city}
              </p>

              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-neutral-500">مسئول</dt>
                  <dd className="mt-0.5 font-medium text-neutral-800">
                    {item.manager}
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-500">آدرس</dt>
                  <dd className="mt-0.5 leading-7 text-neutral-700">
                    {item.address}
                  </dd>
                </div>
                {item.mobile ? (
                  <div>
                    <dt className="text-neutral-500">تلفن همراه</dt>
                    <dd className="mt-0.5">
                      <a
                        href={formatPhoneHref(item.mobile)}
                        className="font-medium text-neutral-900"
                        dir="ltr"
                      >
                        {item.mobile}
                      </a>
                    </dd>
                  </div>
                ) : null}
                {item.phone ? (
                  <div>
                    <dt className="text-neutral-500">تلفن ثابت</dt>
                    <dd className="mt-0.5">
                      <a
                        href={formatPhoneHref(item.phone)}
                        className="font-medium text-neutral-900"
                        dir="ltr"
                      >
                        {item.phone}
                      </a>
                    </dd>
                  </div>
                ) : null}
                {item.postalCode ? (
                  <div>
                    <dt className="text-neutral-500">کدپستی</dt>
                    <dd className="mt-0.5 font-medium text-neutral-800" dir="ltr">
                      {item.postalCode}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
