import { useQuery } from "react-query";
import Review from "./Review";
import { Heading, ReviewListContainer, ReviewSection } from "./movieStyle";
import { getReviewsP } from "../../api/review";
import { useMovieId } from "../../hooks/usePageParam";

function Reviews() {
  const { data, isLoading } = useQuery(
    `reviewList${useMovieId()}`,
    getReviewsP(useMovieId(), "9223372036854775807")
  );

  if (isLoading) {
    return <></>;
  }

  const reviewList = data.data.content;

  return (
    <ReviewSection>
      <Heading>리뷰</Heading>
      <ReviewListContainer>
        {reviewList.map((review) => (
          <Review key={review.review_id} review={review} />
        ))}
      </ReviewListContainer>
    </ReviewSection>
  );
}

export default Reviews;
