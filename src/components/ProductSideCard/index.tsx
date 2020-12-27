import Heading from 'components/Heading'
import { CloseCircle as CloseIcon } from '@styled-icons/evaicons-solid/CloseCircle'
import * as S from './styles'

export type CardProps = {
  id?: number
  name?: string
  price: number
  score?: number
  image: string
}

const ProductSideCard = ({ name, price, image }: CardProps) => (
  <S.Wrapper>
    <S.CardGame>
      <S.Image src={image} alt={name} />
    </S.CardGame>
    <S.CardInfo>
      <S.Icon>
        <CloseIcon
          size={15}
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

export default ProductSideCard
