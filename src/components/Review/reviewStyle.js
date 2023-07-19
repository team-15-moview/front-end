import { styled } from "styled-components";
import { LayoutMargin } from "../../styles/commonStyle";
import { ModalWrapper, ModalButton } from "./../modals/modalStyle";

export const MovieReviewContainer = styled(LayoutMargin)`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ReviewRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  & .cols:first-child {
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex: 3;
  }

  & .cols:last-child {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  gap: 10px;

  & svg {
    width: 30px;
    fill: gray;
  }

  & figcaption {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    & p {
      padding-left: 5px;
    }

    & p:first-child {
      font-weight: 600;
    }
  }
`;

export const ReviewContent = styled.div`
  & p {
    width: 100%;
    height: 300px;
    padding-left: 20px;
    box-sizing: border-box;
  }
`;

export const MovieInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & figure {
    position: relative;
    width: 160px;

    & img {
      position: absolute;
      top: 0;
      width: 100%;
      object-fit: contain;
    }
  }
`;

export const MovieDesc = styled.figcaption`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  padding: 10px;

  & p {
    text-align: right;
  }

  & p:first-child {
    font-weight: 700;
  }
`;

export const LikeReplyRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 10px 0;
  padding-left: 20px;
`;

export const ReviewLikeReplyButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--border-Color);
  border-bottom: 1px solid var(--border-Color);
  padding: 10px 0;
  gap: 400px;

  & button {
    display: flex;
    align-items: center;
    gap: 5px;
    border: none;
    cursor: pointer;
    background-color: white;
  }

  & svg {
    opacity: 0.7;
  }

  & button:hover {
    & > svg {
      fill: "var(--main-Color)";
      opacity: 1;
    }
  }
`;

export const CommentRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  & .reply {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid var(--border-Color);
    padding: 20px;

    & .replyInfo {
      display: flex;
      gap: 20px;
    }
  }
`;

export const ReviewModalWrapper = styled(ModalWrapper)`
  width: 600px;
  height: 400px;

  & div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px;

    & h1 {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

export const ReviewModalButton = styled(ModalButton)`
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  justify-content: center;
  width: 100px;
  color: white;
  text-align: center;
`;
