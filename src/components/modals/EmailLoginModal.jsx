import React, { useState } from "react";
import { ModalButton, ModalInputBox, ModalWrapper } from "./modalStyle";
import EmailSigninModal from "./EmailSigninModal";
import { useMutation } from "react-query";
import { login } from "../../api/user";

import { useDispatch } from "react-redux";
import { setUserToken } from "../../redux/modules/userTokenSlice";

import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as BlackLogo } from "../../assets/icons/logoBlack.svg";

export default function EmailLoginModal({ closeLogin }) {
  const dispatch = useDispatch();

  const mutation = useMutation(login, {
    onSuccess: (data) => {
      if (data) {
        dispatch(setUserToken(data.data.nickname));
        closeLogin(); // 새로고침
        alert("로그인에 성공했습니다!");
      }
    },
    onError: (error) => {
      alert("다시 시도해주세요.");
    },
  });

  const handleLogin = () => {
    // Perform login logic using the email and password values
    // console.log("Email:", email);
    // console.log("Password:", password);

    // mutate로 로그인 요청 보내기
    mutation.mutate({ email, password });
  };

  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignupClick = (event) => {
    event.stopPropagation();
    setShowSignup(true);
  };

  return (
    <ModalWrapper>
      <button className="closeButton" onClick={closeLogin}>
        <Close fill="var(--font-Color)" />
      </button>
      {showSignup ? (
        <EmailSigninModal closeSignin={closeLogin} />
      ) : (
        <>
          <div className="modalHead">
            <BlackLogo className="logo"/>
            <h1>이메일 로그인</h1>
          </div>
          <div className="ModalInputs">
            <ModalInputBox className="ModalInputBox">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                placeholder="이메일을 입력하세요"
              />
            </ModalInputBox>
            <ModalInputBox className="ModalInputBox">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                placeholder="비밀번호를 입력하세요"
              />
            </ModalInputBox>
            <ModalButton
              onClick={handleLogin}
              $bg="var(--main-Color)"
              $color="var(--white-Color)"
            >
              로그인
            </ModalButton>
          </div>
          <button onClick={handleSignupClick}>회원가입</button>
        </>
      )}
    </ModalWrapper>
  );
}
