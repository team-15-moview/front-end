import ReviewBox from "../common/ReviewBox"
import { ReviewContainer } from "./movieStyle";

function Review({review}) {
  return (
    <ReviewContainer>
      <ReviewBox review={review}/>
    </ReviewContainer>
  )
}

export default Review