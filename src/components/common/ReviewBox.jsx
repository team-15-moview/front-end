import React from "react";
import Star from "./Star";
import {
  StyledReviewBox,
  ReviewBoxRow,
  UserProfile,
  UserReview,
} from "../../styles/commonStyle";
import LikeReply from "./LikeReply";
import { useNavigate } from "react-router-dom";

export default function ReviewBox({ review }) {
  const navigate = useNavigate();
  return (
    <StyledReviewBox onClick={()=>navigate(`/reviews/${review.review_id}`)}>
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
          <LikeReply
            likes={review.likes_count}
            comments={review.comments_count}
          />
        </UserReview>
      </ReviewBoxRow>
    </StyledReviewBox>
  );
}
