import styled from 'styled-components'
import { ButtonPublish, ButtonDiscard } from './'

const ButtonsContainer = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 24px;
  align-self: flex-end;
`

export const Buttons = () => {
  return (
    <ButtonsContainer>
      <ButtonDiscard />
      <ButtonPublish />
    </ButtonsContainer>
  )
}
