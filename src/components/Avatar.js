import Image from 'next/image'
import styled from 'styled-components'

const StyledDiv = styled.div`
  border-radius: 100%;
  overflow: hidden;
`

export const Avatar = (props) => {
  return (
    <StyledDiv>
      <Image
        src={props.avatar}
        width={1}
        height={1}
        layout="responsive"
        objectFit="cover"
        alt="Foto do usuário"
      />
    </StyledDiv>
  )
}
