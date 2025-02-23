export default function Product(){
    return(
        <article
              className="hover:bg-orange-100 transition-all delay-200 relative bg-white rounded-lg flex flex-col px-6 py-5 justify-around gap-3 border border-gray-200"
            >
              <div
                className="w-full h-52 flex items-center justify-center relative"
              >
                <img
                  className="w-2/3 h-2/3"
                  src="/assets/images/product4.png"
                  alt="./assets/images/product4.png"
                  
                />
              </div>
              <div className="text-sm font-medium text-gray-500 text-justify">
                <h3>
                  موبایل اپل مدل iPhone 14 ظرفیت 128 گیگابایت و رم 4 گیگابایت...
                </h3>
              </div>
              <div>
                <h3 className="text-base font-semibold text-right pt-4 w-full">
                  69,200,000 تومان
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