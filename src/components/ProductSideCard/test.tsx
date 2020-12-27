import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
// import theme from 'styles/theme'

import ProductSideCard from '.'

const props = {
  id: 312,
  name: 'Super Mario Odyssey',
  price: 197.88,
  score: 100,
  image:
    'https://res.cloudinary.com/dwzl1jzpj/image/upload/v1608583802/the_witcher_iii_wild_hunt_96160d093d.png'
}

describe('<ProductSideCard />', () => {
  it('Deve renderizar um cartão com jogo e suas informações', () => {
    renderWithTheme(<ProductSideCard {...props} />)
    expect(
      screen.getByRole('heading', { name: props.name })
    ).toBeInTheDocument()

    // expect(screen.getByRole('image', { name: props.name })).toHaveAttribute(
    //   'src',
    //   props.image
    // )
    expect(screen.getByText(/Super Mario Odyssey/i)).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveStyle({
      color: '#7F7575',
      fontSize: '1.4rem'
    })
  })
  // it('Deve renderizar preço do produto', () => {
  //   renderWithTheme(<ProductSideCard {...props} />)

  //   const price = screen.getByText(197.88)
  //   expect(expect(price).not.toHaveStyle({ textDecoration: 'line-through' }))
  //   expect(price).toHaveStyle({ backgroundColor: theme.colors.darkGray })
  // })
})
