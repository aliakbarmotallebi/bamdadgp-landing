'use client';
import useProductStore from "@/stores/product";
import moment from "moment";
import 'moment/locale/fa';
import CommentForm from "./CommentForm";

moment.locale('fa');
export default function Comments({data,productId}){
    const {activeTab} = useProductStore();
    
    const timeAgo = (dateTime)=>{
        return moment(dateTime).fromNow();
    }

    return (
        <div className={activeTab == 3 ? 'block' : 'hidden'} >
            <section className="mt-6">
                    <div className="flex justify-between">
                    <div className="pt-4 text-orange-900 font-semibold text-base">
                        <h2>دیدگاه ها</h2>
                    </div>
                    <div className="text-gray-700 text-base font-normal">
                        <h2>23 دیدگاه</h2>
                    </div>
                    </div>
                    <div
                    className="pt-6 flex flex-col gap-12 mt-3 border-t border-gray-200"
                    >
                    
                    {
                        data.map((item,index)=>(
                        
                            <div key={index} className="flex flex-col gap-1">
                                <div className="flex items-center gap-3">
                                <div
                                    className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full"
                                >
                                    <svg
                                    className="absolute w-12 h-12 text-gray-400 -left-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clipRule="evenodd"
                                    ></path>
                                    </svg>
                                </div>

                                <h2 className="text-gray-500 text-sm font-normal">
                                    {item.comment_full_name}
                                    <span className="text-base mx-2 before:content-['-']">
                                    {timeAgo(item.createdAt)}
                                    </span>
                                </h2>
                                </div>
                                <div className="pr-8">
                                <p className="text-gray-900 text-sm font-normal">
                                 {item.comment_body}
                                </p>
                                </div>
                            </div>
                            
                        ))
                    }

                    </div>
                </section>
                <CommentForm productId={productId} />
        </div>
    )
}