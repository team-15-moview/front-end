import React from "react";
import {
  StyledReviewBox,
  ReviewBoxRow,
  UserReview,
  StyledLikeReply,
} from "../../styles/commonStyle";
import { ReactComponent as Like } from "../../assets/icons/like.svg";
import { ReactComponent as Reply } from "../../assets/icons/reply.svg";

import { useNavigate } from "react-router-dom";
import ProfileInfo from "../Review/ProfileInfo";

export default function ReviewBox({ review }) {
  const navigate = useNavigate();
  return (
    <StyledReviewBox onClick={() => navigate(`/reviews/${review.review_id}`)}>
      <ReviewBoxRow>
        <ProfileInfo profile={null} nickname={review.nickname} />
        <div>⭐{review.star}</div>
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
