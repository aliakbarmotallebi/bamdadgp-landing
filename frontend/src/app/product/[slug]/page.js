import Swiper from '@/components/Swiper'
import Comments from '@/components/section/product/Comments'
import Details from '@/components/section/product/Details'
import Introduction from '@/components/section/product/Introduction'
import Specs from '@/components/section/product/Specs'
import Tab from '@/components/section/product/Tab'
import axios from 'axios'
const LOCAL_API_URL = process.env.LOCAL_API_BASE_URL

export async function generateMetadata({ params }) {
  const { slug } = params
  let product = null
  try {
    const response = await axios.get(`${LOCAL_API_URL}/products/${slug}`, {
      headers: { 'Cache-Control': 'no-store' },
    })

    product = response?.data?.data[0]
    if (!product) {
      return { title: 'محصول پیدا نشد' }
    }

    return {
      title: product.product_title,
    }
  } catch (error) {
    console.error('Product Meta Error:', error)
    return {
      title: 'محصول',
    }
  }
}

export default async function Product({ params }) {
  const { slug } = params
  let product = null
  let relatedProducts = []

  try {
    const response = await axios.get(`${LOCAL_API_URL}/products/${slug}`, {
      headers: { 'Cache-Control': 'no-store' },
    })
    product = response.data
  } catch (error) {
    console.error('Error fetching products:', error)
  }

  const productItem = product?.data?.[0] ?? null
  if (productItem?.product_category?.id) {
    try {
      const catId = productItem.product_category.id
      const response = await axios.get(
        `${LOCAL_API_URL}/products/${slug}/related?cat_id=${catId}`,
        {
          headers: { 'Cache-Control': 'no-store' },
        }
      )
      relatedProducts = response.data
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  return (
    <>
      <section className="pb-8 antialiased md:pb-16 pt-8 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div className="mx-4 lg:mx-0 w-full">
          {/* اگر محصول نبود */}
          {!productItem && (
            <div className="text-center py-20 text-red-600 text-lg">
              محصولی یافت نشد یا سرور در دسترس نیست.
            </div>
          )}

          {productItem && (
            <>
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

              <div className="py-12 w-full">
                <Swiper
                  title={'محصولات مرتبط'}
                  data={relatedProducts?.data ?? []}
                />
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
