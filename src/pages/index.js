import { useState } from 'react'
import Head from 'next/head'
import { postsDAO } from '../dao/postsDAO'
import styled from 'styled-components'
import { Header, NewPostForm, Feed } from '../components'

export default function Home({ postsFromDB }) {
  const [posts, setPosts] = useState(postsFromDB)
  const [isPublishing, setIsPublishing] = useState(false)

  async function addPost(post) {
    const JSONdata = JSON.stringify(post)
    const endpoint = '/api/posts'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    try {
      setIsPublishing(true)
      const response = await fetch(endpoint, options)
      const result = await response.json()
      setPosts([...posts, result])
      setIsPublishing(false)
    } catch (error) {
      setIsPublishing(false)
      // TO DO: Handle errors
    }
  }

  async function deletePost(_id) {
    const endpoint = `/api/posts/${_id}`
    const options = {
      method: 'DELETE',
    }

    try {
      await fetch(endpoint, options)
      setPosts(posts.filter((post) => post._id !== _id))
    } catch (error) {
      // TO DO: Handle errors
    }
  }

  return (
    <>
      <Head>
        <title>postfellow</title>
      </Head>

      <Header>postfellow</Header>

      <MainContainer>
        <NewPostForm addPost={addPost} isPublishing={isPublishing} />
        <Feed posts={posts} deletePost={deletePost} />
      </MainContainer>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const postsFromDB = await postsDAO.getAllPosts()

    return {
      props: { postsFromDB: JSON.parse(JSON.stringify(postsFromDB)) },
    }
  } catch (error) {
    //TO DO: Handle errors
  }
}

const MainContainer = styled.main`
  margin: ${(props) => props.theme.sizes.headerHeight} auto 0 auto;
  padding: 40px 8px 170px 8px;
  max-width: 516px;
  display: flex;
  flex-direction: column;
`
