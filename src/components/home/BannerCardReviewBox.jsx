import React from "react";
import { UserReview } from "../../styles/commonStyle";

import { useNavigate } from "react-router-dom";
import ProfileInfo from "../Review/ProfileInfo";

export default function BannerCardReviewBox({ review }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/reviews/${review.review_id}`)}
      className="bannerReviewWrapper"
    >
      <div className="reviewBoxRow">
        <ProfileInfo profile={null} nickname={review.nickname} />
        <div>⭐{review.star}</div>
      </div>
      <div className="reviewBoxRow">
        <UserReview>
          <p>{review.content}</p>
        </UserReview>
      </div>
    </div>
  );
}
