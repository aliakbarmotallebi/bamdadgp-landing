import Pagination from '@/components/Pagination'
import Hero from '@/components/section/store/Hero'
import ProductItem from '@/components/section/store/ProductItem'
import { getProducts } from '@/lib/products'
import { paginationHandler } from '@/utils/paginationHandler'

export const metadata = {
  title: 'فروشگاه | کوشا الکتریک بامداد',
  description:
    'خرید لوازم خانگی با گارانتی معتبر از فروشگاه کوشا الکتریک بامداد.',
}

export default async function Store({ searchParams }) {
  const params = await searchParams
  const currentPage = parseInt(params.page) || 1
  const limit = 8
  const products = getProducts({ page: currentPage, limit })
  const total = products.meta.pagination.pageCount

  paginationHandler(params.page || 1, total)

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(253,168,40,0.18)_0%,transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute top-40 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(253,68,25,0.08)_0%,transparent_70%)] blur-2xl" />

      <Hero />

      <section className="relative mx-auto max-w-screen-xl px-4 pb-20 pt-4 lg:px-0">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">
              محصولات منتخب بامداد
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              {products.meta.pagination.total} محصول با گارانتی و خدمات پس از فروش
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products?.data?.length > 0 ? (
            products.data.map(product => (
              <ProductItem key={product.id} productItem={product} />
            ))
          ) : (
            <div className="col-span-full flex h-40 items-center justify-center rounded-2xl bg-stone-50">
              <h2 className="text-2xl font-bold text-stone-500">
                محصولی موجود نمی‌باشد.
              </h2>
            </div>
          )}
        </div>

        <Pagination currentPage={currentPage} totalPage={total} />
      </section>
    </div>
  )
}
