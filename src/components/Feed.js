import styled from 'styled-components'
import { Post } from './'

export const Feed = (props) => {
  const postsList = props.posts.map((post, index) => {
    return (
      <Post
        key={post._id}
        _id={post._id}
        avatar={post.avatar}
        author={post.author}
        message={post.message}
        index={index}
        deletePost={props.deletePost}
      />
    )
  })

  return (
    <>
      <StyledSpan>
        {props.posts.length ? 'Feed' : 'Nenhuma publicação'}
      </StyledSpan>
      <FeedContainer>{[...postsList].reverse()}</FeedContainer>
    </>
  )
}

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
