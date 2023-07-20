import React, { useState } from "react";
import { ReviewModalButton } from "../Review/reviewStyle";
import { useMutation, useQueryClient } from "react-query";
import { postComment } from "../../api/comment";
import { WriteCard } from "./modalStyle";
import { ReactComponent as Close } from "../../assets/icons/close.svg";

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
    <WriteCard>
      <button className="closeButton" onClick={closeModal}>
        <Close fill="var(--font-Color)" />
      </button>
      <div>
        <h1>댓글 작성</h1>
        <textarea
          name=""
          id=""
          className="textbox"
          cols="30"
          rows="10"
          onChange={onChangeHandler}
          value={content}
          placeholder="리뷰에 댓글을 작성해보세요!"
        />
      </div>
      <ReviewModalButton onClick={onSubmitHandler} $bg="var(--main-Color)">
        저장
      </ReviewModalButton>
    </WriteCard>
  );
}
