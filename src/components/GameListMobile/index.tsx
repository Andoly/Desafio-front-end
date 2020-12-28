import * as S from './styles'
import { CartAlt as MenuIcon } from '@styled-icons/boxicons-regular/CartAlt'
import { Close as CloseIcon } from '@styled-icons/material/Close'
import MediaMatch from 'components/MediaMatch'
import { CardProps } from 'components/ProductMainCard'
import ShoppingCart from 'components/ShoppingCart'
import { useState } from 'react'

export type MenuProps = {
  products: CardProps[]
}

const GameListMobile = ({ products }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.Icon>
          <MenuIcon aria-label="Open Menu" onClick={() => setIsOpen(true)} />
        </S.Icon>
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <S.MenuFull isOpen={isOpen} aria-hidden={!isOpen}>
          <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
          <S.ProductList>
            <ShoppingCart products={products} />
          </S.ProductList>
        </S.MenuFull>
      </MediaMatch>
    </S.Wrapper>
  )
}

export default GameListMobile
