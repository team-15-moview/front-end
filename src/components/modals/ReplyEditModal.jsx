import React, { useState } from "react";
import { ReviewModalButton, ReviewModalWrapper } from "../Review/reviewStyle";
import { useMutation, useQueryClient } from "react-query";
import { putComment } from "../../api/comment";

function ReplyEditModal({closeModal, review_id, comment_id, originalReview}) {
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();
  const mutation = useMutation(putComment,{
    onSuccess:()=>{
      queryClient.invalidateQueries(`comments${review_id}`);
      queryClient.invalidateQueries(`review${review_id}`);
    }
  })

  const onChangeHandler = (event) => {
    setContent(event.target.value);
  }

  const onSubmitHandler = () => {
    mutation.mutate({review_id,comment_id,content});
    closeModal();
  }


  return (
    <ReviewModalWrapper>
      <button className="closeButton" onClick={closeModal}>
        X
      </button>
      <div>
        <h1>댓글 수정</h1>
        <textarea name="" id="" cols="30" rows="10" placeholder={originalReview} onChange={onChangeHandler} value={content} />
      </div>
      <ReviewModalButton onClick={onSubmitHandler} $bg="var(--main-Color)">저장</ReviewModalButton>
    </ReviewModalWrapper>
  );
}

export default ReplyEditModal