import { HeaderWrapper, StyledHeader, HeaderNav } from "./layoutStyle";

function Header() {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <div className="logo">Moview</div>
        <HeaderNav>
          <button>로그인</button>
          <button>회원가입</button>
        </HeaderNav>
      </HeaderWrapper>
    </StyledHeader>
  );
}

export default Header;
