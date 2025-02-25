import { getProducts } from "@/api/products";
import Pagination from "@/components/Pagination";
import Hero from "@/section/store/Hero";
import ProductItem from "@/section/store/ProductItem";

export default async function Store({ searchParams }) {
    const page = parseInt(searchParams.page) || 1;
    const limit = 2;
    const offset = (page - 1) * limit;
    const products = await getProducts(limit,offset)
    const total = products.meta.pagination.total / limit
    return(
        <>
        <Hero />
        <section
          className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"
        >
        <div className="bg-white rounded-2xl w-full">
          <div
            className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 px-1 rounded-2xl py-5"
          >
          {
            products.data.length > 0?
            products.data.map((product,index)=>(
              <ProductItem key={index} productItem={product} />
            ))
            :
            <div className="h-32 col-span-1 sm:col-span-2 lg:col-span-4 bg-slate-50 flex justify-center items-center">
              <h2 className="font-bold text-stone-600 text-3xl">محصولی موجود نمی باشد.</h2>
            </div>
          }  
          

          </div>
        </div>
        <Pagination currentPage={page} totalPage={total} />
        </section>
        </>
    )
}