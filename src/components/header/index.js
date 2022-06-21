import styled from 'styled-components'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: ${(props) => props.theme.sizes.headerHeight};
  background-color: #2b2b2b;
  color: #71bb00;
  font-size: 36px;
  font-weight: 700;
  border-bottom: 1px solid #232323;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>
}
