import { useQuery } from "react-query";
import ProfileInfo from "../components/Review/ProfileInfo";
import LikeReply from "../components/common/LikeReply";
import * as styled from "./../components/Review/reviewStyle";
import { getReviewByIdP } from "../api/review";
import { useReviewId } from "../hooks/usePageParam";
import Loading from "../components/common/Loading";
import { ReactComponent as Like } from "../assets/icons/like.svg";
import { ReactComponent as Reply } from "../assets/icons/reply.svg";
import useModal from "../hooks/useModal";
import ReviewAddModal from "../components/modals/ReplyAddModal";

export default function Review() {
  const [Modal, openModal, closeModal, openerRef] = useModal();
  // const defaultReview = [{

  // }]

  const { data, isLoading, error } = useQuery(
    "review",
    getReviewByIdP(useReviewId())
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // const review = data ? data.data : defaultReview;
  // const reviewedmovie = data ? defaultReview;

  console.log(review);

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
