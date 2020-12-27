import { screen } from '@testing-library/react'
import options from './mock'
import Select, { SelectChildProps } from '.'
import { renderWithTheme } from 'utils/tests/helpers'

export type SelectProps = {
  options?: SelectChildProps[]
  changeOrdenation: (type: string) => void
}

describe('<Select />', () => {
  it('Deve renderizar uma caixa de seleção com todas as opções simuladas', () => {
    renderWithTheme(<Select options={options} />)

    expect(
      screen.getByLabelText(/select box com as opções de filtragem/i)
    ).toBeInTheDocument()

    expect(screen.queryAllByRole('option')).toHaveLength(6)
  })
})
