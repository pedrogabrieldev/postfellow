import styled from 'styled-components'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${(props) => props.theme.sizes.headerHeight};
  background-color: ${(props) => props.theme.colors.gray9};
  color: ${(props) => props.theme.colors.green1};
  font-size: 36px;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray10};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>
}
