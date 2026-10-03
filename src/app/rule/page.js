import Content from '@/components/section/rule/Content'
import { mockRule } from '@/data/mockContent'

export const metadata = {
  title: 'قوانین و مقررات | کوشا الکتریک بامداد',
  description: 'قوانین و مقررات فروشگاه و خدمات کوشا الکتریک بامداد.',
}

export default function Rule() {
  return <Content body={mockRule.data.body} />
}
