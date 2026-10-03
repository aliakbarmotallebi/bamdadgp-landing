'use client'

import ProfileShell from '@/components/section/profile/ProfileShell'
import { mockPayments, statusBadgeClass } from '@/data/mockOrders'

export default function Payments() {
  return (
    <ProfileShell
      title="پرداخت‌ها"
      subtitle="تاریخچه تراکنش‌ها و وضعیت پرداخت سفارش‌ها"
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-100 bg-neutral-50/80 p-4">
            <p className="text-xs font-medium text-neutral-500">کل تراکنش‌ها</p>
            <p className="mt-2 text-2xl font-extrabold text-neutral-900">
              {mockPayments.length}
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
            <p className="text-xs font-medium text-emerald-700">موفق</p>
            <p className="mt-2 text-2xl font-extrabold text-emerald-800">
              {mockPayments.filter(p => p.status === 'success').length}
            </p>
          </div>
          <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-4">
            <p className="text-xs font-medium text-rose-700">ناموفق</p>
            <p className="mt-2 text-2xl font-extrabold text-rose-800">
              {mockPayments.filter(p => p.status === 'failed').length}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-neutral-900">لیست پرداخت‌ها</h2>
          <p className="mt-1 text-sm text-neutral-500">
            جزئیات پرداخت‌های ثبت‌شده برای سفارش‌های شما
          </p>
        </div>

        <div className="hidden overflow-hidden rounded-2xl border border-neutral-100 md:block">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 text-xs text-neutral-500">
              <tr>
                <th className="px-5 py-3 text-right font-semibold">کد پرداخت</th>
                <th className="px-5 py-3 text-right font-semibold">سفارش</th>
                <th className="px-5 py-3 text-right font-semibold">تاریخ</th>
                <th className="px-5 py-3 text-right font-semibold">روش</th>
                <th className="px-5 py-3 text-right font-semibold">مبلغ</th>
                <th className="px-5 py-3 text-right font-semibold">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {mockPayments.map(payment => (
                <tr
                  key={payment.id}
                  className="border-t border-neutral-100 transition hover:bg-amber-50/40"
                >
                  <td className="px-5 py-4 font-semibold text-neutral-800">
                    {payment.id}
                  </td>
                  <td className="px-5 py-4 text-neutral-600">
                    {payment.orderId}
                  </td>
                  <td className="px-5 py-4 text-neutral-600">{payment.date}</td>
                  <td className="px-5 py-4 text-neutral-600">
                    {payment.method}
                  </td>
                  <td className="px-5 py-4 font-medium text-neutral-800">
                    {payment.amount}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${statusBadgeClass(payment.status)}`}
                    >
                      {payment.statusLabel}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-3 md:hidden">
          {mockPayments.map(payment => (
            <article
              key={payment.id}
              className="rounded-2xl border border-neutral-100 bg-neutral-50/60 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-neutral-900">{payment.id}</p>
                  <p className="mt-1 text-xs text-neutral-500">
                    سفارش {payment.orderId}
                  </p>
                </div>
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${statusBadgeClass(payment.status)}`}
                >
                  {payment.statusLabel}
                </span>
              </div>
              <div className="mt-3 space-y-1 text-sm text-neutral-600">
                <p>{payment.method}</p>
                <div className="flex items-center justify-between">
                  <span>{payment.date}</span>
                  <span className="font-semibold text-neutral-900">
                    {payment.amount}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ProfileShell>
  )
}
