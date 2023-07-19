import React from "react";
import { StyledLikeReply } from "../../styles/commonStyle";

import { ReactComponent as Like } from "../../assets/icons/like.svg";
import { ReactComponent as Reply } from "../../assets/icons/reply.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
import { QueryClient, useMutation } from "react-query";
import { deleteReview } from "../../api/review";
import { useNavigate } from "react-router-dom";
import useModal from "../../hooks/useModal";
import EditReviewModal from "../modals/EditReviewModal";

export default function LikeReply({
  likes_count,
  comments_count,
  review_id,
  is_author,
  movie,
  content,
  star,
  like_by_user,
}) {
  const navigate = useNavigate();
  const [Modal, openModal, closeModal, openerRef] = useModal();

  const ReviewDeleteMutation = useMutation(deleteReview, {
    onSuccess: () => {
      QueryClient.invalidateQueries(`review${review_id}`);
    },
  });

  const onDelete = () => {
    ReviewDeleteMutation.mutate({ reviewId: review_id });
    navigate("/");
  };

  const onClickEdit = () => {
    openModal();
  };

  return (
    <StyledLikeReply>
      <div>좋아요 {likes_count}</div>
      <div>댓글 {comments_count}</div>
      <div />
      {is_author ? (
        <>
          <div className="clickable" onClick={onClickEdit} ref={openerRef}>
            <Edit /> 수정
          </div>
          <div onClick={onDelete} className="clickable">
            <Delete /> 삭제
          </div>
          <Modal>
            <EditReviewModal
              title={movie.title}
              {...{ review_id, closeModal, star }}
              originalContent={content}
            />
          </Modal>
        </>
      ) : (
        <></>
      )}
    </StyledLikeReply>
  );
}
