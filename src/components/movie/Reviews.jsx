import { useQuery } from "react-query";
import Review from "./Review"
import { Heading, ReviewListContainer, ReviewSection } from "./style"
import { getReviewsP } from "../../api/review";
import { useReviewId } from "../../hooks/usePageParam";
import { useState } from "react";

function Reviews() {
  const [reviewList, setReviewList] = useState([
    {
      "review_id": 1,
      "nickname": "무린이",
      "content": "최고의 영화!",
      "likes_count": 437,
      "comments_count": 3,
      "star": 10
    },
    {
      "review_id": 2,
      "nickname": "무린이2",
      "content": "최고의 영화!",
      "likes_count": 437,
      "comments_count": 3,
      "star": 10
    },
    {
      "review_id": 3,
      "nickname": "무린이3",
      "content": "최고의 영화!",
      "likes_count": 437,
      "comments_count": 3,
      "star": 10
    }
  ]);

  const {data, isSuccess} = useQuery('reviewList', getReviewsP(useReviewId(),-1));

  if(isSuccess){
    setReviewList(data);
  }

  return (
    <ReviewSection>
      <Heading>리뷰</Heading>
      <ReviewListContainer>
        {reviewList.map((review)=><Review key={review.review_id}review={review}/>)}
      </ReviewListContainer>
    </ReviewSection>
  )
}

export default Reviews