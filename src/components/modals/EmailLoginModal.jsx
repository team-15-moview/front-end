import React, { useState } from "react";
import { ModalButton, ModalWrapper } from "./modalStyle";
import EmailSigninModal from "./EmailSigninModal";
import { useMutation } from "react-query";
import { login } from "../../api/user";

export default function EmailLoginModal({ closeLogin }) {
  const mutation = useMutation(login,{
    onSuccess:()=>{
      //로그인 리덕스 on
    }
  });
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignupClick = (event) => {
    event.stopPropagation();
    setShowSignup(true);
  };

  const handleLogin = () => {
    // Perform login logic using the email and password values
    console.log("Email:", email);
    console.log("Password:", password);
    // ...additional login logic
    mutation.mutate({email,password});
  };

  return (
    <ModalWrapper>
      <button className="closeButton" onClick={closeLogin}>
        X
      </button>
      {showSignup ? (
        <EmailSigninModal closeLogin={closeLogin} />
      ) : (
        <>
          <div className="modalHead">
            <p>Moview</p>
            <h1>이메일 로그인</h1>
          </div>
          <div className="ModalInputs">
            <div className="ModalInputBox">
              <p>Email</p>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="ModalInputBox">
              <p>PW</p>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <ModalButton onClick={handleLogin}>로그인</ModalButton>
          <button onClick={handleSignupClick}>회원가입</button>
        </>
      )}
    </ModalWrapper>
  );
}
