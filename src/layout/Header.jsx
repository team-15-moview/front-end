import React, { useState, useEffect, useRef } from "react";
import { HeaderWrapper, StyledHeader, HeaderNav } from "./layoutStyle";

import { StyleSheetManager } from "styled-components";
import { Link } from "react-router-dom";
import useModal from "../hooks/useModal";
import { HeaderButton } from "../styles/commonStyle";
import LoginModal from "../components/modals/LoginModal";
import EmailSigninModal from "../components/modals/EmailSigninModal";

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

  const [Modal, openModal, closeModal, openerRef] = useModal();
  const [SigninModal, openSigninModal, closeSigninModal, openerSigninModalRef] =
    useModal();

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <StyledHeader ref={headerRef} isScrolled={isScrolled}>
        <HeaderWrapper>
          <Link to="/" className="logo">
            Moview
          </Link>
          <HeaderNav>
            <HeaderButton onClick={openModal} ref={openerRef} color="white">
              로그인
            </HeaderButton>
            {Modal && (
              <Modal>
                <LoginModal closeLogin={closeModal} />
              </Modal>
            )}
            <HeaderButton
              onClick={openSigninModal}
              ref={openerSigninModalRef}
              isScrolled={isScrolled}
            >
              회원가입
            </HeaderButton>
            {SigninModal && (
              <SigninModal>
                <EmailSigninModal closeSignin={closeSigninModal} />
              </SigninModal>
            )}
          </HeaderNav>
        </HeaderWrapper>
      </StyledHeader>
    </StyleSheetManager>
  );
}

export default Header;
