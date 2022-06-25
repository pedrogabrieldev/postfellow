import styled from 'styled-components'

const ButtonsContainer = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 24px;
  align-self: flex-end;
`

const ButtonDiscard = styled.button.attrs({
  type: 'button',
})`
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.gray3};
  font-family: Roboto, sans-serif;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.gray2};
  }
`

const ButtonPublish = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.green1};
  color: ${(props) => props.theme.colors.white};
  font-family: Roboto, sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.green2};
  }
`

export const Buttons = (props) => {
  return (
    <ButtonsContainer>
      <ButtonDiscard onClick={props.handleDiscard}>Descartar</ButtonDiscard>
      <ButtonPublish type="submit">Publicar</ButtonPublish>
    </ButtonsContainer>
  )
}
