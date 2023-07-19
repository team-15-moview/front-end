import React, { useState } from "react";
import { ReviewModalButton, ReviewModalWrapper } from "../Review/reviewStyle";
import { useMutation, useQueryClient } from "react-query";

export default function ReplyAddModal({ closeModal, review_id,  }) {
  // const [content, setContent] = useState("");
  // const queryClient = useQueryClient();
  // const mutation = useMutation(postCo,{
  //   onSuccess:()=>{
  //     queryClient.invalidateQueries('reviewList');
  //   }
  // })

  // const onChangeHandler = (event) => {
  //   setContent(event.target.value);
  // }

  // const onSubmitHandler = () => {
  //   mutation.mutate({movie_id,content,star});
  //   closeModal();
  // }


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
