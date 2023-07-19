import React, { useState } from "react";
import { ModalButton, ModalWrapper } from "./modalStyle";
import { useMutation } from "react-query";
import { signUp } from "../../api/user";
import { ReactComponent as BlackLogo } from "../../assets/icons/logoBlack.svg";

export default function EmailSigninModal({ closeSignin }) {
  const mutation = useMutation(signUp, {})

  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const validateInput = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const idPattern = /^[a-z0-9]{4,10}$/;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

    if (!emailPattern.test(email)) {
      alert("유효한 이메일을 입력해주세요.");
      return;
    }

    if (!idPattern.test(id)) {
      alert(
        "유효한 ID를 입력해주세요. (알파벳 소문자 또는 숫자로만 이루어지고, 4자 이상 10자 이하)"
      );
      return;
    }

    if (!passwordPattern.test(password)) {
      alert(
        "유효한 비밀번호를 입력해주세요. (대소문자, 숫자, 특수문자 포함 8~15자 이내)"
      );
      return;
    }

    // 모든 입력값이 유효한 경우
    alert("모든 입력값이 유효합니다. 회원가입을 진행합니다.");
    // 추가적인 회원가입 처리 등을 진행할 수 있습니다.
    mutation.mutate({ email, nickname: id, password })
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      validateInput(); // Enter 키가 눌렸을 때 입력값 검증 함수 실행
    }
  };

  return (
    <ModalWrapper>
      <button className="closeButton" onClick={closeSignin}>
        X
      </button>
      <div className="modalHead">
        <BlackLogo className="logo" />
        <h1>이메일 회원가입</h1>
      </div>
      <div className="EmailInputs">
        <div className="EmailInputBox">
          <p>Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button>중복 확인</button>
        </div>
        <div className="EmailInputBox">
          <p>ID</p>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="EmailInputBox">
          <p>PW</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <ModalButton onClick={validateInput}>회원가입</ModalButton>
    </ModalWrapper>
  );
}
