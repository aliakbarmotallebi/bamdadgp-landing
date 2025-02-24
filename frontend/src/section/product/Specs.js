'use client'
import useProductStore from "@/stores/product";

export default function Specs(){
    const {activeTab} = useProductStore();
    return (
        <div className={`${activeTab == 3 ? 'block' : 'hidden'} mt-6`}>
                    <div className="pt-4 text-orange-900 font-semibold text-base">
                    مشخصات فنی محصول
                    </div>
                    <div
                    className="text-gray-500 text-sm grid grid-cols-1 gap-x-3 md:grid-cols-2"
                    >
                    <div
                        className="flex items-center justify-between bg-gray-50 p-3 w-full my-3 mx-auto rounded-lg"
                    >
                        <div className="text-base font-normal">پردازنده:</div>
                        <div className="text-xs">AM32x new product</div>
                    </div>
                    <div
                        className="flex items-center justify-between bg-gray-50 p-3 w-full my-3 mx-auto rounded-lg"
                    >
                        <div className="text-base font-normal">فرکانس پردازنده:</div>
                        <div className="text-xs">32HR</div>
                    </div>
                    <div
                        className="flex items-center justify-between bg-gray-50 p-3 w-full my-3 mx-auto rounded-lg"
                    >
                        <div className="text-base font-normal">وزن:</div>
                        <div className="text-xs">230 گرم</div>
                    </div>
                    <div
                        className="flex items-center justify-between bg-gray-50 p-3 w-full my-3 mx-auto rounded-lg"
                    >
                        <div className="text-base font-normal">نسخه بلوتوث:</div>
                        <div className="text-xs">7r</div>
                    </div>
                    <div
                        className="flex items-center justify-between bg-gray-50 p-3 w-full my-3 mx-auto rounded-lg"
                    >
                        <div className="text-base font-normal">نسخه وای فای:</div>
                        <div className="text-xs">3prm new test</div>
                    </div>
                    <div
                        className="flex items-center justify-between bg-gray-50 p-3 w-full my-3 mx-auto rounded-lg"
                    >
                        <div className="text-base font-normal">سیستم عامل:</div>
                        <div className="text-xs">IOS</div>
                    </div>
                    <div
                        className="flex items-center justify-between bg-gray-50 p-3 w-full my-3 mx-auto rounded-lg"
                    >
                        <div className="text-base font-normal">پردازنده گرافیکی:</div>
                        <div className="text-xs">Hiliston 7200</div>
                    </div>
                    <div
                        className="flex items-center justify-between bg-gray-50 p-3 w-full my-3 mx-auto rounded-lg"
                    >
                        <div className="text-base font-normal">دوربین جلو:</div>
                        <div className="text-xs">12 MP</div>
                    </div>
                    <div
                        className="flex items-center justify-between bg-gray-50 p-3 w-full my-3 mx-auto rounded-lg"
                    >
                        <div className="text-base font-normal">دوربین عقب:</div>
                        <div className="text-xs">24MP</div>
                    </div>
                    </div>
                </div>
    )
}