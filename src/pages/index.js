import { useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Header, NewPostForm, Feed } from '../components'

const MainContainer = styled.main`
  margin: ${(props) => props.theme.sizes.headerHeight} auto 0 auto;
  padding: 40px 0 170px 0;
  max-width: 516px;
  display: flex;
  flex-direction: column;
`

export default function Home() {
  const [posts, setPosts] = useState([])

  function addPost(post) {
    setPosts([...posts, post])
  }

  function deletePost(index) {
    setPosts(posts.filter((post) => posts.indexOf(post) !== index))
  }

  return (
    <>
      <Head>
        <title>postfellow</title>
      </Head>

      <Header>postfellow</Header>

      <MainContainer>
        <NewPostForm addPost={addPost} />
        <Feed posts={posts} deletePost={deletePost} />
      </MainContainer>
    </>
  )
}
