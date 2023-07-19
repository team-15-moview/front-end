// 리액트 쿼리 관련
import { useMutation, useQuery, useQueryClient } from "react-query";

// 컴포넌트
import ProfileInfo from "../components/Review/ProfileInfo";
import LikeReply from "../components/common/LikeReply";
import ReviewSkeleton from "../components/Review/ReviewSkeleton";

// 스타일 관련
import * as styled from "./../components/Review/reviewStyle";

// API 관련
import { deleteReview, getReviewByIdP, putReview } from "../api/review";

// 훅
import { useReviewId } from "../hooks/usePageParam";
import useModal from "../hooks/useModal";

// SVG 아이콘
import { ReactComponent as Like } from "../assets/icons/like.svg";
import { ReactComponent as Reply } from "../assets/icons/reply.svg";

// 모달 컴포넌트
import ReviewAddModal from "../components/modals/ReplyAddModal";
import Comments from "../components/Review/Comments";
import { deleteLike, postLike } from "../api/like";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Review() {
  const navigate = useNavigate();
  const review_id = useReviewId();
  const queryClient = useQueryClient();
  const likePostMutation = useMutation(postLike,{
    onSuccess: ()=>{
      queryClient.invalidateQueries(`review${review_id}`);
    }
  });
  const likeDeleteMutation = useMutation(deleteLike,{
    onSuccess: ()=>{
      queryClient.invalidateQueries(`review${review_id}`);
    }
  });
  const ReviewEditMutation = useMutation(putReview,{
    onSuccess: ()=>{
      queryClient.invalidateQueries(`review${review_id}`);
    }
  });
  const ReviewDeleteMutation = useMutation(deleteReview,{
    onSuccess: () =>{
      queryClient.invalidateQueries(`review${review_id}`);
    }
  })

  const [Modal, openModal, closeModal, openerRef] = useModal();

  const defaultReview = {
    author: "test1",
    review_id: 1,
    content: "최고의 영화!",
    likes_count: 1,
    star: 10.0,
    like_by_user: false,
    movie: {
      title: "미션 임파서블: 데드 레코닝 PART ONE",
      open_date: "2023-07-12",
      director: "크리스토퍼 맥쿼리",
      thumbnail:
        "https://t1.daumcdn.net/movie/0d12852246b3471b3afa871a539bb0b2a0b7ed2b",
    },
  };

  const { data, isLoading, error } = useQuery(
    `review${review_id}`,
    getReviewByIdP(review_id)
  );

  if (isLoading) {
    return <ReviewSkeleton />;
  }

  let review = data ? data.data : defaultReview;
  let reviewedmovie = data ? data.data.movie : defaultReview;

  if (error) {
    review = defaultReview;
    reviewedmovie = defaultReview.movie;
    console.log(error.message);
  }
  console.log(review)

  
  const likeOnClick = () =>{
    review.like_by_user?
    likeDeleteMutation.mutate({review_id})
    :
    likePostMutation.mutate({review_id})
  }

  return (
    <>
      <styled.MovieReviewContainer>
        <styled.ReviewRow>
          <div className="cols">
            <ProfileInfo
              profile={null}
              nickname={review.author}
              star={review.star}
            />
            <styled.ReviewContent>
              <p>{review.content}</p>
            </styled.ReviewContent>
          </div>
          <div className="cols">
            <styled.MovieInfoSection>
              <styled.MovieDesc>
                <p>{reviewedmovie.title}</p>
                <p>{reviewedmovie.open_date}</p>
                <p>{reviewedmovie.director}</p>
              </styled.MovieDesc>
              <figure>
                <img src={reviewedmovie.thumbnail} alt="포스터" />
              </figure>
            </styled.MovieInfoSection>
          </div>
        </styled.ReviewRow>
        <styled.LikeReplyRow>
          <LikeReply likes={review.likes_count} comments={review.comments_count}/>
          <button onClick={()=>ReviewEditMutation.mutate({reviewId:review_id,content:'정말 재미있어요',star:5})}>dsfsdfsdf</button>
          <button onClick={()=>{ReviewDeleteMutation.mutate({reviewId:review_id}); navigate('/');}}>삭제</button>
        </styled.LikeReplyRow>
        <styled.ReviewLikeReplyButtons>
          <button onClick={likeOnClick}>
            <Like /> 좋아요
          </button>
          <button onClick={openModal} ref={openerRef}>
            <Reply /> 댓글
          </button>
          {Modal && (
            <Modal>
              <ReviewAddModal closeModal={closeModal} review_id={review.review_id}/>
            </Modal>
          )}
        </styled.ReviewLikeReplyButtons>
        <Comments review_id={review.review_id}/>
      </styled.MovieReviewContainer>
    </>
  );
}
