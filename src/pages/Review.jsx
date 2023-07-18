import { useQuery } from "react-query";
import ProfileInfo from "../components/Review/ProfileInfo";
import LikeReply from "../components/common/LikeReply";
import * as styled from "./../components/Review/reviewStyle";
import { getReviewByIdP } from "../api/review";
import { useReviewId } from "../hooks/usePageParam";
import { ReactComponent as Like } from "../assets/icons/like.svg";
import { ReactComponent as Reply } from "../assets/icons/reply.svg";
import useModal from "../hooks/useModal";
import ReviewAddModal from "../components/modals/ReplyAddModal";
import ReviewSkeleton from "../components/Review/ReviewSkeleton";

export default function Review() {
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
    "review",
    getReviewByIdP(useReviewId())
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

  return (
    <>
      <styled.MovieReviewContainer>
        <styled.ReviewRow>
          <div className="cols">
            <ProfileInfo
              profile={null}
              nickname={review.author}
              star={review.star / 2}
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
          <LikeReply likes={review.likes_count} comments="10" />
        </styled.LikeReplyRow>
        <styled.ReviewLikeReplyButtons>
          <button>
            <Like /> 좋아요
          </button>
          <button onClick={openModal} ref={openerRef}>
            <Reply /> 댓글
          </button>
          {Modal && (
            <Modal>
              <ReviewAddModal closeModal={closeModal} />
            </Modal>
          )}
        </styled.ReviewLikeReplyButtons>
        <styled.CommentRow>
          <div className="reply">
            <ProfileInfo nickname="더미" profile={null} content="좋아요~" />
            <div className="replyButtons">
              <button>편집</button>
              <button>삭제</button>
            </div>
          </div>
        </styled.CommentRow>
      </styled.MovieReviewContainer>
    </>
  );
}
