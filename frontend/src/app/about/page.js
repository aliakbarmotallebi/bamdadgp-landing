import { getAboutus } from '@/app/api/about'
import Content from '@/section/about/Content'
import Hero from '@/section/about/Hero'

export default async function About() {
  const { data } = await getAboutus()
  return (
    <>
      <Hero aboutTitle={data.about_title} aboutSlug={data.about_slug} />
      <Content aboutUs={data.about_us} whyUs={data.why_us} />
    </>
  )
}
