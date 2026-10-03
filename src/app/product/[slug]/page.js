import Swiper from '@/components/Swiper'
import Comments from '@/components/section/product/Comments'
import Details from '@/components/section/product/Details'
import Introduction from '@/components/section/product/Introduction'
import Specs from '@/components/section/product/Specs'
import Tab from '@/components/section/product/Tab'
import {
  getProductBySlug,
  getRelatedProducts,
} from '@/lib/products'
import Link from 'next/link'
import { Routes } from '@/route/routes'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const product = getProductBySlug(slug)?.data?.[0]

  if (!product) {
    return { title: 'محصول پیدا نشد' }
  }

  return {
    title: `${product.product_title} | فروشگاه بامداد`,
    description: product.product_description,
  }
}

export default async function Product({ params }) {
  const { slug } = await params
  const productResult = getProductBySlug(slug)
  const productItem = productResult?.data?.[0] ?? null

  let relatedProducts = []
  if (productItem?.product_category?.id) {
    relatedProducts = getRelatedProducts(
      productItem.product_category.id,
      productItem.product_slug
    )
  }

  return (
    <section className="relative mx-auto max-w-screen-xl px-4 pb-16 pt-8 antialiased md:pb-20 lg:px-0">
      <div className="pointer-events-none absolute -top-10 left-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(253,168,40,0.12)_0%,transparent_70%)] blur-2xl" />

      {!productItem && (
        <div className="flex flex-col items-center gap-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-neutral-800">
            محصولی یافت نشد
          </h1>
          <p className="text-neutral-500">
            ممکن است لینک محصول اشتباه باشد یا محصول حذف شده باشد.
          </p>
          <Link
            href={Routes.store}
            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            بازگشت به فروشگاه
          </Link>
        </div>
      )}

      {productItem && (
        <div className="relative w-full">
          <Details data={productItem} />

          <section className="mt-12 text-justify">
            <Tab />
            <Introduction data={productItem.product_description} />
            <Specs data={productItem.speces} />
            <Comments
              data={productItem.comments}
              productId={productItem.id}
              slug={productItem.product_slug}
            />
          </section>

          <div className="w-full py-12">
            <Swiper
              title="محصولات مرتبط"
              data={relatedProducts?.data ?? []}
            />
          </div>
        </div>
      )}
    </section>
  )
}
