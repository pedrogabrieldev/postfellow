import Image from 'next/image'
import styled from 'styled-components'
import DefaultUser from '../../public/default-user.png'

const StyledDiv = styled.div`
  border-radius: 100%;
  overflow: hidden;
`

export const Avatar = (props) => {
  return (
    <StyledDiv>
      <Image
        src={props.avatar ? props.avatar : DefaultUser}
        width={1}
        height={1}
        layout="responsive"
        objectFit="cover"
        alt="Foto do usuário"
      />
    </StyledDiv>
  )
}
