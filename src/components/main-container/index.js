import styled from 'styled-components'

const StyledMainContainer = styled.main`
  margin: 0 auto;
  padding: 40px 0 170px 0;
  max-width: 516px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
`

export const MainContainer = ({ children }) => {
  return <StyledMainContainer>{children}</StyledMainContainer>
}
