import Content from '@/components/section/rule/Content'
import { mockRule } from '@/data/mockContent'

export const metadata = {
  title: 'قوانین و مقررات | گروه تجاری بامداد',
  description: 'قوانین و مقررات فروشگاه و خدمات گروه تجاری بامداد.',
}

export default function Rule() {
  return <Content body={mockRule.data.body} />
}
