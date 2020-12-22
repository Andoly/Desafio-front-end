import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.lightBlue};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family};
    font-weight: bold;
    border-radius: 0.3rem;
    width: 23.8rem;
    height: 5rem;
    border: 0.1rem solid transparent;
    &:hover {
      background: ${darken(0.1, theme.colors.lightBlue)};
      cursor: pointer;
    }
  `}
`
