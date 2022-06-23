import styled from 'styled-components'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: ${(props) => props.theme.sizes.headerHeight};
  background-color: #2b2b2b;
  color: ${(props) => props.theme.colors.green};
  font-size: 36px;
  font-weight: 700;
  border-bottom: 1px solid #232323;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>
}
