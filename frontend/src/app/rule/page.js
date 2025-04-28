import Content from '@/components/section/rule/Content'
import axios from 'axios'
import Head from 'next/head'
const LOCAL_API_URL = process.env.LOCAL_API_BASE_URL
export const metadata = {
  title: 'قوانین و مقررات | گروه تجاری بامداد',
  description: 'درباره گروه تجاری بامداد و تاریخچه و خدمات آن.',
}
export default async function Rule() {
  let rule = null
  try {
    const response = await axios.get(`${LOCAL_API_URL}/rule/`)
    console.log(response.data)
    rule = response.data
  } catch (error) {
    console.error('Error fetching rule:', error)
  }

  return (
    <>
      <Head>
        <title>عنوان صفحه</title>
        <meta name="description" content="توضیحات صفحه" />
        <meta name="keywords" content="کلمات کلیدی, جدا شده با کاما" />
        <meta property="og:title" content="عنوان برای Open Graph" />
        <meta property="og:description" content="توضیحات برای Open Graph" />
        <meta property="og:image" content="لینک به تصویر برای Open Graph" />
        <meta property="og:url" content="URL صفحه" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="عنوان برای Twitter" />
        <meta name="twitter:description" content="توضیحات برای Twitter" />
        <meta name="twitter:image" content="لینک به تصویر برای Twitter" />
      </Head>

      <Content rule={rule?.data.body} />
    </>
  )
}
