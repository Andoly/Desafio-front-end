import * as S from './styles'

export type CardProps = {
  id?: number
  name?: string
  price: number
  score?: number
  image: string
}

const ProductMainCard = ({ name, price, image }: CardProps) => (
  <S.Wrapper>
    <S.CardGame>
      <S.Image src={image} alt={name} />
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
        <S.Price aria-label="clique para adicionar o jogo ao carrinho de compras">
          adicionar ao carrinho
        </S.Price>
      </S.CardAdd>
    </S.Card>
  </S.Wrapper>
)

export default ProductMainCard
