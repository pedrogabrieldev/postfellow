import styled, { useTheme } from 'styled-components'
import { XCircle } from 'phosphor-react'
import { Avatar } from '.'

const PostContainer = styled.div`
  display: flex;
  gap: 32px;
  padding: 56px 24px 32px 24px;
  border: 1px solid ${(props) => props.theme.colors.gray6};
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.gray8};
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
  color: ${(props) => props.theme.colors.gray1};
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 24px;
  word-break: break-word;
`

const StyledSentBy = styled.span`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: ${(props) => props.theme.colors.gray3};
  margin-bottom: 2px;
`

const StyledAuthor = styled.span`
  color: ${(props) => props.theme.colors.gray2};
  font-size: 14px;
  word-break: break-word;
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
  const theme = useTheme()

  function deletePost() {
    props.deletePost(props.index)
  }

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
      <DeleteButton onClick={deletePost}>
        <XCircle size={24} color={theme.colors.red} weight="light" />
      </DeleteButton>
    </PostContainer>
  )
}
