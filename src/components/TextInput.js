import styled from 'styled-components'

const StyledTextInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Digite seu nome',
  spellCheck: false,
  required: true,
})`
  width: 100%;
  height: 40px;
  margin-top: 16px;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.gray5};
  color: ${(props) => props.theme.colors.white};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.29;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray1};
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.green1};
  }
`

export const TextInput = (props) => {
  return <StyledTextInput value={props.name} onChange={props.handleChange} />
}
