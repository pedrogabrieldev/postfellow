import styled from 'styled-components'

const StyledMainContainer = styled.main`
  margin: ${(props) => props.theme.sizes.headerHeight} auto 0 auto;
  padding: 40px 0 170px 0;
  max-width: 516px;
  display: flex;
  flex-direction: column;
`

export const MainContainer = ({ children }) => {
  return <StyledMainContainer>{children}</StyledMainContainer>
}
