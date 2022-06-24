import { useState } from 'react'
import styled from 'styled-components'
import { Avatar, AvatarSelector, TextInput, TextArea, Buttons } from './'

import { Trash } from 'phosphor-react'
import Photo from '../../public/baby-yoda.png'

const FormContainer = styled.form`
  padding: 24px;
  background-color: #313131;
  border: 1px solid #3b3b3b;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  align-items: center;
`

const AvatarDiv = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  width: 88px;
  height: 88px;
`

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
`

export const NewPostForm = () => {
  const avatar = true
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  console.log(name, message)

  function handleChangeName(event) {
    setName(event.target.value)
  }

  function handleChangeMessage(event) {
    setMessage(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log('submited')
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      {avatar ? (
        <Container>
          <AvatarDiv>
            <Avatar avatar={Photo} />
          </AvatarDiv>
          <TrashButton>
            <Trash size={24} color="#ff4600" weight="light" />
          </TrashButton>
        </Container>
      ) : (
        <AvatarSelector />
      )}
      <TextInput name={name} handleChange={handleChangeName} />
      <TextArea message={message} handleChange={handleChangeMessage} />
      <Buttons />
    </FormContainer>
  )
}
