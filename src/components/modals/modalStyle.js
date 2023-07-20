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
    justify-content: center;
  }

  & .logo {
    width: 150px;
  }

  & .closeButton {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  & .snsLoginButtons {
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
    }
  }
`;

export const WriteCard = styled.div`
  width: 594px;
  height: 687px;
  box-shadow: 3px 3px 5px 5px grey;
  border-radius: 20px;
  background-color: white;
  padding: 27px 27px;
  padding-right: 37px;
  display: flex;
  flex-flow: column wrap;
  gap: 10px;

  & .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  & .title {
    margin: 3px 9px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
  }
  & .closeButton {
    cursor: pointer;
  }
  & .textbox {
    margin: 14px 9px;
    flex-grow: 1;
    border: none;
    display: block;
    font-size: 20px;
    width: 100%;
  }
  & .submitContainer {
    display: flex;
    flex-flow: row-reverse wrap;
    align-items: center;
    width: 100%;
  }
  & .submit {
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    color: white;
    text-align: center;
    width: 188px;
    height: 68px;
    border: none;
    border-radius: 10px;
    background: rgb(101, 40, 247);
  }
`;

export const ModalButton = styled(StyledButton)`
  border-radius: 10px;
  width: 300px;
  height: 50px;
  background: ${({ $bg }) => $bg};
  border: ${({ border }) => `1px solid ${border}`};
`;

export const SubmitButton = styled.button`
  border: ${({ border }) => `1px solid ${border}`};
`;
