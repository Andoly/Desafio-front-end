import * as S from './styles'

export type SelectChildProps = {
  value: string
  label: string
}
export type SelectProps = {
  options?: SelectChildProps[]
  changeOrdenation: (type: string) => void
}

const Select = ({ options, changeOrdenation }: SelectProps) => (
  <S.Wrapper
    onChange={(e) => changeOrdenation(e.target.value)}
    aria-label="select box com as opções de filtragem"
  >
    <option value="">Selecione uma opção</option>
    {options &&
      options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.value}
          </option>
        )
      })}
  </S.Wrapper>
)

export default Select
