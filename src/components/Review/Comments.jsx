import { useMutation, useQuery, useQueryClient } from "react-query"
import { CommentRow } from "./reviewStyle"
import { deleteComment, getCommentsP } from "../../api/comment"
import ProfileInfo from "./ProfileInfo";
import useModal from "../../hooks/useModal";
import ReplyEditModal from "../modals/ReplyEditModal";
import { useState } from "react";
import { StyledEditDelete } from "../../styles/commonStyle";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
import { useSelector } from "react-redux";

function Comments({ review_id }) {
  const nickname = useSelector((state) => state.userToken.nickname);
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(`comments${review_id}`, getCommentsP(review_id, -1));
  const deleteMutation = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(`comments${review_id}`);
      queryClient.invalidateQueries(`review${review_id}`);
    }
  })
  const [Modal, openModal, closeModal, openerRef] = useModal();
  const [editComment, setEditComment] = useState({ id: 0, content: '' });

  const onDeleteComment = (comment_id) => () => {
    deleteMutation.mutate({ review_id, comment_id });
  }


  if (isLoading)
    return <></>;
  const commentList = data.data.content;
  return (
    <>
      <CommentRow ref={openerRef}>
        {commentList.map(({ comment }) => (
          <div key={comment.id} className="reply">
            <ProfileInfo nickname={comment.nickname} profile={null} content={comment.content} />
            {
              nickname === comment.nickname ?
                <StyledEditDelete className="replyButtons">
                  <div className="clickable" onClick={() => { openModal(); setEditComment({ id: comment.id, content: comment.content }) }}>
                    <Edit /> 수정
                  </div>
                  <div onClick={onDeleteComment(comment.id)} className="clickable">
                    <Delete /> 삭제
                  </div>
                </StyledEditDelete>
                :
                <></>
            }

          </div>
        ))}
      </CommentRow>
      <Modal>
        <ReplyEditModal closeModal={closeModal} review_id={review_id} comment_id={editComment.id} originalReview={editComment.content} />
      </Modal>
    </>

  )
}

export default Comments