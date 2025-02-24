export default function Product({productItem}){
    return(
        <article
              className="hover:bg-orange-100 transition-all delay-200 relative bg-white rounded-lg flex flex-col px-6 py-5 justify-around gap-3 border border-gray-200"
            >
              <span className="absolute z-10 top-4 left-4 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">{productItem.product_category.cat_title}</span>
              <div
                className="w-full h-52 flex items-center justify-center relative"
              >
                <img
                  className="max-h-full rounded-md"
                  src={process.env.NEXT_PUBLIC_BASE_URL+productItem.product_image.formats.small.url}
                  alt={productItem.product_image.formats.small.url}
                  
                />
              </div>
              <div className="text-sm font-medium text-gray-500 text-justify">
                <h3>
                  {productItem.product_title}
                </h3>
              </div>
              <div>
                <h3 className="text-base font-semibold text-left pt-2 w-full">
                  {Number(productItem.product_price)?.toLocaleString('fa-IR')} تومان
                </h3>
              </div>
              <a
                href="./single-product.html"
                className="mt-8 block w-full bg-neutral-800 rounded-md py-2 text-sm font-semibold text-white text-center border-b-4 border-neutral-900 hover:opacity-40"
              >
                جهت خرید تماس بگیرید
              </a>
            </article>
    )
}