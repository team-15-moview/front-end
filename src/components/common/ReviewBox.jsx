import React from "react";
import Star from "./Star";
import {
  StyledReviewBox,
  ReviewBoxRow,
  UserProfile,
  UserReview,
} from "../../styles/commonStyle";
import LikeReply from "./LikeReply";

export default function ReviewBox({ review }) {
  return (
    <StyledReviewBox>
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
