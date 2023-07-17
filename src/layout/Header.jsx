import React, { useState, useEffect, useRef } from "react";
import { HeaderWrapper, StyledHeader, HeaderNav } from "./layoutStyle";

import Button from "../components/common/Button";
import { StyleSheetManager } from "styled-components";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Props 에러 방지
  const shouldForwardProp = (prop) => prop !== "isScrolled";

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <StyledHeader ref={headerRef} isScrolled={isScrolled}>
        <HeaderWrapper>
          <div className="logo">Moview</div>
          <HeaderNav>
            <Button color="white">로그인</Button>
            <Button isScrolled={isScrolled}>회원가입</Button>
          </HeaderNav>
        </HeaderWrapper>
      </StyledHeader>
    </StyleSheetManager>
  );
}

export default Header;
