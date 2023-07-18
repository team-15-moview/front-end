import { useQuery } from "react-query";
import MovieInfo from "../components/movie/MovieInfo";
import Reviews from "../components/movie/Reviews";
import StillBackground from "../components/movie/StillBackground";
import { LayoutMargin } from "../styles/commonStyle";
import { getMoviebyIdP } from "../api/movie";
import { useMovieId } from "../hooks/usePageParam";
import { useState } from "react";

function Movie() {

  const { data, isLoading } = useQuery("movie", getMoviebyIdP(useMovieId()));

  if (isLoading) {
    return <></>
  }
  const movie = data.data;
  
  return (
    <>
      <StillBackground src={movie.still} />
      <LayoutMargin>
        <MovieInfo {...movie} />
        <Reviews />
      </LayoutMargin>
    </>
  );
}

export default Movie;
