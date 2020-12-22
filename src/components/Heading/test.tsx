import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('Deve renderizar um título darkGray por padrão', () => {
    renderWithTheme(<Heading>Games</Heading>)
    expect(screen.getByRole('heading', { name: /games/i })).toHaveStyle({
      color: '#746A6A'
    })
  })
  it('Deve renderizar um título black passada na props', () => {
    renderWithTheme(<Heading color="black">Games</Heading>)
    expect(screen.getByRole('heading', { name: /games/i })).toHaveStyle({
      color: '#363636'
    })
  })
  it('Deve renderizar um título com um tamanho medium por padrão', () => {
    renderWithTheme(<Heading>Games</Heading>)
    expect(screen.getByRole('heading', { name: /games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
  })
  it('Deve renderizar um título com um tamanho small passado na props', () => {
    renderWithTheme(<Heading size="small">Games</Heading>)
    expect(screen.getByRole('heading', { name: /games/i })).toHaveStyle({
      'font-size': '1.4rem'
    })
  })
  it('Deve renderizar um título com um tamanho large passado na props', () => {
    renderWithTheme(<Heading size="large">Games</Heading>)
    expect(screen.getByRole('heading', { name: /games/i })).toHaveStyle({
      'font-size': '1.8rem'
    })
  })
  it('Deve renderizar um título com um tamanho xxlarge passado na props', () => {
    renderWithTheme(<Heading size="xxlarge">Games</Heading>)
    expect(screen.getByRole('heading', { name: /games/i })).toHaveStyle({
      'font-size': '4.8rem'
    })
  })
})
