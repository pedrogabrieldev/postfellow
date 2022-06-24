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
  background-color: #494949;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.29;
  resize: none;

  &::placeholder {
    color: #9f9f9f;
  }

  &:focus {
    outline: 1px solid #71bb00;
  }
`

export const TextArea = (props) => {
  return <StyledTextArea value={props.message} onChange={props.handleChange} />
}
