import styled, { css } from 'styled-components'

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    padding: 2rem 2.5rem;
    display: flex;
    flex-direction: column;
    border: 0.1rem solid ${theme.colors.gray};
    border-radius: 0.4rem;
    min-height: 32.5rem;
  `}
`

export const SectionTop = styled.div`
  margin-bottom: 2.2rem;
  display: flex;
  align-items: center;
  &:first-child {
    margin-right: 0.35rem;
  }
`

export const ProductAmount = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    line-height: 1.9rem;
  `}
`
export const ProductsGrid = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 2rem;
  }
`
export const CartValues = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 1.8rem;
  }
  h2 {
    font-weight: bold;
  }
`

export const CartValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5.5rem 0;
`

export const EmptyCartImage = styled.img`
  width: 9rem;
  height: auto;
  object-fit: cover;
`
export const EmptyCartText = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: #746a6a;
    text-align: center;
  `}
`
