import styled from 'styled-components'
import { Post } from './'

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const StyledSpan = styled.span`
  margin-top: 56px;
  margin-bottom: 8px;
  color: #7a7a7a;
  font-size: 14px;
`

export const Feed = () => {
  return (
    <>
      <StyledSpan>Feed</StyledSpan>
      <FeedContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </FeedContainer>
    </>
  )
}
