import styled, { css } from 'styled-components'

export const CardGame = styled.div`
  width: 100%;
  height: 23rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
  `}
`

export const Image = styled.img`
  position: relative;
  object-fit: center;
`

export const Card = styled.div`
  height: 6.4rem;
  position: relative;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardInfo = styled.div`
  transition: all 0.3s ease 0s;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.medium};
    padding-top: 1rem;
  `}
`

export const Price = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-size: ${theme.font.sizes.medium};
    font-weight: bold;
    text-align: center;
  `}
`

export const CardAdd = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  top: -2rem;
  transition: all 0.3s ease 0s;
  opacity: 0;
  width: max-content;
  > ${Price} {
    cursor: pointer;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  &:hover {
    > ${Card} > ${CardInfo} {
      transform: translateY(2rem);
      opacity: 0;
    }
    > ${Card} > ${CardAdd} {
      opacity: 1;
      transform: translate(-50%, 4rem);
    }
  }
`
