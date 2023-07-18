import { useQuery } from "react-query";
import Review from "./Review"
import { Heading, ReviewListContainer, ReviewSection } from "./style"
import { getReviewsP } from "../../api/review";
import { useReviewId } from "../../hooks/usePageParam";
import { useEffect, useRef, useState } from "react";

function Reviews() {

  // const obsRef = useRef(null);
  // const [lastReviewId, setLastReviewId] = useState(9223372036854775807);
  // const preventRef = useRef(true);
  // const endRef = useRef(false);

  // useEffect(()=>{
  //   const observer = new IntersectionObserver(obsHandler, {threshold: 0.5});
  //   if(obsRef.current) observer.observe(obsRef.current);
  //   return () => { observer.disconnect(); }
  // }, [])

  // useEffect(()=>{
  //   //getPost();
  // }, [])

  // const obsHandler = ((entries) => {
    
  // })



  const {data, isLoading} = useQuery('reviewList', getReviewsP(useReviewId(), 9223372036854775807));

  if(isLoading){
    return <></>
  }

  const reviewList = data.data;
  console.log(reviewList)
  return (
    <ReviewSection>
      <Heading>리뷰</Heading>
      <ReviewListContainer>
        {reviewList.map((review)=><Review key={review.review_id} review={review}/>)}
      </ReviewListContainer>
    </ReviewSection>
  )
}

export default Reviews