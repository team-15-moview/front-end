import { deleteWithToken, getWithToken, postWithToken, putWithToken } from "./user"

export const postComment = async ({review_id, content}) =>{
  await postWithToken(`api/reviews/${review_id}/comments`,{content});
}

export const getCommentsP = (review_id, lastCommentId) => async () => {
  const response = await getWithToken(`api/reviews/${review_id}/comments?lastCommentId=${lastCommentId}&size=10`);
  return response;
}

export const putComment = async ({review_id, comment_id, content}) => {
  await putWithToken(`api/reviews/${review_id}/comments/${comment_id}`,{content});
}

export const deleteComment = async ({review_id, comment_id}) => {
  await deleteWithToken(`api/reviews/${review_id}/comments/${comment_id}`);
}