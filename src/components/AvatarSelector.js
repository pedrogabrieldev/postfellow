import styled from 'styled-components'
import { ImageSquare } from 'phosphor-react'

const StyledLabel = styled.label.attrs({
  htmlFor: 'fileInput',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 88px;
  border: 1px solid #4b4b4b;
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
  return (
    <StyledLabel>
      <StyledFileInput onChange={props.handleChange} />
      <ImageSquare size={24} color="#ffffff" weight="light" />
    </StyledLabel>
  )
}
