import styled, { useTheme } from 'styled-components'
import { ImageSquare } from 'phosphor-react'

const StyledLabel = styled.label.attrs({
  htmlFor: 'fileInput',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 88px;
  border: 1px solid ${(props) => props.theme.colors.gray4};
  border-radius: 100%;
  cursor: pointer;
`

const StyledFileInput = styled.input.attrs({
  type: 'file',
  id: 'fileInput',
  accept: 'image/*',
})`
  display: none;
`

export const AvatarSelector = (props) => {
  const theme = useTheme()

  return (
    <StyledLabel>
      <StyledFileInput onChange={props.changeAvatar} />
      <ImageSquare size={24} color={theme.colors.white} weight="light" />
    </StyledLabel>
  )
}
