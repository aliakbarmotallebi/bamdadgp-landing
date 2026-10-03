'use client'

import ProfileShell from '@/components/section/profile/ProfileShell'
import { mockMessages, mockOrders, statusBadgeClass } from '@/data/mockOrders'

export default function Orders() {
  return (
    <ProfileShell
      title="سفارش‌ها"
      subtitle="پیگیری وضعیت و تاریخچه سفارش‌های شما"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-bold text-neutral-900">سفارش‌های شما</h2>
          <p className="mt-1 text-sm text-neutral-500">
            آخرین سفارش‌های ثبت‌شده در فروشگاه بامداد
          </p>
        </div>

        <div className="hidden overflow-hidden rounded-2xl border border-neutral-100 md:block">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 text-xs text-neutral-500">
              <tr>
                <th className="px-5 py-3 text-right font-semibold">شماره سفارش</th>
                <th className="px-5 py-3 text-right font-semibold">تاریخ</th>
                <th className="px-5 py-3 text-right font-semibold">وضعیت</th>
                <th className="px-5 py-3 text-right font-semibold">مبلغ</th>
                <th className="px-5 py-3 text-right font-semibold">جزئیات</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map(order => (
                <tr
                  key={order.id}
                  className="border-t border-neutral-100 transition hover:bg-amber-50/40"
                >
                  <td className="px-5 py-4 font-semibold text-neutral-800">
                    {order.id}
                  </td>
                  <td className="px-5 py-4 text-neutral-600">{order.date}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${statusBadgeClass(order.status)}`}
                    >
                      {order.statusLabel}
                    </span>
                  </td>
                  <td className="px-5 py-4 font-medium text-neutral-800">
                    {order.total}
                  </td>
                  <td className="px-5 py-4">
                    <button
                      type="button"
                      className="inline-flex size-8 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
                      aria-label="مشاهده جزئیات"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5"
                      >
                        <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-3 md:hidden">
          {mockOrders.map(order => (
            <article
              key={order.id}
              className="rounded-2xl border border-neutral-100 bg-neutral-50/60 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-neutral-900">{order.id}</p>
                  <p className="mt-1 text-xs text-neutral-500">{order.date}</p>
                </div>
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${statusBadgeClass(order.status)}`}
                >
                  {order.statusLabel}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-neutral-500">{order.items} قلم کالا</span>
                <span className="font-semibold text-neutral-900">
                  {order.total}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="border-t border-neutral-100 pt-8">
          <h2 className="text-lg font-bold text-neutral-900">پیام‌ها</h2>
          <p className="mt-1 text-sm text-neutral-500">
            اطلاعیه‌های مرتبط با سفارش‌ها و خدمات
          </p>
          <div className="mt-5 space-y-3">
            {mockMessages.map(message => (
              <article
                key={message.id}
                className="rounded-2xl border border-neutral-100 bg-neutral-50/70 p-4"
              >
                <p className="text-sm leading-7 text-neutral-700">
                  {message.body}
                </p>
                <p className="mt-3 text-xs text-neutral-400">
                  {message.date} — {message.time}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </ProfileShell>
  )
}
