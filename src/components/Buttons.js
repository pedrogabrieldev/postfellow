import styled from 'styled-components'
import { ButtonPublish, ButtonDiscard } from './'

const ButtonsContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
`

export const Buttons = () => {
  return (
    <ButtonsContainer>
      <ButtonDiscard />
      <ButtonPublish />
    </ButtonsContainer>
  )
}
