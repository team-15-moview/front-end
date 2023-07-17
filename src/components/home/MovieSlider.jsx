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
  const [Movies, setMovies] = useState([
    {
      movie_id: 1,
      title: "하울의 움직이는 성",
      open_date: "2004",
      director: "미야자키 하야오",
      genre: "애니메이션",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/ko/4/4a/%ED%95%98%EC%9A%B8%EC%9D%98_%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94_%EC%84%B1_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
      still: "link",
      rate: "9.35",
    },
    {
      movie_id: 2,
      title: "하울의 움직이는 성",
      open_date: "2004",
      director: "미야자키 하야오",
      genre: "애니메이션",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/ko/4/4a/%ED%95%98%EC%9A%B8%EC%9D%98_%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94_%EC%84%B1_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
      still: "link",
      rate: "9.35",
    },
    {
      movie_id: 3,
      title: "하울의 움직이는 성",
      open_date: "2004",
      director: "미야자키 하야오",
      genre: "애니메이션",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/ko/4/4a/%ED%95%98%EC%9A%B8%EC%9D%98_%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94_%EC%84%B1_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
      still: "link",
      rate: "9.35",
    },
    {
      movie_id: 4,
      title: "하울의 움직이는 성",
      open_date: "2004",
      director: "미야자키 하야오",
      genre: "애니메이션",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/ko/4/4a/%ED%95%98%EC%9A%B8%EC%9D%98_%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94_%EC%84%B1_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
      still: "link",
      rate: "9.35",
    },
    {
      movie_id: 5,
      title: "하울의 움직이는 성",
      open_date: "2004",
      director: "미야자키 하야오",
      genre: "애니메이션",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/ko/4/4a/%ED%95%98%EC%9A%B8%EC%9D%98_%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94_%EC%84%B1_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
      still: "link",
      rate: "9.35",
    },
    {
      movie_id: 6,
      title: "하울의 움직이는 성",
      open_date: "2004",
      director: "미야자키 하야오",
      genre: "애니메이션",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/ko/4/4a/%ED%95%98%EC%9A%B8%EC%9D%98_%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94_%EC%84%B1_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
      still: "link",
      rate: "9.35",
    },
  ])

  const {data, isSuccess} = useQuery("genreMovies",getMoviesbyJenreP(genre));

  if(isSuccess){
    setMovies(data);
  }

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
          {Movies.map((movie) => (
            <MovieCard key={movie.movie_id} movie={movie} />
          ))}
        </MovieSliderBox>
      </StyleSheetManager>
    </LayoutMargin>
  );
}
