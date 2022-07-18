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
  color: ${(props) => props.theme.colors.gray2};
  font-size: 14px;
`

export const Feed = (props) => {
  const postsList = props.posts.map((post, index) => {
    return (
      <Post
        key={index}
        avatar={post.avatar}
        name={post.name}
        message={post.message}
        index={index}
        deletePost={props.deletePost}
      />
    )
  })

  return (
    <>
      <StyledSpan>
        {props.posts.length ? 'Feed' : 'Nenhuma postagem'}
      </StyledSpan>
      <FeedContainer>{[...postsList].reverse()}</FeedContainer>
    </>
  )
}
