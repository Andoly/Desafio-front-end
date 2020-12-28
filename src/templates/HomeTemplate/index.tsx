import * as S from './styles'

export type HomeTemplateProps = {
  children?: React.ReactNode | React.ReactNodeArray
}

const HomeTemplate = ({ children }: HomeTemplateProps) => (
  <S.AppWrapper>
    <S.Wrapper>
      <S.Grid>{children}</S.Grid>
    </S.Wrapper>
  </S.AppWrapper>
)

export default HomeTemplate
