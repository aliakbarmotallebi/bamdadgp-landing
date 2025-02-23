import Pagination from "@/components/Pagination";
import Hero from "@/section/store/Hero";
import Product from "@/section/store/Product";

export default function Store() {
  const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    return(
        <>
        <Hero />
      <section
        className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"
      >
        <div className="bg-white rounded-2xl">
          <div
            className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 px-1 rounded-2xl py-5"
          >
          {
            
            items.map((item,index)=>(
              <Product key={index} />
            ))

          }  
          

          </div>
        </div>
        <Pagination />
        </section>
        </>
    )
}