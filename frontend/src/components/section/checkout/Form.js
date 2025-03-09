import useUserStore from '@/stores/user'
import Provinces from '@/utils/province'

export default function Form() {
  const { user, setUser } = useUserStore()
  const provinces = Provinces()

  return (
    <form id="checkout">
      <div className="mt-10 px-4">
        <p className="text-xl font-medium">جزئیات صورت حساب</p>
        <div className="">
          <div>
            <label
              htmlFor="card-holder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              className="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
              defaultValue={user.fullname}
            />
            <label
              htmlFor="billing-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              استان
            </label>
            <select
              type="text"
              name="billing-state"
              value={user.province}
              onChange={event => setUser({ province: event.target.value })}
              className="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
            >
              {provinces &&
                provinces.map((province, index) => (
                  <option key={index} value={province.provinceName}>
                    {province.provinceName}
                  </option>
                ))}
            </select>
            <div>
              <label
                htmlFor="billing-address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                آدرس
              </label>
              <div className="flex-shrink-0">
                <textarea
                  type="text"
                  id="billing-address"
                  name="billing-address"
                  rows={5}
                  defaultValue={user.address}
                  className="border resize-none border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                />
              </div>

              <label
                htmlFor="billing-address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                کدپستی (بدون فاصله و با اعداد انگلیسی)
              </label>
              <input
                type="text"
                name="billing-zip"
                className="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                defaultValue={user.zip_code}
              />
              <label
                htmlFor="billing-address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                شماره تماس
              </label>
              <input
                type="text"
                name="phone-numbre"
                className="border border-gray-300 rounded-lg mb-4 placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                defaultValue={user.mobile}
              />
              <label htmlFor=""> توضیحات سفارش (اختیاری) </label>
              <textarea
                name=""
                id=""
                cols="20"
                rows="5"
                className="border border-gray-300 rounded-lg placeholder:text-gray-400 bg-white text-sm p-2.5 w-full outline-none"
                placeholder="توضیحات"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
