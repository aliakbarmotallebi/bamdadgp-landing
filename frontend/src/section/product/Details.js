export default function Details({data}){
    const { 
        product_title,
        product_price,
        product_stock,
        product_category,
        product_image
    } = data;
    return (
        <>
        <article className="pt-6">
                <div className="flex gap-8">
                <section className="flex gap-6">
                    <div className="mx-auto">
                    <div className="relative">
                        <div
                        className="flex items-center justify-center p-3 md:w-[466px] md:h-[466px] bg-white shadow-md hover:shadow-sm transition-all duration-200 lg:border border-gray-200 rounded-xl"
                        >
                        <img
                            src={process.env.NEXT_PUBLIC_BASE_URL+product_image?.url}
                            className="object-cover w-full"
                        />
                        </div>
                    </div>
                    </div>
                </section>
                <section className="space-y-4 mt-5">
                    <div className="text-neutral-600 text-lg font-normal">
                    <span className="after:content-[':']">دسته بندی</span>
                    <a href="./category.html"> {product_category.cat_title} </a>
                    </div>
                    <h2 className="text-xl font-bold">
                        {product_title}
                    </h2>
                    <div className="border-y border-gray-200 py-4">
                    <div className="inline-flex items-center">
                        <svg
                        width="20"
                        className="inline ml-2"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <g clipPath="url(#clip0_3058_1781)">
                            <path
                            d="M10.0001 18.3333C14.6025 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39762 14.6025 1.66666 10.0001 1.66666C5.39771 1.66666 1.66675 5.39762 1.66675 10C1.66675 14.6024 5.39771 18.3333 10.0001 18.3333Z"
                            stroke="#9CA3AF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            ></path>
                            <path
                            d="M10 6.66666V10"
                            stroke="#9CA3AF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            ></path>
                            <path
                            d="M10 13.3333H10.0083"
                            stroke="#9CA3AF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_3058_1781">
                            <rect width="20" height="20" fill="white"></rect>
                            </clipPath>
                        </defs>
                        </svg>
                        <p className="text-sm md:text-base font-normal text-gray-700">
                        میتونین در اولین زمان از شروع حراج و تخفیف های بامداد با
                        خبر بشین!
                        </p>
                    </div>
                    <div className="flex items-center gap-3 pr-0.5">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className="text-base text-gray-900 font-normal"
                        >به من اطلاع بده</label
                        >
                    </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-lg text-gray-800">قیمت:</span>
                        <div className="flex gap-1 text-xl text-orange-600">
                            <strong>{Number(product_price).toLocaleString()}</strong>
                            <strong>تومان</strong>
                        </div>
                    </div>
                    <div className="flex items-center">
                    <div className="mr-auto">
                        <button
                        type="submit"
                        className="w-auto block bg-neutral-700 rounded-md text-sm font-semibold text-white text-center border-b-4 hover:opacity-40 border-neutral-900 py-2 px-2.5"
                        >
                        جهت خرید تماس بگیرید
                        </button>
                    </div>
                    </div>
                    <div
                    className="border border-gray-100 rounded-lg py-2 px-3 flex items-center"
                    >
                    <div>ارسال رایگان برای خرید بالای 500 هزار تومان</div>
                    <div className="mr-auto">
                        <svg
                        width="132"
                        height="76"
                        viewBox="0 0 132 76"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <g clipPath="url(#a)">
                            <g className="mix-blend-multiply" opacity=".8">
                            <path
                                d="M54 50V37l-4-2h-7l-4 2v13L24 62V31h-6v-4h-1v4h-2v4h-3v31h28l2-9a4 4 0 0 1 8 0l2 9h22L54 50Z"
                                fill="url(#b)"
                            ></path>
                            <path
                                d="M10 13v-1H9v-1H8l-1-1V-1L6 10l-1 1H4v1H3v1l2 3v1L4 63H3v3h7v-3H9L8 17v-1l2-3c1 0 0 0 0 0Z"
                                fill="url(#c)"
                            ></path>
                            <path
                                d="M29 17a2 2 0 0 0-2-2 4 4 0 0 0-6-1 2 2 0 0 0-4 1 1 1 0 0 0-2 2h14Z"
                                fill="url(#d)"
                            ></path>
                            <path
                                d="M62 13v1a2 2 0 0 0-4 0l-2 1h8l-2-2Z"
                                fill="url(#e)"
                            ></path>
                            <path
                                d="M47 24v1a1 1 0 0 0-2-1 2 2 0 0 0-4 0l-1 1h8l-1-1Z"
                                fill="url(#f)"
                            ></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="m68 55-7-4V27h1v-2h-4v-2h-8v2h-2v-3h-1v3h-3v2h1v33h-6v1h-9V23h1v-3l-16 7v1h1v31h-4V42l-13-4v4h-2V28h1v-2h-12v-3h-5v3h-1v2h1v24h-3V32h1v-3l-15 3h1v31h-2V44h-8v12h-8v7h-2V32h1v-1h-3v-5h-1v-2h-1v2h-1v2h-1v3h-1v-3h-1v3h-1v-5h-1v5h-1v23h-2v-3l-9-5v20H68V55ZM-57 33v10-10Zm84-5h-2v4h2v-4Zm-2 6h2v4h-2v-4Zm2 6h-2v4h2v-4Zm-2 6h2v4h-2v-4Zm2 5h-2v5h2v-5Zm-5-23h2v4h-2v-4Zm2 6h-2v4h2v-4Zm-2 6h2v4h-2v-4Zm2 6h-2v4h2v-4Zm-2 5h2v5h-2v-5Zm-1-23h-2v4h2v-4Zm-2 6h2v4h-2v-4Zm2 6h-2v4h2v-4Zm-2 6h2v4h-2v-4Zm2 5h-2v5h2v-5Zm-50-17h1v1h-1v-1Zm1 2h-1v1h1v-1Zm-1 1h1v1h-1v-1Zm1 2h-1v1h1v-1Zm-2-5h1v1h-1v-1Zm1 2h-1v1h1v-1Zm-1 1h1v1h-1v-1Zm1 2h-1v1h1v-1Zm-3-5h1v1h-1v-1Zm1 2h-1v1h1v-1Zm-1 1h1v1h-1v-1Zm1 2h-1v1h1v-1Zm-3-5h1v1h-1v-1Zm1 2h-1v1h1v-1Zm-1 1h1v1h-1v-1Zm1 2h-1v1h1v-1Z"
                                fill="url(#g)"
                            ></path>
                            </g>
                            <path fill="black" d="M18 51h78v11H18z"></path>
                            <ellipse
                            rx="6.7"
                            ry="6.7"
                            transform="matrix(-1 0 0 1 42.4002 61.7711)"
                            fill="black"
                            ></ellipse>
                            <ellipse
                            rx="6.7"
                            ry="6.7"
                            transform="matrix(-1 0 0 1 85.2583 61.7711)"
                            fill="black"
                            ></ellipse>
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M28 68h126v9L28 68Z"
                            fill="url(#h)"
                            ></path>
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m82 62-2-2-4-38h16c5 0 8 4 8 9v28c0 1-1 3-3 3H82Z"
                            fill="url(#i)"
                            ></path>
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M35 55c2 2 3 4 3 7h27a8 8 0 1 1 15 0h6V31c0-5-4-9-8-9H41c-3 0-6 3-6 7v26Z"
                            fill="url(#j)"
                            ></path>
                            <g className="mix-blend-overlay">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M78 22h14c5 0 8 4 8 9v28c0 1-1 3-3 3H80a8 8 0 1 0-15 0H38c0-3-1-5-3-7V29c0-4 3-7 6-7h37Z"
                                fill="#E6123D"
                            ></path>
                            </g>
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M70 36h4v-3h-5l-1 1v10l1 1h5v-2h-4v-3h2v-2h-2v-2Zm4 14v-3H46v3h28ZM62 33h5v3h-4v2h2v2h-2v3h4v2h-5l-1-1V34l1-1Zm-14 3h3v-3h-4l-1 1v11h2v-5h2v-2h-2v-2Zm8-3a3 3 0 0 1 2 7l2 4v1h-3v-1c0-2-1-3-2-3v-1 5h-2V34l1-1h2Zm-1 3h1a1 1 0 0 1 0 2h-1v-2Z"
                            fill="white"
                            ></path>
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m15 60 2 2h6a8 8 0 0 1 12-7V29h-2c-4 0-8 2-10 6l-8 13v12Z"
                            fill="url(#k)"
                            ></path>
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m20 43 1 1h9l1-1v-9l-1-1h-4l-1 1-5 9Z"
                            fill="white"
                            ></path>
                            <ellipse
                            rx="6.7"
                            ry="6.7"
                            transform="matrix(-1 0 0 1 73.3806 61.7711)"
                            fill="black"
                            ></ellipse>
                            <ellipse
                            rx="6.7"
                            ry="6.7"
                            transform="matrix(-1 0 0 1 31.5562 61.7711)"
                            fill="black"
                            ></ellipse>
                            <ellipse
                            rx="6.7"
                            ry="6.7"
                            transform="matrix(-1 0 0 1 72.3487 61.7711)"
                            fill="#243560"
                            ></ellipse>
                            <ellipse
                            rx="6.7"
                            ry="6.7"
                            transform="matrix(-1 0 0 1 30.5224 61.7711)"
                            fill="#243560"
                            ></ellipse>
                            <ellipse
                            rx="4.1"
                            ry="4.1"
                            transform="matrix(-1 0 0 1 72.3512 61.771)"
                            fill="#566CA2"
                            ></ellipse>
                            <ellipse
                            rx="4.1"
                            ry="4.1"
                            transform="matrix(-1 0 0 1 30.5252 61.771)"
                            fill="#566CA2"
                            ></ellipse>
                            <path
                            d="m15 55 1-1h3a2 2 0 1 1 0 4h-3l-1-1v-2Z"
                            fill="#AAAAAA"
                            ></path>
                            <path
                            d="m14 55 1-1h3a2 2 0 0 1 0 4h-3l-1-1v-2Z"
                            fill="#D8D8D8"
                            ></path>
                        </g>
                        <defs>
                            <linearGradient
                            id="b"
                            x1="73.6"
                            y1="3.8"
                            x2="-59.9"
                            y2="3.8"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="white"></stop>
                            <stop offset=".5" stopColor="#DBF0F2"></stop>
                            <stop offset="1" stopColor="white"></stop>
                            </linearGradient>
                            <linearGradient
                            id="c"
                            x1="73.6"
                            y1="-540.3"
                            x2="-59.9"
                            y2="-540.3"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="white"></stop>
                            <stop offset=".5" stopColor="#DBF0F2"></stop>
                            <stop offset="1" stopColor="white"></stop>
                            </linearGradient>
                            <linearGradient
                            id="d"
                            x1="73.6"
                            y1="-4.5"
                            x2="-59.9"
                            y2="-4.5"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="white"></stop>
                            <stop offset=".5" stopColor="#DBF0F2"></stop>
                            <stop offset="1" stopColor="white"></stop>
                            </linearGradient>
                            <linearGradient
                            id="e"
                            x1="73.6"
                            y1="-7.9"
                            x2="-59.9"
                            y2="-7.9"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="white"></stop>
                            <stop offset=".5" stopColor="#DBF0F2"></stop>
                            <stop offset="1" stopColor="white"></stop>
                            </linearGradient>
                            <linearGradient
                            id="f"
                            x1="73.6"
                            y1="-2.4"
                            x2="-59.9"
                            y2="-2.4"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="white"></stop>
                            <stop offset=".5" stopColor="#DBF0F2"></stop>
                            <stop offset="1" stopColor="white"></stop>
                            </linearGradient>
                            <linearGradient
                            id="g"
                            x1="68.5"
                            y1="20.1"
                            x2="-77"
                            y2="20.1"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="white"></stop>
                            <stop offset=".5" stopColor="#9CBDCD"></stop>
                            <stop offset="1" stopColor="white"></stop>
                            </linearGradient>
                            <linearGradient
                            id="h"
                            x1="30.4"
                            y1="72.7"
                            x2="154"
                            y2="72.7"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopOpacity=".5"></stop>
                            <stop offset=".7" stopOpacity="0"></stop>
                            </linearGradient>
                            <linearGradient
                            id="i"
                            x1="110.6"
                            y1="22"
                            x2="110.6"
                            y2="61.8"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="#909090"></stop>
                            <stop offset="1" stopColor="#575757"></stop>
                            </linearGradient>
                            <linearGradient
                            id="j"
                            x1="86.3"
                            y1="61.8"
                            x2="47.8"
                            y2="11.8"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="#818181"></stop>
                            <stop offset=".4" stopColor="#939393"></stop>
                            <stop offset="1" stopColor="#C7C7C7"></stop>
                            </linearGradient>
                            <linearGradient
                            id="k"
                            x1="22.9"
                            y1="59"
                            x2="16.3"
                            y2="34.4"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop offset="0" stopColor="#D69102"></stop>
                            <stop offset=".2" stopColor="#E69F00"></stop>
                            <stop offset="1" stopColor="#F3CB41"></stop>
                            </linearGradient>
                            <clipPath id="a">
                            <path
                                fill="white"
                                transform="translate(0 -1)"
                                d="M0 0h132v77H0z"
                            ></path>
                            </clipPath>
                        </defs>
                        </svg>
                    </div>
                    </div>
                </section>
                </div>
            </article>
        </>
    )
}