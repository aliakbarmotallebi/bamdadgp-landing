'use client'
import useProductStore from "@/stores/product";

export default function Specs({data}){
    const {activeTab} = useProductStore();
    return (
        <div className={`${activeTab == 2 ? 'block' : 'hidden'} mt-6`}>
                    <div className="pt-4 text-orange-900 font-semibold text-base">
                    مشخصات فنی محصول
                    </div>
                    <div
                    className="text-gray-500 text-sm grid grid-cols-1 gap-x-3 md:grid-cols-2"
                    >
                    {
                        data.speces.map((item,index)=>(
                        <div
                            key={index}
                            className="flex items-center justify-between bg-gray-50 p-3 w-full my-3 mx-auto rounded-lg"
                        >
                            <div className="text-base font-normal">{item.attr_title.title}:</div>
                            <div className="">{item.attr_value.value}</div>
                        </div>
                        ))
                    }
                    
                    </div>
                </div>
    )
}