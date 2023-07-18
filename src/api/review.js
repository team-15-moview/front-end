import ourAxios from "./ourAxios"
import { deleteWithToken, postWithToken, putWithToken } from "./user";

export const postReview = async ({movieId, content, star} ) => {
  await postWithToken(`api/movies/${movieId}/reviews`, {content, star});
}

export const putReview = async ({movieId, reviewId, content, star}) => {
  await putWithToken(`api/movies/${movieId}/reviews/${reviewId}`, {content, star});
}

export const deleteReview = async ({movieId, reviewId}) => {
  await deleteWithToken(`api/movies/${movieId}/reviews/${reviewId}`);
}

export const getReviewsP = (movieId,lastReviewId) => async () => {
  console.log(movieId)
  const response = await ourAxios.get(`api/reviews?movieId=${movieId}&lastReviewId=${lastReviewId}&size=2`);
  return response;
}

export const getReviewByIdP = (reviewId) => async () => {
  const response = await ourAxios.get(`api/reviews/${reviewId}`);
  return response;
}