import { Story, Meta } from '@storybook/react/types-6-0'
import GameList, { GameListProps } from '.'
import mock from 'products/mock'

const products = mock.map((p) => {
  return {
    ...p,
    image:
      'https://res.cloudinary.com/dwzl1jzpj/image/upload/v1608583802/the_witcher_iii_wild_hunt_96160d093d.png'
  }
})

export default {
  title: 'GameList',
  component: GameList
} as Meta

export const Default: Story<GameListProps> = (args) => (
  <div style={{ maxWidth: '90rem' }}>
    <GameList {...args} />
  </div>
)

export const Empty: Story<GameListProps> = (args) => (
  <div style={{ width: '90rem', maxWidth: '90rem' }}>
    <GameList {...args} />
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
