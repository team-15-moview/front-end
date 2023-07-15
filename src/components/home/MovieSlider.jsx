import React from "react";
import { MovieSliderList, MovieSliderH1 } from "./homeStyle";
import { LayoutMargin } from "../../styles/commonStyle";
import MovieCard from "./MovieCard";

export default function MovieSlider({ children }) {
  return (
    <LayoutMargin>
      <MovieSliderH1>{children}</MovieSliderH1>
      <MovieSliderList>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </MovieSliderList>
    </LayoutMargin>
  );
}
