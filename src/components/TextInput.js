import styled from 'styled-components'

const StyledTextInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Digite seu nome',
})`
  width: 100%;
  height: 40px;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: #494949;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.29;

  &::placeholder {
    color: #9f9f9f;
  }

  &:focus {
    outline: 1px solid #71bb00;
  }
`

export const TextInput = () => {
  return <StyledTextInput />
}