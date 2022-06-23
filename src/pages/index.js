import Head from 'next/head'
import { Header, MainContainer, NewPostForm, Feed } from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>postfellow</title>
      </Head>

      <Header>postfellow</Header>

      <MainContainer>
        <NewPostForm />
        <Feed />
      </MainContainer>
    </>
  )
}
