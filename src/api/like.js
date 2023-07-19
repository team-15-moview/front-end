import { deleteWithToken, postWithToken } from "./user";

export const postLike = async ({review_id} ) => {
  await postWithToken(`api/reviews/${review_id}/likes`);
}

export const deleteLike = async ({review_id} ) => {
  await deleteWithToken(`api/reviews/${review_id}/likes`);
}