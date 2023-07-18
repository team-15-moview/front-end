import React from "react";
import {
  BannerCardItem,
  BannerCardFigure,
  BannerReviewBox,
  BannerCardFicaption,
} from "./homeStyle";
import ReviewBox from "./../common/ReviewBox";

import { renderStars } from "../../utils/renderStar";
import { useNavigate } from "react-router";

export default function BannerCard({ movie, ranking }) {
  const navigate = useNavigate();
  return (
    <BannerCardItem>
      <BannerCardFigure>
        <img src={movie.still} alt="스틸컷" onClick={()=>navigate(`/movies/${movie.movie_id}`)}/>
        <BannerCardFicaption>
          <p className="movie_title">{movie.title}</p>
          <p className="movie_id">{ranking}</p>
          <div className="movie_rate">{renderStars(movie.star)}</div>
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
