import { Story, Meta } from '@storybook/react/types-6-0'
import ProductSideCard, { SideCardProps } from '.'

export default {
  title: 'ProductSideCard',
  component: ProductSideCard,
  args: {
    id: 312,
    name: 'Super Mario Odyssey',
    price: '197.88',
    score: 100,
    image: './assets/super-mario-odyssey.png'
  }
} as Meta

export const Default: Story<SideCardProps> = (args) => (
  <ProductSideCard {...args} />
)
