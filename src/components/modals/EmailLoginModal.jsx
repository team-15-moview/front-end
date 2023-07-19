import React, { useState } from "react";
import { ModalButton, ModalWrapper } from "./modalStyle";
import EmailSigninModal from "./EmailSigninModal";
import { useMutation } from "react-query";
import { login } from "../../api/user";

import { useDispatch } from "react-redux";
import { setUserToken } from "../../redux/modules/userTokenSlice";

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
    console.log("Email:", email);
    console.log("Password:", password);

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
        X
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
            <div className="ModalInputBox">
              <p>Email</p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="ModalInputBox">
              <p>PW</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <ModalButton onClick={handleLogin}>로그인</ModalButton>
          <button onClick={handleSignupClick}>회원가입</button>
        </>
      )}
    </ModalWrapper>
  );
}
