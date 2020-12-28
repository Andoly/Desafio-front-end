import * as S from './styles'
import Heading from 'components/Heading'
import ProductSideCard from 'components/ProductSideCard'
import { CardProps } from 'components/ProductMainCard'
import Button from 'components/Button'
import { useSelector } from 'react-redux'
import { ReducersProps } from 'redux-local'

export type ShoppingCartProps = {
  products?: CardProps[]
}

const ShoppingCart = ({ products }: ShoppingCartProps) => {
  const totalPrice = useSelector(
    ({ cartReducer }: ReducersProps) => cartReducer.totalPrice
  )
  const subtotalPrice = useSelector(
    ({ cartReducer }: ReducersProps) => cartReducer.subtotalPrice
  )
  const postalPrice = useSelector(
    ({ cartReducer }: ReducersProps) => cartReducer.postalPrice
  )
  return (
    <S.Wrapper>
      <S.SectionTop>
        <Heading size="small">Carrinho</Heading>&nbsp;
        {products && products.length > 0 && (
          <S.ProductAmount>
            ({products.length + ` ${products.length === 1 ? 'item' : 'itens'}`})
          </S.ProductAmount>
        )}
      </S.SectionTop>
      {products && products.length > 0 ? (
        <>
          <S.ProductsGrid>
            {products &&
              products.map((product, index) => {
                return (
                  <ProductSideCard index={index} {...product} key={index} />
                )
              })}
          </S.ProductsGrid>
          <S.CartValues>
            <S.CartValue>
              <S.ProductAmount>subtotal</S.ProductAmount>
              <Heading size="medium">
                {'R$ ' +
                  subtotalPrice.toLocaleString('de-DE', {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2
                  })}
              </Heading>
            </S.CartValue>
            <S.CartValue>
              <S.ProductAmount>frete</S.ProductAmount>
              <Heading size="medium">
                {totalPrice > 250
                  ? 'Grátis'
                  : 'R$ ' +
                    postalPrice.toLocaleString('de-DE', {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2
                    })}
              </Heading>
            </S.CartValue>
            <S.CartValue>
              <S.ProductAmount>total</S.ProductAmount>
              <Heading size="xlarge">
                {'R$ ' +
                  totalPrice.toLocaleString('de-DE', {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2
                  })}
              </Heading>
            </S.CartValue>
          </S.CartValues>
          <Button>finalizar compra</Button>
        </>
      ) : (
        <S.EmptyCartContainer>
          <S.EmptyCartImage
            src="/assets/cart-icon.svg"
            alt="carrinho de compras vazio"
          ></S.EmptyCartImage>
          <S.EmptyCartText>
            Até o momento, o seu carrinho está vazio
          </S.EmptyCartText>
        </S.EmptyCartContainer>
      )}
    </S.Wrapper>
  )
}

export default ShoppingCart
