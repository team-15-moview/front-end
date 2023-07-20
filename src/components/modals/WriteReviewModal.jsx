import { useState } from "react";
import { WriteCard } from "./modalStyle";
import { useMutation, useQueryClient } from "react-query";
import { postReview } from "../../api/review";
import { ReviewModalButton } from "./../Review/reviewStyle";
import { ReactComponent as Close } from "../../assets/icons/close.svg";

function WriteReviewModal({ title, movie_id, star, closeModal }) {
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();
  const mutation = useMutation(postReview, {
    onSuccess: () => {
      queryClient.invalidateQueries(`movie${movie_id}`);
    }
  });

  const onChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const onSubmitHandler = () => {
    mutation.mutate({ movie_id, content, star });
    closeModal();
  };

  return (
    <WriteCard>
      <button className="closeButton" onClick={closeModal}>
        <Close fill="var(--font-Color)" />
      </button>
      <div>
        <h1>{title}</h1>
        <textarea
          type="text"
          placeholder="영화에 대한 리뷰를 자유롭게 남겨주세요."
          className="textbox"
          cols="30"
          rows="20"
          value={content}
          onChange={onChangeHandler}
        />
      </div>
      <ReviewModalButton
        className="submit"
        onClick={onSubmitHandler}
        $bg="var(--main-Color)"
      >
        제출
      </ReviewModalButton>
    </WriteCard>
  );
}

export default WriteReviewModal;
