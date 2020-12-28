import { Story, Meta } from '@storybook/react/types-6-0'
import GameListMobile, { MenuProps } from '.'

export default {
  title: 'GameListMobile',
  component: GameListMobile
} as Meta

export const Default: Story<MenuProps> = (args) => <GameListMobile {...args} />
