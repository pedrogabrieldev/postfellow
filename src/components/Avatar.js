import Image from 'next/image'
import styled from 'styled-components'
import { Trash } from 'phosphor-react'

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  align-items: center;
`

const StyledDiv = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  overflow: hidden;
`

const StyledButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  width: 24px;
  height: 24px;
`

export const Avatar = (props) => {
  return (
    <StyledContainer>
      <StyledDiv>
        <Image
          src={props.avatar}
          width={88}
          height={88}
          objectFit="cover"
          alt="Foto do usuário"
        />
      </StyledDiv>
      <StyledButton>
        <Trash size={24} color="#ff4600" weight="light" />
      </StyledButton>
    </StyledContainer>
  )
}
