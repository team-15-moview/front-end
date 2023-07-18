import { getWithToken, postWithToken } from "./user"

const postComment = async ({review_id, content}) =>{
  await postWithToken(`api/reviews/${review_id}/comments`,{content});
}

const getComment = ({review_id}) => async () => {
  const response = await getWithToken(`api/reviews/${review_id}/comments`);
  return response;
}

const putComment = ({comment_id}) => async () => {
  await putWithToken(``);
}