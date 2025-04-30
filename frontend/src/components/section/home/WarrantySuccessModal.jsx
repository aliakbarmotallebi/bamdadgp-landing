import React from "react"

const WarrantySuccessModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null
  const renderStatus = (status) => {
    switch (status) {
      case 'STATUS_CONFIRMED':
        return <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">فعال</span>
      case 'STATUS_UNCONFIRMED':
        return <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">در انتظار تایید</span>
      case 'STATUS_EXPIRED':
        return <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">منقضی شده</span>
    }
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[95%] max-w-4xl relative">
        <div className="flex justify-center mb-4">
          <div className="bg-green-200 p-3 rounded-full">
            <div className="bg-green-500 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 lg:grid-cols-4 text-sm text-right">
            <Info label="وضعیت">
                {renderStatus(data.status)}
            </Info>
            <Info label="نام دستگاه">{data.productName}</Info>
            <Info label="دسته بندی">{data.categoryName}</Info>
            <Info label="نام و نام خانوادگی">{data.fullName}</Info>
            <Info label="شماره تماس">{data.phoneNumber}</Info>
            <Info label="شماره سریال کارت">{data.serialNumber}</Info>
            <Info label="تاریخ صدور کارت">{data.startDate}</Info>
            <Info label="تاریخ اتمام گارانتی">{data.expireDate}</Info>
            <Info label="شماره قرارداد">{data.contractNumber}</Info>
        </div> */}

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-100 border border-gray-300 rounded-full text-sm hover:bg-gray-200">
            خروج، متوجه شدم!
          </button>
        </div>
      </div>
    </div>
  )
}

const Info = ({ label, children }) => (
  <div>
    <div className="font-semibold text-gray-700 bg-gray-100 px-2 py-1 rounded">{label}</div>
    <div className="px-2 py-1">{children}</div>
  </div>
)

export default WarrantySuccessModal
