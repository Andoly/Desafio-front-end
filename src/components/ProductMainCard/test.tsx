import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
// import theme from 'styles/theme'

import ProductMainCard from '.'

const props = {
  id: 312,
  name: 'Super Mario Odyssey',
  price: 197.88,
  score: 100,
  image: './assets/super-mario-odyssey.png'
}

describe('<ProductMainCard />', () => {
  it('Deve renderizar um cartão com jogo e suas informações', () => {
    renderWithTheme(<ProductMainCard {...props} />)
    // expect(
    //   screen.getByRole('heading', { name: props.name })
    // ).toBeInTheDocument()
    // expect(
    //   screen.getByRole('image', { name: /Super Mario Odyssey/i })
    // ).toHaveAttribute('src', './assets/super-mario-odyssey.png')
    expect(screen.getByAltText(/Super Mario Odyssey/i)).toBeInTheDocument()
  })
  // it('Deve renderizar preço do produto', () => {
  //   renderWithTheme(<ProductMainCard {...props} />)

  //   const price = screen.getByText('R$ 197.88')
  //   expect(expect(price).not.toHaveStyle({ textDecoration: 'line-through' }))
  //   expect(price).toHaveStyle({ backgroundColor: theme.colors.darkGray })
  // })
})
