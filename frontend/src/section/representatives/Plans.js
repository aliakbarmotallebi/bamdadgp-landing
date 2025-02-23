export default function Plans(){
    return (
        <section id="plans">
            <div className="mx-auto max-w-screen-xl grid grid-cols-2 gap-2">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-6">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    فروشگاه کوشا مرکز خدمات
                </h5>

                <p className="mb-3 font-normal text-gray-700">
                    خیابان جمهوری ، مابین خیابان فلسطین و ولیعصر، پ962 ، فروشگاه
                    کوشا
                </p>
                </div>

                <div className="relative overflow-x-auto">
                <table
                    className="w-full text-sm text-left rtl:text-right text-gray-500"
                >
                    <tbody>
                    <tr className="border-b border-gray-200">
                        <th
                        scope="row"
                        className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap bg-gray-50"
                        >
                        شهر/ استان
                        </th>
                        <td className="px-6 py-4 text-base">تهران/تهران</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <th
                        scope="row"
                        className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap bg-gray-50"
                        >
                        تلفن
                        </th>
                        <td className="px-6 py-4 text-base">
                        <a href="tel:+982166414136"> 02166414136 </a>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <th
                        scope="row"
                        className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap bg-gray-50"
                        >
                        مسئول
                        </th>
                        <td className="px-6 py-4 text-base">رضا عبدالهی</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <th
                        scope="row"
                        className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap bg-gray-50"
                        >
                        کدپستی
                        </th>
                        <td className="px-6 py-4 text-base">1316796781</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </section>
    )
}