import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
  background: none;
  color: #5f5f5f;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`

export const ButtonDiscard = () => {
  return <StyledButton>Descartar</StyledButton>
}
