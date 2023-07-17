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

export const ModalButton = styled(StyledButton)`
  border-radius: 10px;
  width: 300px;
  height: 50px;
  background: ${({ bg }) => bg};
  border: ${({ border }) => `1px solid ${border}`};
`;
