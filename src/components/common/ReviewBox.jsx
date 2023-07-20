import React from "react";
import Star from "./Star";
import {
  StyledReviewBox,
  ReviewBoxRow,
  UserProfile,
  UserReview,
  StyledLikeReply,
} from "../../styles/commonStyle";
import { ReactComponent as Like } from "../../assets/icons/like.svg";
import { ReactComponent as Reply } from "../../assets/icons/reply.svg";

import { useNavigate } from "react-router-dom";

export default function ReviewBox({ review }) {
  console.log(review);
  const navigate = useNavigate();
  return (
    <StyledReviewBox onClick={() => navigate(`/reviews/${review.review_id}`)}>
      <ReviewBoxRow>
        <UserProfile>
          <figure>
            <img alt="프로필" />
          </figure>
          <p>{review.nickname}</p>
        </UserProfile>
        <Star star={review.star} />
      </ReviewBoxRow>
      <ReviewBoxRow>
        <UserReview>
          <p>{review.content}</p>
          <StyledLikeReply>
            <div>
              <Like fill="gray" />
              {review.likes_count}
            </div>
            <div>
              <Reply /> {review.comments_count}
            </div>
          </StyledLikeReply>
        </UserReview>
      </ReviewBoxRow>
    </StyledReviewBox>
  );
}
