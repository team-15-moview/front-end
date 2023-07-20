import React, { useState } from "react";
import { ModalButton, ModalInputBox, ModalWrapper } from "./modalStyle";
import { useMutation } from "react-query";
import { signUp } from "../../api/user";
import { emailCheck, nicknameCheck } from "../../api/user";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as BlackLogo } from "../../assets/icons/logoBlack.svg";

export default function EmailSigninModal({ closeSignin }) {
  const mutation = useMutation(signUp, {});

  const [emailDuple, setEmailDuple] = useState(false);
  const [nicknameDuple, setNicknameDuple] = useState(false);
  const [emailDupleCheck, setEDC] = useState(false);
  const [nicknameDupleCheck, setNDC] = useState(false);
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [checkedEmail, setCE] = useState("");
  const [checkedNickname, setCN] = useState("");

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nicknamePattern = /^[a-z가-힣0-9]{4,10}$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

  const validateInput = () => {


    if (!emailPattern.test(email)) {
      alert("유효한 이메일을 입력해주세요.");
      return;
    }

    if (!nicknamePattern.test(nickname)) {
      alert("유효한 닉네임을 입력해주세요. (소문자/한글/숫자 4~10자 이내)");
      return;
    }

    if (!passwordPattern.test(password)) {
      alert(
        "유효한 비밀번호를 입력해주세요. (대소문자, 숫자, 특수문자 포함 8~15자 이내)"
      );
      return;
    }

    if (emailDuple||nicknameDuple) {
      alert(
        '중복되는 이메일 또는 닉네임이 있습니다.'
      )
      return;
    }
    else if (!(emailDupleCheck && nicknameDupleCheck) || checkedEmail !== email || checkedNickname !== nickname) {
      alert('이메일, 닉네임 중복확인을 해주세요.');
      setEDC(false);
      setNDC(false);
      setCE('');
      setCN('');
      return;
    }

    // 모든 입력값이 유효한 경우
    alert("모든 입력값이 유효합니다. 회원가입을 진행합니다.");
    // 추가적인 회원가입 처리 등을 진행할 수 있습니다.
    mutation.mutate({ email, nickname: nickname, password });
    closeSignin();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      validateInput(); // Enter 키가 눌렸을 때 입력값 검증 함수 실행
    }
  };

  const checkEmailMutation = useMutation(emailCheck, {
    onSuccess: (data) => {
      if (!emailPattern.test(email))
        alert("유효한 이메일을 입력해주세요.");
      else {
        setEDC(true);
        setCE(email);
        setEmailDuple(false);
        alert(data.data.message);
      }
    },
    onError: (data) => {
      setEmailDuple(true);
      alert(data?.response?.data?.message);
    }
  });

  const checkEmailOverlap = () => {
    checkEmailMutation.mutate({ email });
  };

  const checkNicknameMutation = useMutation(nicknameCheck, {
    onSuccess: (data) => {
      if (!nicknamePattern.test(nickname))
        alert("유효한 닉네임을 입력해주세요. (소문자/한글/숫자 4~10자 이내)");
      else {
        setNDC(true);
        setCN(nickname);
        setNicknameDuple(false);
        alert(data.data.message);
      }
    },
    onError: (data) => {
      setNicknameDuple(true);
      alert(data?.response?.data?.message);
    }
  });

  const checkNicknameOverlap = () => {
    checkNicknameMutation.mutate({ nickname });
  };

  return (
    <ModalWrapper>
      <button className="closeButton" onClick={closeSignin}>
        <Close fill="var(--font-Color)" />
      </button>
      <div className="modalHead">
        <BlackLogo className="logo" />
        <h1>이메일 회원가입</h1>
      </div>
      <div className="ModalInputs">
        <ModalInputBox className="EmailInputBox">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="이메일"
          />
          {emailDupleCheck && email===checkedEmail?
            <div>Checked</div>
            :
            <button onClick={checkEmailOverlap}>중복 확인</button>
          }

        </ModalInputBox>
        <ModalInputBox className="EmailInputBox">
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="닉네임 (알파벳/소문자/숫자, 4~10자 이내)"
          />
          {nicknameDupleCheck && nickname===checkedNickname ?
            <div>Checked</div>
            :
            <button onClick={checkNicknameOverlap}>중복 확인</button>
          }
        </ModalInputBox>
        <ModalInputBox className="EmailInputBox">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="비밀번호 (대소문자/숫자/특수문자 포함 8~15자 이내)"
          />
        </ModalInputBox>
        <ModalButton
          onClick={validateInput}
          $bg="var(--main-Color)"
          $color="var(--white-Color)"
        >
          회원가입
        </ModalButton>
      </div>
    </ModalWrapper>
  );
}
