import React, { useState, useEffect, useRef } from "react";

import { HeaderWrapper, StyledHeader, HeaderNav, LogoBox } from "./layoutStyle";
import { ReactComponent as WhiteLogo } from "../assets/icons/logoWhite.svg";
import { ReactComponent as BlackLogo } from "../assets/icons/logoBlack.svg";

import { StyleSheetManager } from "styled-components";
import { useNavigate } from "react-router-dom";
import useModal from "../hooks/useModal";
import { HeaderButton } from "./layoutStyle";
import LoginModal from "../components/modals/LoginModal";
import EmailSigninModal from "../components/modals/EmailSigninModal";

import { useDispatch } from "react-redux";
import { logout } from "../api/user";
import { clearUserToken } from "../redux/modules/userTokenSlice";

import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
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

  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(clearUserToken());
      window.location.reload(); // 새로고침
      alert("로그아웃되었습니다.");
    } catch (error) {
      console.error("로그아웃 에러:", error);
      // 에러 핸들링
      alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const isLogin = useSelector((state) => {
    return state.userToken.hasToken;
  });

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <StyledHeader ref={headerRef} isScrolled={isScrolled}>
        <HeaderWrapper>
          <LogoBox onClick={() => navigate("/")}>
            {isScrolled ? <BlackLogo /> : <WhiteLogo />}
          </LogoBox>
          <HeaderNav>
            {isLogin ? (
              <HeaderButton onClick={handleLogout}>로그아웃</HeaderButton>
            ) : (
              <HeaderButton onClick={openModal} ref={openerRef} color="white">
                로그인
              </HeaderButton>
            )}
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
