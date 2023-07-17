import React from "react";
import { MovieSliderItem } from "./homeStyle";
import Star from "../common/Star";

export default function MovieCard({ movie }) {
  return (
    <MovieSliderItem>
      <img src={movie.thumbnail} alt="포스터" />
      <figcaption>
        <p className="movieTitle">{movie.title}</p>
        <p className="movieTitle">{movie.open_date}</p>
        <Star star={movie.rate} />
      </figcaption>
    </MovieSliderItem>
  );
}
