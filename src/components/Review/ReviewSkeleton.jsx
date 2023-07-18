import React from "react";
import * as s from "./reviewStyle";
import styled, { keyframes } from "styled-components";
import Loading from "./../common/Loading";

export default function ReviewSkeleton() {
  return (
    <>
      <Loading />
      <MovieReviewContainerSkeleton>
        <s.ReviewRow>
          <div className="cols">
            <ProfileInfoSkeleton />
            <ReviewContentSkeleton />
          </div>
          <div className="cols">
            <s.MovieInfoSection>
              <MovieDescSkeleton />
              <MovieThumbnailSkeleton />
            </s.MovieInfoSection>
          </div>
        </s.ReviewRow>
        <s.LikeReplyRow>
          <LikeReplySkeleton />
        </s.LikeReplyRow>
        <s.ReviewLikeReplyButtons>
          <button>
            <LikeSkeleton />
          </button>
          <button>
            <ReplySkeleton />
          </button>
        </s.ReviewLikeReplyButtons>
        <s.CommentRow>
          <CommentSkeleton />
        </s.CommentRow>
      </MovieReviewContainerSkeleton>
    </>
  );
}

const skeletonShimmer = keyframes`
  0% {
    background-position: -200px 0;
  }

  100% {
    background-position: 200px 0;
  }
`;

export const MovieReviewContainerSkeleton = styled(s.MovieReviewContainer)`
  width: 100vw;
  height: 100vh;
`;

export const ProfileInfoSkeleton = styled.div`
  width: 150px;
  height: 30px;
  background: linear-gradient(90deg, #f2f2f2 0px, #e6e6e6 50%, #f2f2f2 100%);
  background-size: 200px 100%;
  animation: ${skeletonShimmer} 1.5s infinite;
`;

export const ReviewContentSkeleton = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(90deg, #f2f2f2 0px, #e6e6e6 50%, #f2f2f2 100%);
  background-size: 200px 100%;
  animation: ${skeletonShimmer} 1.5s infinite;
`;

export const MovieDescSkeleton = styled.div`
  width: 200px;
  height: 20px;
  background: linear-gradient(90deg, #f2f2f2 0px, #e6e6e6 50%, #f2f2f2 100%);
  background-size: 200px 100%;
  animation: ${skeletonShimmer} 1.5s infinite;
`;

export const MovieThumbnailSkeleton = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: calc((9 / 16) * 100%);
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #f2f2f2 0px, #e6e6e6 50%, #f2f2f2 100%);
    background-size: 200px 100%;
    animation: ${skeletonShimmer} 1.5s infinite;
  }
`;

export const LikeReplySkeleton = styled.div`
  width: 100px;
  height: 30px;
  background: linear-gradient(90deg, #f2f2f2 0px, #e6e6e6 50%, #f2f2f2 100%);
  background-size: 200px 100%;
  animation: ${skeletonShimmer} 1.5s infinite;
`;

export const LikeSkeleton = styled.div`
  width: 16px;
  height: 16px;
  background: linear-gradient(90deg, #f2f2f2 0px, #e6e6e6 50%, #f2f2f2 100%);
  background-size: 200px 100%;
  animation: ${skeletonShimmer} 1.5s infinite;
`;

export const ReplySkeleton = styled.div`
  width: 16px;
  height: 16px;
  background: linear-gradient(90deg, #f2f2f2 0px, #e6e6e6 50%, #f2f2f2 100%);
  background-size: 200px 100%;
  animation: ${skeletonShimmer} 1.5s infinite;
`;

export const CommentSkeleton = styled.div`
  width: 100%;
  height: 70px;
  background: linear-gradient(90deg, #f2f2f2 0px, #e6e6e6 50%, #f2f2f2 100%);
  background-size: 200px 100%;
  animation: ${skeletonShimmer} 1.5s infinite;
`;
