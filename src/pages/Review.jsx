import LikeReplyButtons from "../components/Review/LikeReplyButtons";
import ProfileInfo from "../components/Review/ProfileInfo";
import LikeReply from "../components/common/LikeReply";
import * as styled from "./../components/Review/reviewStyle";

export default function Review() {
  return (
    <>
      <styled.MovieReviewContainer>
        <styled.ReviewRow>
          <div className="cols">
            <ProfileInfo star />
            <styled.ReviewContent>
              <textarea placeholder="리뷰를 입력하세요" />
            </styled.ReviewContent>
          </div>
          <div className="cols">
            <styled.MovieInfoSection>
              <styled.MovieDesc>
                <p>영화제목</p>
                <p>개봉연도</p>
                <p>감독</p>
              </styled.MovieDesc>
              <figure>
                <img src="" alt="포스터" />
              </figure>
            </styled.MovieInfoSection>
          </div>
        </styled.ReviewRow>
        <styled.LikeReplyRow>
          <LikeReply likes="45" comments="10" />
        </styled.LikeReplyRow>
        <div>
          <LikeReplyButtons />
        </div>
        <styled.CommentRow>
          <div className="reply">
            <ProfileInfo content="좋아요~" />
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
