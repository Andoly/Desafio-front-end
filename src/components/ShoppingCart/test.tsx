import { render, screen } from '@testing-library/react'

import ShoppingCart from '.'

describe('<ShoppingCart />', () => {
  it('should render the heading', () => {
    const { container } = render(<ShoppingCart />)

    expect(screen.getByRole('heading', { name: /ShoppingCart/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
