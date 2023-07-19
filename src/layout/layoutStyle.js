import { styled } from "styled-components";
import { StyledButton } from "../styles/commonStyle";

export const StyledHeader = styled.header`
  position: fixed;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  transition: background-color 0.5s ease;
  background: ${({ isScrolled }) =>
    isScrolled ? "var(--white-Color)" : "transparent"};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0px 1px 2px rgba(0, 0, 0, 0.1)" : "none"};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1320px;
`;

export const LogoBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 20px;

  & svg {
    width: 35px;
  }
`;

export const HeaderButton = styled(StyledButton)`
  color: ${({ isScrolled, font }) =>
    isScrolled && font ? "var(--font-Color)" : "var(--white-Color)"};

  background: ${({ isScrolled, bgColor }) =>
    isScrolled && bgColor ? "var(--main-Color);" : "none"};

  border: ${({ isScrolled, border }) => {
    if (border) {
      if (isScrolled) return "1px solid transparent";
      else return "1px solid var(--white-Color)";
    }
  }};
`;
