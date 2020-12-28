import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const AppWrapper = styled.div`
  margin: 4rem 0;

  ${media.lessThan('medium')`
    padding: 1rem;
  `}
`

export const Wrapper = styled.main`
  ${({ theme }) => css`
    position: relative;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding: 4.2rem 7rem;
    border: 0.1rem solid ${theme.colors.gray};
    border-radius: 0.4rem;

    ${media.lessThan('medium')`
      padding: 2rem;
    `}
  `}
`
export const Grid = styled.div`
  display: grid;
  grid-gap: 3rem;
  width: 100%;
  grid-template-columns: calc(100% - 23.6rem) 23.6rem;
  align-items: flex-start;

  > :nth-child(2) {
    margin-top: -1.2rem;
  }

  ${media.lessThan('medium')`
    grid-template-columns: repeat(1, 1fr);
  `}

  ${media.between('small', 'medium')`
    grid-template-columns: repeat(2, 1fr);
  `}
`
