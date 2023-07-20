import React from "react";
import {
  BannerCardItem,
  BannerCardFigure,
  BannerReviewBox,
  BannerCardFicaption,
} from "./homeStyle";

import { useInView } from "react-intersection-observer";
import { renderStars } from "../../utils/renderStar";
import { useNavigate } from "react-router";
import BannerCardReviewBox from "./BannerCardReviewBox";

export default function BannerCard({ movie, ranking }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const animationStyles = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    transition: "opacity 1s ease, transform 1.5s ease",
  };

  const navigate = useNavigate();
  return (
    <BannerCardItem>
      <BannerCardFigure>
        <img
          src={movie.still}
          alt="스틸컷"
          onClick={() => navigate(`/movies/${movie.movie_id}`)}
          loading="lazy"
        />
        <BannerCardFicaption ref={ref} style={animationStyles}>
          <p className="movie_title">{movie.title}</p>
          <p className="movie_id">{ranking}</p>
          <div className="movie_rate">{renderStars(movie.rate)}</div>
        </BannerCardFicaption>
      </BannerCardFigure>
      <BannerReviewBox ref={ref} style={animationStyles}>
        {movie.reviews.map((review) => (
          <BannerCardReviewBox key={review.review_id} review={review} />
        ))}
      </BannerReviewBox>
    </BannerCardItem>
  );
}
