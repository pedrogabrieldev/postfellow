import { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Avatar, AvatarSelector } from './'
import { Trash } from 'phosphor-react'

const FormContainer = styled.form`
  padding: 24px;
  background-color: ${(props) => props.theme.colors.gray8};
  border: 1px solid ${(props) => props.theme.colors.gray6};
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

const TextInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Digite seu nome',
  spellCheck: false,
  required: true,
})`
  width: 100%;
  height: 40px;
  margin-top: 16px;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.gray5};
  color: ${(props) => props.theme.colors.white};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.29;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray1};
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.green1};
  }
`

const TextArea = styled.textarea.attrs({
  placeholder: 'Mensagem',
  spellCheck: false,
  required: true,
})`
  width: 100%;
  height: 80px;
  margin-top: 8px;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.gray5};
  color: ${(props) => props.theme.colors.white};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.29;
  resize: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray1};
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.green1};
  }
`

const ButtonsContainer = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 24px;
  align-self: flex-end;
`

const ButtonDiscard = styled.button.attrs({
  type: 'button',
})`
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.gray3};
  font-family: Roboto, sans-serif;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.gray2};
  }
`

const ButtonPublish = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.green1};
  color: ${(props) => props.theme.colors.white};
  font-family: Roboto, sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.green2};
  }
`

export const NewPostForm = (props) => {
  const theme = useTheme()

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

  function addPost(event) {
    event.preventDefault()

    if (!name || !message) {
      return
    }

    props.addPost({ avatar, name, message })
    handleDiscardButton()
  }

  function handleDiscardButton() {
    setName('')
    setMessage('')
  }

  return (
    <FormContainer onSubmit={addPost}>
      {avatar ? (
        <Container>
          <AvatarDiv>
            <Avatar avatar={avatar} />
          </AvatarDiv>
          <TrashButton onClick={handleDeleteAvatar}>
            <Trash size={24} color={theme.colors.red} weight="light" />
          </TrashButton>
        </Container>
      ) : (
        <AvatarSelector handleChange={handleChangeAvatar} />
      )}

      <TextInput value={name} onChange={handleChangeName} />
      <TextArea value={message} onChange={handleChangeMessage} />

      <ButtonsContainer>
        <ButtonDiscard onClick={handleDiscardButton}>Descartar</ButtonDiscard>
        <ButtonPublish type="submit">Publicar</ButtonPublish>
      </ButtonsContainer>
    </FormContainer>
  )
}
