import { styled } from "styled-components";

export const StillContainer = styled.section`
  display:flex;
  flex-flow: row wrap;
  position: relative;
  top: -35px;
  width: 100%;
  height: 540px;
  z-index: -1;
  overflow: hidden;
`
export const StillImg = styled.section`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const MovieInfoContainer = styled.section`
  display: flex;
  position: relative;
  top: -270px;
  width:100%;
`
export const PosterBox = styled.img`
  height: 372px;
`
export const TextInfoContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex-grow: 1;
  justify-content: flex-end;
`
export const TitleBox = styled.div`
  margin: 40px 40px;
  font-size: 45px;
  font-weight: bold;
  color: white;
`
export const PubInfoContainer = styled.div`
  margin: 20px 40px;
  justify-content: space-between;
  font-size: 23px;
`
export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ReviewSection = styled.section`
  margin: 60px 0px;
`
export const Heading = styled.h1`
  font-size: 45px;
  font-weight: bold;
`
export const ReviewListContainer = styled.div`
  padding: 25px 0px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 10px;
`
export const ReviewContainer = styled.div`
  width: 558px 104px;
  background-color: aliceblue;
`