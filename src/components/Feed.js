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

export const Feed = (props) => {
  return (
    <>
      <StyledSpan>Feed</StyledSpan>
      <FeedContainer>
        {props.posts.map((post, index) => {
          return (
            <Post
              key={index}
              avatar={post.avatar}
              name={post.name}
              message={post.message}
            />
          )
        })}
      </FeedContainer>
    </>
  )
}