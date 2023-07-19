import ourAxios from "./ourAxios"
import { deleteWithToken, getWithToken, postWithToken, putWithToken } from "./user";

export const postReview = async ({movie_id, content, star} ) => {
  await postWithToken(`api/reviews`, {movie_id, content, star});
}

export const putReview = async ({reviewId, content, star}) => {
  await putWithToken(`api/reviews/${reviewId}`, {content, star});
}

export const deleteReview = async ({reviewId}) => {
  await deleteWithToken(`api/reviews/${reviewId}`);
}

export const getReviewsP = (movieId,lastReviewId) => async () => {
  const response = await ourAxios.get(`api/reviews?movieId=${movieId}&lastReviewId=${lastReviewId}&size=10`);
  return response;
}

export const getReviewByIdP = (reviewId) => async () => {
  const response = await getWithToken(`api/reviews/${reviewId}`);
  return response;
}