import styled from 'styled-components'
import { XCircle } from 'phosphor-react'
import { Avatar } from '.'

const PostContainer = styled.div`
  display: flex;
  gap: 32px;
  padding: 56px 24px 32px 24px;
  border: 1px solid #3b3b3b;
  border-radius: 3px;
  background-color: #313131;
  position: relative;
`

const AvatarDiv = styled.div`
  min-width: 88px;
  height: 88px;
`

const MessageDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledParagraph = styled.p`
  color: #9f9f9f;
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 24px;
  word-break: break-word;
`

const StyledSentBy = styled.span`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: #5f5f5f;
  margin-bottom: 2px;
`

const StyledAuthor = styled.span`
  color: #7a7a7a;
  font-size: 14px;
`

const DeleteButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
`

export const Post = (props) => {
  return (
    <PostContainer>
      <AvatarDiv>
        <Avatar avatar={props.avatar} />
      </AvatarDiv>

      <MessageDiv>
        <StyledParagraph>{props.message}</StyledParagraph>
        <StyledSentBy>Enviado por</StyledSentBy>
        <StyledAuthor>{props.name}</StyledAuthor>
      </MessageDiv>
      <DeleteButton>
        <XCircle size={24} color="#ff4600" weight="light" />
      </DeleteButton>
    </PostContainer>
  )
}
