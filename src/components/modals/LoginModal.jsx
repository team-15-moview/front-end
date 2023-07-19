import React, { useState } from "react";
import { ModalWrapper, ModalButton } from "./modalStyle";
import EmailLoginModal from "./EmailLoginModal";
import EmailSigninModal from "./EmailSigninModal";

export default function LoginModal({ closeLogin }) {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleEmailLoginClick = (event) => {
    event.stopPropagation();
    setSelectedContent("emailLogin");
  };

  const handleSignupClick = (event) => {
    event.stopPropagation();
    setSelectedContent("signup");
  };

  const renderModalContent = () => {
    switch (selectedContent) {
      case "emailLogin":
        return <EmailLoginModal closeLogin={closeLogin} />;
      case "signup":
        return <EmailSigninModal closeSignin={closeLogin} />;
      default:
        return null;
    }
  };

  const modalContent = renderModalContent();
  const showDefaultModal = !modalContent;

  return (
    <ModalWrapper>
      {showDefaultModal && (
        <>
          <button className="closeButton" onClick={closeLogin}>
            X
          </button>
          <div className="modalHead">
            <p>Moview</p>
            <h1>로그인</h1>
          </div>
          <div className="snsLoginButtons">
            <ModalButton $bg="yellow" border="yellow">
              카카오로 시작하기
            </ModalButton>
            <ModalButton $bg="white" border="black">
              구글로 시작하기
            </ModalButton>
          </div>
          <div className="toEmailButtons">
            <button onClick={handleEmailLoginClick}>이메일 로그인</button>
            <button onClick={handleSignupClick}>이메일 회원가입</button>
          </div>
        </>
      )}
      {modalContent && (
        <>
          <button className="closeButton" onClick={closeLogin}>
            X
          </button>
          <div className="modalContent">{modalContent}</div>
        </>
      )}
    </ModalWrapper>
  );
}
