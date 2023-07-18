import React from "react";
import { ReviewModalButton, ReviewModalWrapper } from "../Review/reviewStyle";

export default function ReplyAddModal({ closeModal }) {
  return (
    <ReviewModalWrapper>
      <button className="closeButton" onClick={closeModal}>
        X
      </button>
      <div>
        <h1>댓글 작성</h1>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <ReviewModalButton bg="var(--main-Color)">저장</ReviewModalButton>
    </ReviewModalWrapper>
  );
}
