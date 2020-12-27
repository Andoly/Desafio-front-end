import { Story, Meta } from '@storybook/react/types-6-0'
import ProductMainCard, { CardProps } from '.'

export default {
  title: 'ProductMainCard',
  component: ProductMainCard,
  args: {
    id: 312,
    name: 'Super Mario Odyssey',
    price: '197.88',
    score: 100,
    image: './assets/super-mario-odyssey.png'
  }
} as Meta

export const Default: Story<CardProps> = (args) => (
  <div style={{ width: '26.2rem' }}>
    <ProductMainCard {...args} />
  </div>
)
