import React from "react";
import { StyleSheetManager } from "styled-components";
import { BannerSliderBox } from "./homeStyle";
import { LeftIcon, RightIcon } from "../../styles/commonStyle";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as Left } from "../../assets/icons/left.svg";
import { ReactComponent as Right } from "../../assets/icons/right.svg";

import BannerCard from "./BannerCard";

export default function BannerSlider() {
  const top5Movies = [
    {
      movie_id: 1,
      title: "하울의 움직이는 성",
      still:
        "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/c6Ad/image/nqyWegzq2oBYgABzbz-3oFqVoSg.jpeg",
      rate: "9.35",
      reviews: [
        {
          review_id: 1,
          nickname: "무린이",
          content: "최고의 영화!",
          likes_count: 437,
          comments_count: 3,
          star: 10,
        },
        {
          review_id: 2,
          nickname: "무뷰유저",
          content: "갓 미야자키 하야오",
          likes_count: 399,
          comments_count: 5,
          star: 10,
        },
        {
          review_id: 3,
          nickname: "사용자1",
          content: "재밌고 귀여워요",
          likes_count: 399,
          comments_count: 5,
          star: 10,
        },
      ],
    },
    {
      movie_id: 2,
      title: "이웃집 토토로",
      still:
        "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Iye/image/WQbiAQ6iqBky2LSzvR5BQjJhhrs.jpg",
      rate: "7",
      reviews: [
        {
          review_id: 1,
          nickname: "무린이",
          content: "최고의 영화!",
          likes_count: 437,
          comments_count: 3,
          star: 10,
        },
      ],
    },
  ];

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
          {top5Movies.map((movie) => (
            <BannerCard key={movie.movie_id} movie={movie} />
          ))}
        </BannerSliderBox>
      </StyleSheetManager>
    </aside>
  );
}
