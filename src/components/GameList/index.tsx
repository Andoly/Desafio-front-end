import * as S from './styles'
import Heading from 'components/Heading'
import Select from 'components/Select'
import options from 'components/Select/mock'
import ProductMainCard, { CardProps } from 'components/ProductMainCard'

export type GameListProps = {
  products?: CardProps[]
  changeOrdenation: (type: string) => void
}

const GameList = ({ products, changeOrdenation }: GameListProps) => {
  return (
    <S.Wrapper>
      <S.GameAndOrder>
        <Heading size="xxlarge" color="black">
          Games
        </Heading>
        <Select changeOrdenation={changeOrdenation} options={options} />
      </S.GameAndOrder>
      {products && products.length > 0 ? (
        <S.GameGrid>
          {products.map((product, index) => {
            return <ProductMainCard {...product} key={index} />
          })}
        </S.GameGrid>
      ) : (
        <S.NoProducts>Sem produtos cadastrados...</S.NoProducts>
      )}
    </S.Wrapper>
  )
}

export default GameList
