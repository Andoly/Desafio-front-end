import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/open-sans-v18-latin-regular.eot'); /* IE9 Compat Modes */
  font-display: swap;
  src: local(''),
       url('../fonts/open-sans-v18-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/open-sans-v18-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/open-sans-v18-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/open-sans-v18-latin-regular.svg#OpenSans') format('svg'); /* Legacy iOS */
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      ${!removeBg &&
      css`
        background-color: ${theme.colors.white};
      `}
    }
  `}

`

export default GlobalStyles
