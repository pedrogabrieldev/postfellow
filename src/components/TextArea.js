import styled from 'styled-components'

const StyledTextArea = styled.textarea.attrs({
  placeholder: 'Mensagem',
  spellCheck: false,
  required: true,
})`
  width: 100%;
  height: 80px;
  margin-top: 8px;
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
  resize: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray1};
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.green1};
  }
`

export const TextArea = (props) => {
  return <StyledTextArea value={props.message} onChange={props.handleChange} />
}
