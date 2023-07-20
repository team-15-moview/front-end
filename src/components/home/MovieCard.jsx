import React from "react";
import { MovieSliderItem } from "./homeStyle";
import Star from "../common/Star";
import { useNavigate } from "react-router";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <MovieSliderItem>
      <img src={movie.thumbnail} alt="포스터" onClick={()=>navigate(`/movies/${movie.movie_id}`)} loading="lazy"/>
      <figcaption>
        <p className="movieTitle">{movie.title}</p>
        <p className="movieTitle">{movie.open_date}</p>
        <Star star={movie.rate} />
      </figcaption>
    </MovieSliderItem>
  );
}
