import { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Avatar, AvatarSelector, Spinner } from './'
import { Trash } from 'phosphor-react'

export const NewPostForm = (props) => {
  const theme = useTheme()

  const [avatar, setAvatar] = useState('')
  const [author, setAuthor] = useState('')
  const [message, setMessage] = useState('')

  function changeAvatar(event) {
    if (event.target.files) {
      setAvatar(URL.createObjectURL(event.target.files[0]))
    }
  }

  function deleteAvatar() {
    setAvatar('')
  }

  function changeAuthor(event) {
    setAuthor(event.target.value)
  }

  function changeMessage(event) {
    setMessage(event.target.value)
  }

  function addPost(event) {
    event.preventDefault()

    if (!author || !message) {
      return
    }

    props.addPost({ avatar, author, message })
    handleDiscardButton()
  }

  function handleDiscardButton() {
    setAuthor('')
    setMessage('')
  }

  return (
    <FormContainer onSubmit={addPost}>
      {avatar ? (
        <Container>
          <AvatarDiv>
            <Avatar avatar={avatar} />
          </AvatarDiv>
          <TrashButton onClick={deleteAvatar}>
            <Trash size={24} color={theme.colors.red} weight="light" />
          </TrashButton>
        </Container>
      ) : (
        <AvatarSelector changeAvatar={changeAvatar} />
      )}

      <TextInput value={author} onChange={changeAuthor} />
      <TextArea value={message} onChange={changeMessage} />

      <ButtonsContainer>
        <ButtonDiscard onClick={handleDiscardButton}>Descartar</ButtonDiscard>
        <ButtonPublish disabled={props.isPublishing}>
          {props.isPublishing ? <Spinner /> : 'Publicar'}
        </ButtonPublish>
      </ButtonsContainer>
    </FormContainer>
  )
}

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
  maxLength: 40,
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
    outline: 1px solid ${(props) => props.theme.colors.gray2};
  }
`

const TextArea = styled.textarea.attrs({
  placeholder: 'Mensagem',
  spellCheck: false,
  maxLength: 280,
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
    outline: 1px solid ${(props) => props.theme.colors.gray2};
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

const ButtonPublish = styled.button.attrs({
  type: 'submit',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 99px;
  height: 40px;
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

  &:disabled {
    background-color: ${(props) => props.theme.colors.gray3};
    cursor: default;
  }
`
