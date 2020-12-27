import styled from 'styled-components'
import { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`

export const GameAndOrder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.3rem;

  ${media.lessThan('medium')`
    flex-wrap: wrap;
  `}
`

export const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3.1rem;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    > * {
      max-width: 100%;
      margin-bottom: 1.5rem;
    }
  `}
`

export const NoProducts = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkGray};
    line-height: 2.2rem;
  `}
`
