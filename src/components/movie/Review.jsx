import ReviewBox from "../common/ReviewBox"
import { ReviewContainer } from "./style";

function Review({review}) {
  return (
    <ReviewContainer>
      <ReviewBox review={review}/>
    </ReviewContainer>
  )
}

export default Review