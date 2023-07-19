import { useMutation, useQuery, useQueryClient } from "react-query"
import { CommentRow } from "./reviewStyle"
import { deleteComment, getCommentsP } from "../../api/comment"
import ProfileInfo from "./ProfileInfo";
import useModal from "../../hooks/useModal";
import ReplyEditModal from "../modals/ReplyEditModal";
import { useState } from "react";

function Comments({ review_id }) {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(`comments${review_id}`, getCommentsP(review_id, -1));
  const deleteMutation = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(`comments${review_id}`);
      queryClient.invalidateQueries(`review${review_id}`);
    }
  })
  const [Modal, openModal, closeModal, openerRef] = useModal();
  const [editComment, setEditComment] = useState({id:0,content:''});

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
            <div className="replyButtons">
              <button onClick={()=>{openModal(); setEditComment({id:comment.id, content:comment.content})}}>편집</button>
              <button onClick={onDeleteComment(comment.id)}>삭제</button>
            </div>
          </div>
        ))}
      </CommentRow>
      <Modal>
        <ReplyEditModal closeModal={closeModal} review_id={review_id} comment_id={editComment.id} originerReview={editComment.content}/>
      </Modal>
    </>

  )
}

export default Comments