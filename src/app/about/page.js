import Content from '@/components/section/about/Content'
import Hero from '@/components/section/about/Hero'
import { mockAbout } from '@/data/mockContent'

export const metadata = {
  title: 'درباره ما | کوشا الکتریک بامداد',
  description: 'درباره کوشا الکتریک بامداد و تاریخچه و خدمات آن.',
}

export default function About() {
  const about = mockAbout.data

  return (
    <>
      <Hero aboutTitle={about.about_title} aboutSlug={about.about_slug} />
      <Content aboutUs={about.about_us} whyUs={about.why_us} />
    </>
  )
}
