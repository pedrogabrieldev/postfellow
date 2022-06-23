import {
  FormContainer,
  Avatar,
  AvatarSelector,
  TextInput,
  TextArea,
  Buttons,
} from './'

import Photo from '../../public/baby-yoda.png'

export const NewPostForm = () => {
  const avatar = false
  return (
    <FormContainer>
      {avatar ? <Avatar avatar={Photo} /> : <AvatarSelector />}
      <TextInput />
      <TextArea />
      <Buttons />
    </FormContainer>
  )
}
