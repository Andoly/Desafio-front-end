import * as S from './styles'
import { CardProps } from 'components/ProductMainCard'
import Heading from 'components/Heading'
import { CloseCircle as CloseIcon } from '@styled-icons/evaicons-solid/CloseCircle'
import { useSelector, useDispatch } from 'react-redux'
import { ReducersProps } from 'redux-local'

export type SideCardProps = CardProps & { index: number }

const ProductSideCard = ({ name, price, image, index }: SideCardProps) => {
  const dispatch = useDispatch()
  const cartProducts = useSelector(
    ({ cartReducer }: ReducersProps) => cartReducer.products
  )

  const removeProduct = () => {
    const currentProducts = [...cartProducts]
    currentProducts.splice(index, 1)
    dispatch({
      type: 'SET_PRODUCTS',
      payload: { products: currentProducts }
    })
  }

  return (
    <S.Wrapper aria-label="side card wrapper">
      <S.CardGame>
        <S.Image src={image} alt={name} />
      </S.CardGame>
      <S.CardInfo>
        <S.Icon>
          <CloseIcon
            size={15}
            onClick={() => removeProduct()}
            aria-label="clique para remover o produto do carrinho"
          />
        </S.Icon>
        <Heading color="gray" size="small">
          {name}
        </Heading>
        {price && (
          <S.Price>
            R${' '}
            {price.toLocaleString('de-DE', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            })}
          </S.Price>
        )}
      </S.CardInfo>
    </S.Wrapper>
  )
}

export default ProductSideCard
