import useCartStore from '@/stores/cart'

export default function Info() {
  const { totalPrice } = useCartStore()

  return (
    <>
      <article className="pt-12">
        <div className="px-8 py-8 bg-gray-50 rounded-lg sticky top-8">
          <div className="text-xl font-medium mb-2">
            <h2>سفارش شما</h2>
          </div>
          <div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-base font-normal text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    نام محصول
                  </th>
                  <th scope="col" className="px-6 py-3">
                    جمع جزء
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    جمع سبد خرید
                  </th>
                  <td className="px-6 py-4">
                    {totalPrice.toLocaleString()} تومان
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    هزینه حمل و نقل
                  </th>
                  <td className="px-6 py-4">0 تومان</td>
                </tr>
                <tr className="bg-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    مجموع
                  </th>
                  <td className="px-6 py-4">
                    {totalPrice.toLocaleString()} تومان
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex flex-col gap-4 my-4">
              <ul>
                <li>
                  <div className="flex gap-2 items-center relative">
                    <input type="checkbox" name="" id="zarinpal" />
                    <label
                      htmlFor="zarinpal"
                      className="block w-1/2 h-14 absolute opacity-0 cursor-pointer"
                    ></label>
                    <figure className="size-14">
                      <img
                        src="./assets/images/zarinpal.png"
                        className="h-full object-cover"
                        alt=""
                      />
                    </figure>
                    <p>پرداخت امن زرین پال</p>
                  </div>
                </li>
              </ul>
              <div className="py-3 px-3 border border-gray-100 bg-white rounded-md text-gray-500 text-sm font-normal">
                <p>
                  پرداخت امن به وسیله کلیه کارت های عضو شتاب از طریق درگاه زرین
                  پال
                </p>
              </div>
            </div>
            <button
              form="checkout"
              type="submit"
              value="ثبت سفارش"
              className="text-center w-full py-2 bg-green-700 text-white rounded-md border-t border-gray-100 hover:opacity-40 transition-all delay-100"
            >
              ثبت سفارش
            </button>
          </div>
        </div>
      </article>
    </>
  )
}
