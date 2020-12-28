import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { storeWrapper } from 'redux-local'

addDecorator(withNextRouter())
addDecorator(storeWrapper.withRedux())

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
