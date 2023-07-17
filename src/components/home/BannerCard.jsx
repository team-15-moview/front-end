import React from "react";
import {
  BannerCardItem,
  BannerCardFigure,
  BannerReviewBox,
  BannerCardFicaption,
} from "./homeStyle";
import ReviewBox from "./../common/ReviewBox";

import { renderStars } from "../../utils/renderStar";

export default function BannerCard({ movie }) {
  return (
    <BannerCardItem>
      <BannerCardFigure>
        <img src={movie.still} alt="스틸컷" />
        <BannerCardFicaption>
          <p className="movie_title">{movie.title}</p>
          <p className="movie_id">{movie.movie_id}</p>
          <div className="movie_rate">{renderStars(movie.rate)}</div>
        </BannerCardFicaption>
      </BannerCardFigure>
      <BannerReviewBox>
        {movie.reviews.map((review) => (
          <ReviewBox key={review.review_id} review={review} />
        ))}
      </BannerReviewBox>
    </BannerCardItem>
  );
}
