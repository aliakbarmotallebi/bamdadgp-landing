import React from 'react'

const WarrantyActivated = ({ onClose, data }) => {
  const renderStatus = status => {
    switch (status) {
      case 'STATUS_CONFIRMED':
        return (
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
            فعال
          </span>
        )
      case 'STATUS_UNCONFIRMED':
        return (
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
            در انتظار تایید
          </span>
        )
      case 'STATUS_EXPIRED':
        return (
          <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
            منقضی شده
          </span>
        )
    }
  }
  return (
    <>
      <div className="flex justify-center mb-4">
        <div className="bg-green-200 p-3 rounded-full">
          <div className="bg-green-500 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 w-full text-sm text-right">
        <Info label="وضعیت">{renderStatus(data?.status)}</Info>
        <Info label="نام دستگاه">{data?.productName}</Info>
        <Info label="دسته بندی">{data?.categoryName}</Info>
        <Info label="نام و نام خانوادگی">{data?.fullName}</Info>
        <Info label="شماره تماس">{data?.phoneNumber}</Info>
        <Info label="شماره سریال کارت">{data?.serialNumber}</Info>
        <Info label="تاریخ صدور کارت">{data?.startDate}</Info>
        <Info label="تاریخ اتمام گارانتی">{data?.expireDate}</Info>
        <Info cStyle="col-span-2" label="توضیحات">
          {/* {data.contractNumber} */}
          <p>
            محاسبه تاریخ شروع قرارداد برای فروش در مارکت پلیس ها(دیجی کالا، اسنپ
            شاپ، باسلام، تکنولایف و...) طبق فاکتور و برای فروش متفرقه طبق تاریخ
            درج شده روی لیبل گارانتی می باشد.
          </p>
        </Info>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={onClose}
          className="mx-auto block py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
        >
          ثبت گارانتی جدید
        </button>
      </div>
    </>
  )
}

const Info = ({ cStyle = '', label, children }) => (
  <div className={`${cStyle} border-b border-gray-200 flex items-center`}>
    <div className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 text-right">
      {label}
    </div>
    <div className="px-6 py-4 text-right whitespace-nowrap">{children}</div>
  </div>
)

export default WarrantyActivated
