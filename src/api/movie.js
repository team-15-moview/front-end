import ourAxios from "./ourAxios"

export const getAllMovies = async () => {
  const response = await ourAxios.get('api/movies');
  return response;
}

export const getTopFiveMovies = async () => {
  const response = await ourAxios.get('api/movies/top5');
  return response;
}

export const getMoviesbyJenreP = (genre) => async () => {
  const response = await ourAxios.get(`api/movies?genre=${genre}`);
  return response;
}

export const getMoviebyIdP = (id) => async () => {
  const response = await ourAxios.get(`api/movies/${id}`);
  return response;
}


