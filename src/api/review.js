import ourAxios from "./ourAxios"

export const postReview = async ({movieId, content, star} ) => {
  await ourAxios.post(`api/movies/${movieId}/reviews`, {content, star});
}

export const putReview = async ({movieId, reviewId, content, star}) => {
  await ourAxios.put(`api/movies/${movieId}/reviews/${reviewId}`, {content, star});
}

export const deleteReview = async ({movieId, reviewId}) => {
  await ourAxios.delete(`api/movies/${movieId}/reviews/${reviewId}`);
}

export const getReviewsP = (movieId,lastReviewId) => async () => {
  const response = await ourAxios.get(`api/reviews?movieId=${movieId}&lastReviewId=${lastReviewId}&size=10`);
  return response;
}

export const getReviewByIdP = (reviewId) => async () => {
  const response = await ourAxios.get(`api/reviews/${reviewId}`);
  return response;
}