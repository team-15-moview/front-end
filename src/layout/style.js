import { styled } from "styled-components";

export const StyledHeader = styled.header`
  background: beige;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1320px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;

  & div {
    width: 1320px;
  }
`;
