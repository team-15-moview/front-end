import { useParams } from "react-router";

export const useMovieId = () => {
  const {id} = useParams();
  return id;
}

export const useReviewId = () => {
  const {id} = useParams();
  return id;
}