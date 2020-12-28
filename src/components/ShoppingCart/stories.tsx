import { Story, Meta } from '@storybook/react/types-6-0'
import ShoppingCart, { ShoppingCartProps } from '.'
import mock from 'products/mock'

const products = mock.map((p) => {
  return {
    ...p,
    storybook: true,
    image:
      'https://res.cloudinary.com/dwzl1jzpj/image/upload/v1608583802/the_witcher_iii_wild_hunt_96160d093d.png'
  }
})

export default {
  title: 'ShoppingCart',
  component: ShoppingCart
} as Meta

export const Default: Story<ShoppingCartProps> = (args) => (
  <div style={{ maxWidth: '26rem' }}>
    <ShoppingCart {...args} />
  </div>
)

export const Empty: Story<ShoppingCartProps> = (args) => (
  <div style={{ maxWidth: '26rem' }}>
    <ShoppingCart {...args} />
  </div>
)

Default.args = {
  products
}

Default.parameters = {
  layout: 'centered'
}

Empty.args = {
  products: []
}

Empty.parameters = {
  layout: 'centered'
}
