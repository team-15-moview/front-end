import { styled } from "styled-components";
import { StyledButton } from "../../styles/commonStyle";

export const ModalWrapper = styled.div`
  position: relative;
  background: white;
  border-radius: 10px;
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  & .modalHead {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    & h1 {
      font-size: 20px;
      font-weight: 700;
    }

    & svg {
      width: 300px;
    }
  }

  & .closeButton {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  & .snsLoginButtons {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & .toEmailButtons {
    display: flex;
    gap: 20px;

    & button {
      border: none;
      background: none;
      cursor: pointer;
      padding: 5px;
    }

    & button:hover {
      text-decoration: underline;
      color: var(--main-Color);
    }
  }

  & .ModalInputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
  }

  & > button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 5px;
  }

  & > button:hover {
    text-decoration: underline;
    color: var(--main-Color);
  }
`;

export const ModalInputBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  gap: 10px;

  & input {
    width: 100%;
    height: 40px;
    padding-left: 10px;
    border-radius: 10px;
    background: none;
    box-sizing: border-box;
    border: 1px solid var(--border-Color);
  }

  & input:focus {
    outline: 1px solid var(--main-Color);
  }

  & button {
    width: 40%;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    background: var(--border-Color);
  }

  & button:hover {
    filter: brightness(90%);
  }
`;

export const WriteCard = styled(ModalWrapper)`
  width: 600px;
  height: 500px;
  box-sizing: border-box;

  & div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px;

    & h1 {
      box-sizing: border-box;
      width: 100%;
      text-align: left;
      font-size: 30px;
      font-weight: 700;
      padding: 10px;
    }

    & .textbox {
      display: block;
      box-sizing: border-box;
      width: 100%;
      border: none;
      padding: 10px;
      resize: none;
      font-size: 18px;
    }

    & .textbox:focus {
      outline: none;
    }
  }

  & .closeButton {
    position: absolute;
    border: none;
    background: none;
    padding: 0;
    top: 20px;
    right: 20px;
    cursor: pointer;

    & svg {
      width: 30px;
    }
  }
`;

export const ModalButton = styled(StyledButton)`
  border-radius: 10px;
  margin-top: 10px;
  width: 300px;
  height: 50px;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
  border: ${({ border }) => `1px solid ${border}`};

  &:hover {
    filter: brightness(90%);
  }
`;

export const SubmitButton = styled.button`
  border: ${({ border }) => `1px solid ${border}`};
`;
