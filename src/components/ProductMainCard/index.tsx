import * as S from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { ReducersProps } from 'redux-local'

export type CardProps = {
  id?: number
  name?: string
  price: number
  score?: number
  image: string
}

const ProductMainCard = ({ id, name, price, score, image }: CardProps) => {
  const dispatch = useDispatch()
  const cartProducts = useSelector(
    ({ cartReducer }: ReducersProps) => cartReducer.products
  )
  const addToCart = (card: CardProps) => {
    const currentProducts = [...cartProducts]
    currentProducts.push(card)
    console.log('current products: ', currentProducts)
    dispatch({
      type: 'SET_PRODUCTS',
      payload: {
        products: currentProducts
      }
    })
  }

  const createObject = () => {
    return {
      id,
      name,
      price,
      score,
      image
    }
  }
  return (
    <S.Wrapper aria-label="card wrapper">
      <S.CardGame>
        <S.Image src={`/assets/${image}`} alt={name} />
      </S.CardGame>
      <S.Card>
        <S.CardInfo>
          <S.Title>{name}</S.Title>
          <S.Price>
            R${' '}
            {price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </S.Price>
        </S.CardInfo>
        <S.CardAdd>
          <S.Price
            onClick={() => addToCart(createObject())}
            aria-label="clique para adicionar o jogo ao carrinho de compras"
          >
            adicionar ao carrinho
          </S.Price>
        </S.CardAdd>
      </S.Card>
    </S.Wrapper>
  )
}

export default ProductMainCard
