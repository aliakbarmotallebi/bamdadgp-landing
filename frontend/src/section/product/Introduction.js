'use client'
import useProductStore from "@/stores/product";
import ReactMarkdown from 'react-markdown'

export default function Introduction({data}){
    const {activeTab} = useProductStore();
    return (
        <>
                <div className={`${activeTab == 1 ? 'block' : 'hidden'} mt-6`} >
                    <div className="pt-4 text-orange-900 font-semibold text-base">
                    معرفی کوتاه محصول
                    </div>
                    <div className="pt-4 text-gray-700">
                    <ReactMarkdown>{data}</ReactMarkdown> 
                    </div>
                </div>
        </>
    )
}