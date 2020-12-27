import { screen } from '@testing-library/react'
import mock from 'products/mock'
import { renderWithTheme } from 'utils/tests/helpers'
import GameList from '.'

describe('<GameList />', () => {
  it('Deve renderizar uma lista vazia com título e select', () => {
    renderWithTheme(<GameList products={[]} />)

    expect(screen.getByRole('heading', { name: /games/i })).toBeInTheDocument()

    expect(screen.getByRole('heading')).toHaveStyle({
      color: '#363636',
      fontSize: '4.8rem'
    })
    // expect(
    //   screen.getByRole('heading', { name: /Sem produtos cadastrados.../i })
    // ).toBeInTheDocument()

    expect(screen.queryAllByLabelText(/card wrapper/i)).toHaveLength(0)
  })

  it('Deve renderizar uma lista de jogos com 9 cartas', () => {
    renderWithTheme(<GameList products={mock} />)

    expect(screen.getByRole('heading', { name: /games/i })).toBeInTheDocument()

    expect(screen.queryAllByLabelText(/card wrapper/i)).toHaveLength(9)
  })
})
