import React, { useState } from "react";
import { StyleSheetManager } from "styled-components";
import { BannerSliderBox } from "./homeStyle";
import { LeftIcon, RightIcon } from "../../styles/commonStyle";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as Left } from "../../assets/icons/left.svg";
import { ReactComponent as Right } from "../../assets/icons/right.svg";

import BannerCard from "./BannerCard";
import { useQuery } from "react-query";
import { getTopFiveMovies } from "../../api/movie";

export default function BannerSlider() {
  const { data, isLoading } = useQuery("top5Movies", getTopFiveMovies);
  if (isLoading) {
    return <></>;
  }

  const top5movies = data.data;

  // Props 에러 방지
  const shouldForwardProp = (prop) =>
    prop !== "currentSlide" && prop !== "slideCount";

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    nextArrow: (
      <RightIcon>
        <Right />
      </RightIcon>
    ),
    prevArrow: (
      <LeftIcon>
        <Left />
      </LeftIcon>
    ),
  };

  return (
    <aside>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <BannerSliderBox {...settings}>
          {top5movies.map((movie, index) => (
            <BannerCard
              key={movie.movie_id}
              movie={movie}
              ranking={index + 1}
            />
          ))}
        </BannerSliderBox>
      </StyleSheetManager>
    </aside>
  );
}
