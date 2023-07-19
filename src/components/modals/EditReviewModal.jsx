import { useState } from "react";
import { WriteCard } from "./modalStyle"
import { useMutation, useQueryClient } from "react-query";
import { putReview } from "../../api/review";

function EditReviewModal({title, review_id, star, closeModal, originalContent}) {
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();
  const mutation = useMutation(putReview,{
    onSuccess:()=>{
      queryClient.invalidateQueries(`review${review_id}`);
    }
  })

  const onChangeHandler = (event) => {
    setContent(event.target.value);
  }

  const onSubmitHandler = () => {
    mutation.mutate({reviewId:review_id,content,star});
    closeModal();
  }
  return (
    <WriteCard>
      <div className="header">
        <div className="title">{title}</div>
        <div className="closeButton" onClick={closeModal}>X</div>
      </div>
      <textarea type="text" className="textbox edit" value={content} placeholder={originalContent} onChange={onChangeHandler}/>
      <div className="submitContainer">
        <button className="submit" onClick={onSubmitHandler}>제출</button>
      </div>
    </WriteCard>
  )
}

export default EditReviewModal