import Pagination from '@/components/Pagination'
import Hero from '@/components/section/store/Hero'
import ProductItem from '@/components/section/store/ProductItem'
import { paginationHandler } from '@/utils/paginationHandler'
import axios from 'axios'
const LOCAL_API_URL = process.env.LOCAL_API_BASE_URL

export default async function Store({ searchParams }) {
  const params = await searchParams
  const currentPage = parseInt(params.page) || 1
  const limit = 20
  const offset = (currentPage - 1) * limit
  let products = null
  let total = null

  try {
    const response = await axios.get(
      `${LOCAL_API_URL}/products?limit=${limit}&page=${offset}`
    )
    products = response.data
    total = Math.ceil(products.meta.pagination.total / limit)
    paginationHandler(params.page, total)
  } catch (error) {
    console.error('Error fetching products:', error)
  }

  return (
    <>
      <Hero />
      <section className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div className="bg-white rounded-2xl w-full">
          <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 px-1 rounded-2xl py-5">
            {products.data?.length > 0 ? (
              products.data.map((product, index) => (
                <ProductItem key={index} productItem={product} />
              ))
            ) : (
              <div className="h-32 col-span-1 sm:col-span-2 lg:col-span-4 bg-slate-50 flex justify-center items-center">
                <h2 className="font-bold text-stone-600 text-3xl">
                  محصولی موجود نمی باشد.
                </h2>
              </div>
            )}
          </div>
        </div>

        <Pagination currentPage={currentPage} totalPage={total} />
      </section>
    </>
  )
}
