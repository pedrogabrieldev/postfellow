import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.green};
  color: #ffffff;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  cursor: pointer;
`

export const ButtonPublish = () => {
  return <StyledButton>Publicar</StyledButton>
}
