import { setCommentProduct } from "@/api/products"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';

export default function CommentForm({productId}){
    const [isLoading,setIsLoading] = useState(false)
    const [data,setData] = useState({
        comment_full_name:'',
        comment_subject:'',
        comment_body:'',
        product: productId
    })
    const handleSendComment = async()=>{
        setIsLoading(true)        
        const response = await setCommentProduct(data)
        if(response){
            toast("دیدگاه شما با موفقیت ارسال شد!");
            setData((prevState)=>(
                {
                    ...prevState,
                    comment_full_name:'',
                    comment_subject:'',
                    comment_body:''
                }
            ))
        }
        setIsLoading(false)
    }
    return (
        <section className="pt-12">
                    <div>
                        <form onSubmit={(event)=>event.preventDefault()}>
                        <div className="grid grid-cols-2 gap-4 py-6">
                            <div>
                            <input
                                type="text"
                                name="fullname"
                                placeholder="نام و نام خانوادگی"
                                value={data.comment_full_name}
                                onChange={(e)=>setData((prevState)=>({...prevState,comment_full_name:e.target.value}))}
                                className="bg-gray-50 text-gray-600 outline-none border-2 border-gray-200 focus:border-gray-500 transition-all duration-200 placeholder:text-grounded-lgy-400 placeholder:text-sm placeholder:font-normal text-sm font-normal w-full px-3 py-3 rounded-md"
                            />
                            </div>
                            <div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="عنوان دیدگاه"
                                value={data.comment_subject}
                                onChange={(e)=>setData((prevState)=>({...prevState,comment_subject:e.target.value}))}
                                className="bg-gray-50 text-gray-600 outline-none border-2 border-gray-200 focus:border-gray-500 transition-all duration-200 placeholder:text-grounded-lgy-400 placeholder:text-sm placeholder:font-normal text-sm font-normal w-full px-3 py-3 rounded-md"
                            />
                            </div>
                            <div className="col-span-2">
                            <textarea
                                name="body"
                                id=""
                                cols="10"
                                rows="5"
                                placeholder="متن دیدگاه"
                                value={data.comment_body}
                                onChange={(e)=>setData((prevState)=>({...prevState,comment_body:e.target.value}))}
                                className="bg-gray-50 text-gray-600 outline-none border-2 border-gray-200 focus:border-gray-500 transition-all duration-200 placeholder:text-gray-400 placeholder:text-sm placeholder:font-normal text-sm font-normal w-full px-3 py-3 rounded-md"
                            ></textarea>
                            </div>
                            <div className="col-span-2 justify-self-end">
                            <button
                                onClick={handleSendComment}
                                type="button"
                                className={`${isLoading?'opacity-40 cursor-not-allowed':''} bg-stone-800 text-white  ring-2 ring-transparent focus:outline-none hover:opacity-40 focus:!ring-stone-400 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2`}
                            >

                                <svg aria-hidden="true" role="status" className={`${isLoading?'inline':'hidden'} w-4 h-4 me-3 text-white animate-spin`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                </svg>
                                
                                <span className={`${isLoading?'hidden':'inline'}`}> ارسال دیدگاه </span>
                                <span className={`${isLoading?'inline':'hidden'}`}> در حال ارسال دیدگاه </span>
                            </button>
                            </div>
                        </div>
                        </form>
                    </div>

                    <ToastContainer position="bottom-right" />
                </section>
    )
}