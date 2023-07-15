import { styled } from "styled-components";

export const StyledLayout = styled.main`
  margin: 0px auto;
  max-width: 1320px;
`;

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

export const ButtonsWrapper = styled.div`
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
