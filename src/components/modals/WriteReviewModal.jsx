import { useState } from "react";
import { WriteCard } from "./modalStyle"
import { useMutation, useQueryClient } from "react-query";
import { postReview } from "../../api/review";

function WriteReviewModal({title, movie_id, star, closeModal}) {
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();
  const mutation = useMutation(postReview,{
    onSuccess:()=>{
      queryClient.invalidateQueries('reviewList');
    }
  })

  const onChangeHandler = (event) => {
    setContent(event.target.value);
  }

  const onSubmitHandler = () => {
    mutation.mutate({movie_id,content,star});
    closeModal();
  }
  return (
    <WriteCard>
      <div className="header">
        <div className="title">{title}</div>
        <div className="closeButton" onClick={closeModal}>X</div>
      </div>
      <textarea type="text" placeholder="영화에 대한 리뷰를 자유롭게 남겨주세요." className="textbox" value={content} onChange={onChangeHandler}/>
      <div className="submitContainer">
        <button className="submit" onClick={onSubmitHandler}>제출</button>
      </div>
    </WriteCard>
  )
}

export default WriteReviewModal