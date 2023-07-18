import { styled } from "styled-components";
import { LayoutMargin } from "../../styles/commonStyle";

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

  & figcaption {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const ReviewContent = styled.div`
  & textarea {
    width: 100%;
    height: 300px;
  }
`;

export const MovieInfoSection = styled.div`
  display: flex;
  gap: 10px;
`;

export const MovieDesc = styled.figcaption`
  /* 영화 설명에 대한 스타일 정의 */
`;

export const LikeReplyRow = styled.div`
  margin: 10px 0;
`;

export const ReviewLikeReplyButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding: 10px 0;
  gap: 400px;

  & button {
    display: flex;
    align-items: center;
    gap: 5px;
    border: none;
  }

  & svg {
    color: black;
    cursor: pointer;
    opacity: 0.5;
  }

  & svg:hover {
    opacity: 1;
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
    border-bottom: 1px solid gray;
    padding: 20px;

    & .replyInfo {
      display: flex;
      gap: 20px;
    }
  }
`;
