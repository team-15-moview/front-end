import React, { useState } from "react";
import {
  MovieSliderH1,
  MovieSliderBox,
  MovieLeftIcon,
  MovieRightIcon,
} from "./homeStyle";
import { LayoutMargin } from "../../styles/commonStyle";
import MovieCard from "./MovieCard";

import { StyleSheetManager } from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as Left } from "../../assets/icons/left.svg";
import { ReactComponent as Right } from "../../assets/icons/right.svg";
import { useQuery } from "react-query";
import { getMoviesbyJenreP } from "../../api/movie";

export default function MovieSlider({ children , genre}) {

  const {data, isLoading} = useQuery(`${genre}Movies`,getMoviesbyJenreP(genre));

  if(isLoading){
    return <></>
  }
  
  const movies = data.data;
  
  // Props 에러 방지
  const shouldForwardProp = (prop) =>
    prop !== "currentSlide" && prop !== "slideCount";

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    nextArrow: (
      <MovieRightIcon>
        <Right />
      </MovieRightIcon>
    ),
    prevArrow: (
      <MovieLeftIcon>
        <Left />
      </MovieLeftIcon>
    ),
  };

  return (
    <LayoutMargin>
      <MovieSliderH1>{children}</MovieSliderH1>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <MovieSliderBox {...settings}>
          {movies.map((movie) => (
            <MovieCard key={movie.movie_id} movie={movie} />
          ))}
        </MovieSliderBox>
      </StyleSheetManager>
    </LayoutMargin>
  );
}
