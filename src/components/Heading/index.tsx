import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'black' | 'darkGray' | 'gray'
  size?: 'small' | 'medium' | 'large' | 'xxlarge'
}

const Heading = ({
  children,
  color = 'darkGray',
  size = 'medium'
}: HeadingProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Heading
