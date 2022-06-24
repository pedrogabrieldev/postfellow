import { useState } from 'react'
import styled from 'styled-components'
import { Avatar, AvatarSelector, TextInput, TextArea, Buttons } from './'
import { Trash } from 'phosphor-react'

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

const TrashButton = styled.button.attrs({
  type: 'button',
})`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
`

export const NewPostForm = (props) => {
  const [avatar, setAvatar] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  function handleChangeAvatar(event) {
    if (event.target.files) {
      setAvatar(URL.createObjectURL(event.target.files[0]))
    }
  }

  function handleDeleteAvatar() {
    setAvatar('')
  }

  function handleChangeName(event) {
    setName(event.target.value)
  }

  function handleChangeMessage(event) {
    setMessage(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    props.addPost({ avatar, name, message })
  }

  function handleDiscardButton() {
    setName('')
    setMessage('')
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      {avatar ? (
        <Container>
          <AvatarDiv>
            <Avatar avatar={avatar} />
          </AvatarDiv>
          <TrashButton onClick={handleDeleteAvatar}>
            <Trash size={24} color="#ff4600" weight="light" />
          </TrashButton>
        </Container>
      ) : (
        <AvatarSelector handleChange={handleChangeAvatar} />
      )}
      <TextInput name={name} handleChange={handleChangeName} />
      <TextArea message={message} handleChange={handleChangeMessage} />
      <Buttons handleDiscard={handleDiscardButton} />
    </FormContainer>
  )
}
