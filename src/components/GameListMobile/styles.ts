import styled from 'styled-components'
import { css } from 'styled-components'

export const Wrapper = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    background-color: ${theme.colors.blue};
    z-index: ${theme.layers.menu};
  `}
`

export const Icon = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  cursor: pointer;
  margin: auto 0;
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
  > svg {
    width: 100%;
    height: 100%;
  }
`
type MenuProps = {
  isOpen: boolean
}

export const MenuFull = styled.div<MenuProps>`
  ${({ isOpen, theme }) => css`
    opacity: ${isOpen ? 1 : 0};
    padding: ${theme.spacings.large};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.colors.white};
    position: fixed;
    overflow: hidden;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    pointer-events: ${isOpen ? 'full' : 'none'};
    transition: opacity 0.2s ease-in-out;
    z-index: ${theme.layers.alwaysOnTop};
    > svg {
      position: absolute;
      right: 1.6rem;
      top: 1.6rem;
      color: ${theme.colors.black};
      width: 2.4rem;
      height: 2.4rem;
      cursor: pointer;
    }
  `}
`
export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`
