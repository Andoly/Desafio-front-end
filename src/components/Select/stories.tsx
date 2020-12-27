import { Story, Meta } from '@storybook/react/types-6-0'
import Select, { SelectProps } from '.'
import options from './mock'

export default {
  title: 'Select',
  component: Select
} as Meta

export const Default: Story<SelectProps> = (args) => <Select {...args} />

Default.args = {
  options
}
