import { HeaderWrapper, StyledHeader, ButtonsWrapper } from "./style";

function Header() {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <div className="logo">Moview</div>
        <ButtonsWrapper>
          <button>로그인</button>
          <button>회원가입</button>
        </ButtonsWrapper>
      </HeaderWrapper>
    </StyledHeader>
  );
}

export default Header;
