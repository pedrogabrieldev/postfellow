import { useState } from 'react'
import Head from 'next/head'
import { Header, MainContainer, NewPostForm, Feed } from '../components'

export default function Home() {
  const [posts, setPosts] = useState([])

  function handleAddPost(post) {
    setPosts([...posts, post])
  }

  return (
    <>
      <Head>
        <title>postfellow</title>
      </Head>

      <Header>postfellow</Header>

      <MainContainer>
        <NewPostForm addPost={handleAddPost} />
        <Feed posts={posts} />
      </MainContainer>
    </>
  )
}
