export const mockOrders = [
  {
    id: 'G45266TY45H',
    date: '۱۴۰۲/۱۲/۰۵',
    status: 'pending',
    statusLabel: 'در انتظار پرداخت',
    total: '۷۵۰٬۰۰۰ تومان',
    items: 2,
  },
  {
    id: 'Y422663Y4FR',
    date: '۱۴۰۲/۱۲/۰۴',
    status: 'paid',
    statusLabel: 'پرداخت شده',
    total: '۳۶۰٬۰۰۰ تومان',
    items: 1,
  },
  {
    id: 'B89112KL90P',
    date: '۱۴۰۲/۱۱/۲۸',
    status: 'paid',
    statusLabel: 'پرداخت شده',
    total: '۱٬۲۴۰٬۰۰۰ تومان',
    items: 3,
  },
  {
    id: 'M33019QX21A',
    date: '۱۴۰۲/۱۱/۱۲',
    status: 'shipped',
    statusLabel: 'ارسال شده',
    total: '۸۹۰٬۰۰۰ تومان',
    items: 1,
  },
  {
    id: 'T77440ZW88N',
    date: '۱۴۰۲/۱۰/۳۰',
    status: 'paid',
    statusLabel: 'پرداخت شده',
    total: '۵۱۰٬۰۰۰ تومان',
    items: 2,
  },
]

export const mockMessages = [
  {
    id: 1,
    body: 'سفارش شما با موفقیت ثبت شد. به‌محض تأیید پرداخت، فرآیند آماده‌سازی آغاز می‌شود.',
    date: '۱۸ آبان ۱۴۰۲',
    time: '۱۷:۳۴',
  },
  {
    id: 2,
    body: 'گارانتی محصول خریداری‌شده فعال است. برای پیگیری خدمات پس از فروش با پشتیبانی تماس بگیرید.',
    date: '۱۲ آبان ۱۴۰۲',
    time: '۱۱:۱۰',
  },
]

export const mockPayments = [
  {
    id: 'PAY-90821',
    orderId: 'Y422663Y4FR',
    date: '۱۴۰۲/۱۲/۰۴',
    method: 'درگاه زرین‌پال',
    amount: '۳۶۰٬۰۰۰ تومان',
    status: 'success',
    statusLabel: 'موفق',
  },
  {
    id: 'PAY-90710',
    orderId: 'B89112KL90P',
    date: '۱۴۰۲/۱۱/۲۸',
    method: 'درگاه زرین‌پال',
    amount: '۱٬۲۴۰٬۰۰۰ تومان',
    status: 'success',
    statusLabel: 'موفق',
  },
  {
    id: 'PAY-90502',
    orderId: 'G45266TY45H',
    date: '۱۴۰۲/۱۲/۰۵',
    method: 'درگاه زرین‌پال',
    amount: '۷۵۰٬۰۰۰ تومان',
    status: 'failed',
    statusLabel: 'ناموفق',
  },
  {
    id: 'PAY-90118',
    orderId: 'M33019QX21A',
    date: '۱۴۰۲/۱۱/۱۲',
    method: 'کارت به کارت',
    amount: '۸۹۰٬۰۰۰ تومان',
    status: 'success',
    statusLabel: 'موفق',
  },
]

export function statusBadgeClass(status) {
  switch (status) {
    case 'paid':
    case 'success':
      return 'bg-emerald-50 text-emerald-700 ring-emerald-100'
    case 'pending':
      return 'bg-amber-50 text-amber-800 ring-amber-100'
    case 'shipped':
      return 'bg-sky-50 text-sky-700 ring-sky-100'
    case 'failed':
      return 'bg-rose-50 text-rose-700 ring-rose-100'
    default:
      return 'bg-neutral-50 text-neutral-600 ring-neutral-100'
  }
}
