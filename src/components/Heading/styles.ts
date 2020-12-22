/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  xxlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `
}

export const Wrapper = styled.h4<HeadingProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.medium};

    ${!!size && wrapperModifiers[size](theme)}
  `}
`
