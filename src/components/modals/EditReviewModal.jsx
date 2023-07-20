import { useState } from "react";
import { WriteCard } from "./modalStyle";
import { useMutation, useQueryClient } from "react-query";
import { putReview } from "../../api/review";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReviewModalButton } from "../Review/reviewStyle";

function EditReviewModal({
  title,
  review_id,
  star,
  closeModal,
  originalContent,
  movie_id
}) {
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();
  const mutation = useMutation(putReview, {
    onSuccess: () => {
      queryClient.invalidateQueries(`review${review_id}`);
      queryClient.invalidateQueries(`reviewList${movie_id}`);
      queryClient.invalidateQueries(`movie${movie_id}`);
    },
  });

  const onChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const onSubmitHandler = () => {
    mutation.mutate({ reviewId: review_id, content, star });
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
          className="textbox"
          cols="30"
          rows="20"
          value={content}
          placeholder={originalContent}
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

export default EditReviewModal;
