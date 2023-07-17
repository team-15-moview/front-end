import { styled } from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  transition: background-color 0.5s ease;
  background-color: ${({ isScrolled }) =>
    isScrolled ? "white" : "transparent"};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none"};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1320px;

  & .logo {
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 20px;
`;