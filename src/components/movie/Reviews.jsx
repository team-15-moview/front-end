import Review from "./Review"
import { Heading, ReviewListContainer, ReviewSection } from "./style"

function Reviews() {
  const reviewList = [
    {
      "review_id": 1,
      "nickname": "무린이",
      "content": "최고의 영화!",
      "likes_count": 437,
      "comments_count": 3,
      "rate": 10
    },
    {
      "review_id": 2,
      "nickname": "무린이2",
      "content": "최고의 영화!",
      "likes_count": 437,
      "comments_count": 3,
      "rate": 10
    },
    {
      "review_id": 3,
      "nickname": "무린이3",
      "content": "최고의 영화!",
      "likes_count": 437,
      "comments_count": 3,
      "rate": 10
    }
  ]
  return (
    <ReviewSection>
      <Heading>리뷰</Heading>
      <ReviewListContainer>
        {reviewList.map((review)=><Review {...review}/>)}
      </ReviewListContainer>
    </ReviewSection>
  )
}

export default Reviews