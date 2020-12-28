import { fireEvent, screen } from '@testing-library/react'
import mock from 'products/mock'
import { renderWithTheme } from 'utils/tests/helpers'
import GameListMobile from '.'

describe('<GameList />', () => {
  it('Deve renderizar menu mobile com opção de abrir e fechar o menu', () => {
    renderWithTheme(<GameListMobile products={mock} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(screen.getByRole('heading')).toHaveStyle({
      color: '#363636'
    })
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
  })
})
