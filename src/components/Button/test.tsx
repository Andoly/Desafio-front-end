import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('Deve renderizar o botão com tamanho padrão', () => {
    renderWithTheme(<Button>Finalizar compra</Button>)
    expect(
      screen.getByRole('button', { name: /finalizar compra/i })
    ).toHaveStyle({
      height: '5rem',
      width: '23.8rem',
      'font-size': '1.4rem'
    })
  })
})
