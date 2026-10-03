'use client';
import useProductStore from "@/stores/product"

export default function Tab(){
    const {activeTab,changeTab} = useProductStore();
    return (
        <>
            <div className="container mx-auto">
                            <div className="">
                                <ul
                                className="flex gap-6 font-semibold text-sm justify-center items-center"
                                >
                                <li>
                                    <button
                                    onClick={()=>changeTab(1)}
                                    className={`${activeTab === 1?'text-orange-600 !border-orange-600':'text-gray-500'} hover:border-orange-600 border-b-2 border-transparent hover:text-orange-600 pb-4 transition-all duration-200`}
                                    >
                                    درباره محصول
                                    </button>
                                </li>
                                <li>
                                    <button
                                    onClick={()=>changeTab(2)}
                                    className={`${activeTab === 2?'text-orange-600 !border-orange-600':'text-gray-500'} hover:border-orange-600 border-b-2 border-transparent hover:text-orange-600 pb-4 transition-all duration-200`}
                                    >
                                    مشخصات
                                    </button>
                                </li>
                                <li>
                                    <button
                                    onClick={()=>changeTab(3)}
                                    className={`${activeTab === 3?'text-orange-600 !border-orange-600':'text-gray-500'} hover:border-orange-600 border-b-2 border-transparent hover:text-orange-600 pb-4 transition-all duration-200`}
                                    >
                                    دیدگاه ها
                                    </button>
                                </li>
                                </ul>
                            </div>
                            <div className="h-px w-full bg-gray-300"></div>
                            </div>
        </>
    )
}