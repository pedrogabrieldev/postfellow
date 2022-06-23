import styled from 'styled-components'

const StyledFormContainer = styled.form`
  padding: 24px;
  background-color: #313131;
  border: 1px solid #3b3b3b;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormContainer = ({ children }) => {
  return <StyledFormContainer>{children}</StyledFormContainer>
}
