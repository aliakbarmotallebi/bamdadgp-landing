import Swiper from '@/components/Swiper'
import Comments from '@/components/section/product/Comments'
import Details from '@/components/section/product/Details'
import Introduction from '@/components/section/product/Introduction'
import Specs from '@/components/section/product/Specs'
import Tab from '@/components/section/product/Tab'
import axios from 'axios'
const LOCAL_API_URL = process.env.LOCAL_API_BASE_URL

export async function generateMetadata({ params, searchParams }) {
  const { slug } = params
  let product = null
  try {
    const response = await axios.get(`${LOCAL_API_URL}/products/${slug}`)
    product = response.data
    return {
      title: product?.data[0]?.product_title, // عنوان محصول
    }
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

export default async function Product({ params }) {
  const { slug } = params
  let product = null

  try {
    const response = await axios.get(`${LOCAL_API_URL}/products/${slug}`)
    product = response.data
  } catch (error) {
    console.error('Error fetching products:', error)
  }

  let relatedProducts = []
  if (product.data.length > 0) {
    try {
      const catId = product.data[0].product_category.id
      const response = await axios.get(
        `${LOCAL_API_URL}/products/${slug}/related?cat_id=${catId}`
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
          <Details data={product?.data[0]} />

          <section className="mt-12 text-justify">
            <Tab />
            <Introduction data={product?.data[0]?.product_description} />
            <Specs data={product?.data[0]?.speces} />
            <Comments
              data={product?.data[0].comments}
              productId={product?.data[0].id}
              slug={product?.data[0].product_slug}
            />
          </section>
          <div className="py-12 w-full">
            <Swiper title={'محصولات مرتبط'} data={relatedProducts?.data} />
          </div>
        </div>
      </section>
    </>
  )
}
