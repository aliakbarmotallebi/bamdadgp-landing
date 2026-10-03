'use client'
import useUserStore from '@/stores/user'
import Provinces from '@/utils/province'

export default function Form() {
  const { user, setUser } = useUserStore()
  const provinces = Provinces()

  return (
    <form id="checkout" onSubmit={e => e.preventDefault()}>
      <div className="px-4 py-6">
        <p className="text-xl font-bold text-neutral-900">جزئیات صورت حساب</p>
        <div className="mt-2 space-y-4">
          <div>
            <label className="mb-2 mt-4 block text-sm font-medium text-neutral-700">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              name="full-name"
              className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm outline-none transition focus:border-amber-400"
              defaultValue={user?.fullname || ''}
              placeholder="مثلاً علی احمدی"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              استان
            </label>
            <select
              name="billing-state"
              value={user?.province || ''}
              onChange={event => setUser({ province: event.target.value })}
              className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm outline-none transition focus:border-amber-400"
            >
              <option value="">انتخاب استان</option>
              {provinces?.map((province, index) => (
                <option key={index} value={province.provinceName}>
                  {province.provinceName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              آدرس
            </label>
            <textarea
              name="billing-address"
              rows={4}
              defaultValue={user?.address || ''}
              className="w-full resize-none rounded-xl border border-gray-200 bg-white p-3 text-sm outline-none transition focus:border-amber-400"
              placeholder="آدرس کامل پستی"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              کدپستی (بدون فاصله و با اعداد انگلیسی)
            </label>
            <input
              type="text"
              name="billing-zip"
              className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm outline-none transition focus:border-amber-400"
              defaultValue={user?.zip_code || ''}
              placeholder="1234567890"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              شماره تماس
            </label>
            <input
              type="text"
              name="phone-number"
              className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm outline-none transition focus:border-amber-400"
              defaultValue={user?.mobile || ''}
              placeholder="0912xxxxxxx"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              توضیحات سفارش (اختیاری)
            </label>
            <textarea
              name="order-note"
              rows={4}
              className="w-full resize-none rounded-xl border border-gray-200 bg-white p-3 text-sm outline-none transition focus:border-amber-400"
              placeholder="توضیحات تکمیلی برای ارسال"
            />
          </div>
        </div>
      </div>
    </form>
  )
}
