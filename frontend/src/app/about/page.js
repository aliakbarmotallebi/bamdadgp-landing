import Content from '@/components/section/about/Content'
import Hero from '@/components/section/about/Hero'
import axios from 'axios'
const LOCAL_API_URL = process.env.LOCAL_API_BASE_URL

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
      <Hero
        aboutTitle={about?.data.about_title}
        aboutSlug={about?.data.about_slug}
      />
      <Content aboutUs={about?.data.about_us} whyUs={about?.data.why_us} />
    </>
  )
}
