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
  color: #5f5f5f;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`

const ButtonPublish = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.green};
  color: #ffffff;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  cursor: pointer;
`

export const Buttons = (props) => {
  return (
    <ButtonsContainer>
      <ButtonDiscard onClick={props.handleDiscard}>Descartar</ButtonDiscard>
      <ButtonPublish type="submit">Publicar</ButtonPublish>
    </ButtonsContainer>
  )
}
