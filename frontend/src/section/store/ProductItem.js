import { Routes } from "@/route/routes";

export default function ProductItem({productItem}){

    return(
        <article
              className="group hover:bg-orange-100 transition-all delay-200 relative bg-white rounded-lg flex flex-col px-6 py-5 justify-around gap-3 border border-gray-200"
            >
              <span className="absolute z-10 top-4 group-hover:bg-orange-100 transition-all delay-200 left-0 inline-flex items-center rounded-md -rotate-[40deg] bg-white px-2 py-1 text-xs font-medium text-gray-600">{productItem.product_category.cat_title}</span>
              <div
                className="w-full h-44 flex items-center justify-center relative"
              >
                <img
                  className="h-full rounded-md"
                  src={process.env.NEXT_PUBLIC_BASE_URL+productItem.product_image?.formats.small.url}
                  alt={productItem.product_title}
                  
                />
              </div>
              <div className="text-sm font-medium text-gray-500 text-justify">
              <a
                href={Routes.product+'/'+productItem.product_slug}
                className="font-medium"
              >
                <h3>
                  {productItem.product_title}
                </h3>
                </a>
              </div>
              <div>
                <h3 className="text-base font-semibold text-left pt-2 w-full">
                  {Number(productItem.product_price)?.toLocaleString('fa-IR')} تومان
                </h3>
              </div>
              <a
                href={Routes.product+'/'+productItem.product_slug}
                className="mt-8 block w-full bg-neutral-800 rounded-md py-2 text-sm font-semibold text-white text-center border-b-4 border-neutral-900 hover:opacity-40"
              >
                جهت خرید تماس بگیرید
              </a>
            </article>
    )
}