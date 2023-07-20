import React, { useState } from "react";
import { ReviewModalButton, ReviewModalWrapper } from "../Review/reviewStyle";
import { useMutation, useQueryClient } from "react-query";
import { postComment } from "../../api/comment";

export default function ReplyAddModal({ closeModal, review_id }) {
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();
  const mutation = useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(`comments${review_id}`);
      queryClient.invalidateQueries(`review${review_id}`);
    },
  });

  const onChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const onSubmitHandler = () => {
    mutation.mutate({ review_id, content });
    closeModal();
  };

  return (
    <ReviewModalWrapper>
      <button className="closeButton" onClick={closeModal}>
        X
      </button>
      <div>
        <h1>댓글 작성</h1>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="이 리뷰에 대한 생각을 자유롭게 남겨주세요."
          onChange={onChangeHandler}
          value={content}
        />
      </div>
      <ReviewModalButton onClick={onSubmitHandler} $bg="var(--main-Color)">
        저장
      </ReviewModalButton>
    </ReviewModalWrapper>
  );
}
