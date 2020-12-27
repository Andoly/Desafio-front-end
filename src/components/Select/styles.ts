import styled from 'styled-components'
import { css } from 'styled-components'

export const Wrapper = styled.select`
  ${({ theme }) => css`
    width: 26.2rem;
    height: 4rem;
    background: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url('/assets/arrow-down-icon.svg') no-repeat;
    background-position-x: 95%;
    background-position-y: 50%;
    border: 0.1rem solid ${theme.colors.gray};
    border-radius: 0.4rem;
    padding: 1rem;
  `}
`
