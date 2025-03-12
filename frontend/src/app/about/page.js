import Content from '@/components/section/about/Content'
import Hero from '@/components/section/about/Hero'
import axios from 'axios'
import Head from 'next/head'
const LOCAL_API_URL = process.env.LOCAL_API_BASE_URL
export const metadata = {
  title: 'درباره ما | گروه تجاری بامداد',
  description: 'درباره گروه تجاری بامداد و تاریخچه و خدمات آن.',
}
export default async function About() {
  let about = null
  try {
    const response = await axios.get(`${LOCAL_API_URL}/about/`)
    about = response.data
  } catch (error) {
    console.error('Error fetching about:', error)
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
      <Hero
        aboutTitle={about?.data.about_title}
        aboutSlug={about?.data.about_slug}
      />
      <Content aboutUs={about?.data.about_us} whyUs={about?.data.why_us} />
    </>
  )
}
