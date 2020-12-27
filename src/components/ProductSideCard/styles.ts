import styled from 'styled-components'
import { css } from 'styled-components'

export const CardGame = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    width: 6rem;
    height: 5.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.3rem;
  `}
`

export const Image = styled.img`
  width: 4.1rem;
  height: 4.2rem;
`

export const CardInfo = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Icon = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: -1rem;
    right: 1rem;
    opacity: 0;
    z-index: ${theme.layers.base};
    > svg {
      color: ${theme.colors.blue};
      cursor: pointer;
    }
  `}
`

export const Price = styled.p`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: ${theme.font.sizes.small};
  `}
`

export const Wrapper = styled.main`
  display: grid;
  max-width: 26rem;
  grid-template-columns: 6rem calc(100% - 6rem);
  &:hover > ${CardInfo} > ${Icon} {
    opacity: 1;
    top: 0.6rem;
    transform: translateY(1rem);
  }
`
