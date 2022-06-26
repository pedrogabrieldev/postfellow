import { useState } from 'react'
import Head from 'next/head'
import { Header, MainContainer, NewPostForm, Feed } from '../components'

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
