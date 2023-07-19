import React, { useState, useEffect, useRef } from "react";

import { HeaderWrapper, StyledHeader, HeaderNav, LogoBox } from "./layoutStyle";
import { ReactComponent as WhiteLogo } from "../assets/icons/logoWhite.svg";
import { ReactComponent as BlackLogo } from "../assets/icons/logoBlack.svg";

import { StyleSheetManager } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import useModal from "../hooks/useModal";
import { HeaderButton } from "./layoutStyle";
import LoginModal from "../components/modals/LoginModal";
import EmailSigninModal from "../components/modals/EmailSigninModal";

import { useDispatch } from "react-redux";
import { logout } from "../api/user";
import { clearUserToken } from "../redux/modules/userTokenSlice";

import { useSelector } from "react-redux";
import { ReactComponent as User } from "../assets/icons/user.svg";

function Header() {
  const location = useLocation();

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

  const [Modal, openModal, closeModal, openerRef] = useModal(); // 로그인 모달
  // 회원가입 모달
  const [SigninModal, openSigninModal, closeSigninModal, openerSigninModalRef] =
    useModal();

  // 토큰 삭제를 위한 디스패치
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(clearUserToken());
      window.location.reload(); // 새로고침
      alert("로그아웃되었습니다.");
    } catch (error) {
      console.error("로그아웃 에러:", error);
      alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
    }
  };

  // 로그인 되었다면 토큰 여부 반환
  const isLogin = useSelector((state) => {
    return state.userToken.hasToken;
  });

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      {/* 리뷰 페이지에서만 헤더 다르게 */}
      {location.pathname.includes("/reviews/") ? (
        <StyledHeader
          ref={headerRef}
          isScrolled={isScrolled}
          style={{
            background: "var(--white-Color)",
            borderBottom: "1px solid var(--border-Color)",
          }}
        >
          <HeaderWrapper>
            <LogoBox onClick={() => navigate("/")}>
              <BlackLogo />
            </LogoBox>
            <HeaderNav>
              {/* 로그인 여부 따라 로그아웃 - 로그인 */}
              {isLogin ? (
                <HeaderButton
                  onClick={handleLogout}
                  style={{ color: "var(--font-Color)" }}
                >
                  로그아웃
                </HeaderButton>
              ) : (
                <HeaderButton
                  onClick={openModal}
                  ref={openerRef}
                  style={{ color: "var(--font-Color)" }}
                >
                  로그인
                </HeaderButton>
              )}
              {Modal && (
                <Modal>
                  <LoginModal closeLogin={closeModal} />
                </Modal>
              )}
              {isLogin ? (
                <User fill="gray" />
              ) : (
                <HeaderButton
                  onClick={openSigninModal}
                  ref={openerSigninModalRef}
                >
                  회원가입
                </HeaderButton>
              )}
              {SigninModal && (
                <SigninModal>
                  <EmailSigninModal closeSignin={closeSigninModal} />
                </SigninModal>
              )}
            </HeaderNav>
          </HeaderWrapper>
        </StyledHeader>
      ) : (
        <StyledHeader ref={headerRef} isScrolled={isScrolled}>
          <HeaderWrapper>
            <LogoBox onClick={() => navigate("/")}>
              {isScrolled ? <BlackLogo /> : <WhiteLogo />}
            </LogoBox>
            <HeaderNav>
              {/* 로그인 여부 따라 로그아웃 - 로그인 */}
              {isLogin ? (
                <HeaderButton
                  onClick={handleLogout}
                  isScrolled={isScrolled}
                  $font
                >
                  로그아웃
                </HeaderButton>
              ) : (
                <HeaderButton
                  onClick={openModal}
                  ref={openerRef}
                  isScrolled={isScrolled}
                  $font
                >
                  로그인
                </HeaderButton>
              )}
              {Modal && (
                <Modal>
                  <LoginModal closeLogin={closeModal} />
                </Modal>
              )}
              {isLogin ? (
                <User fill="gray" />
              ) : (
                <HeaderButton
                  onClick={openSigninModal}
                  ref={openerSigninModalRef}
                  isScrolled={isScrolled}
                  bgColor
                  border
                >
                  회원가입
                </HeaderButton>
              )}
              {SigninModal && (
                <SigninModal>
                  <EmailSigninModal closeSignin={closeSigninModal} />
                </SigninModal>
              )}
            </HeaderNav>
          </HeaderWrapper>
        </StyledHeader>
      )}
    </StyleSheetManager>
  );
}

export default Header;
