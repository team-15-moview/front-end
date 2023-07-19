import { styled } from "styled-components";

export const StillContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  position: relative;
  top: -35px;
  width: 100%;
  height: 850px;
  overflow: hidden;
`;
export const StillImg = styled.section`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MovieInfoContainer = styled.section`
  display: flex;
  position: relative;
  top: -270px;
  width: 100%;
`;
export const PosterBox = styled.img`
  height: 372px;
`;
export const TextInfoContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex-grow: 1;
  justify-content: flex-end;
`;
export const TitleBox = styled.div`
  margin: 40px 40px;
  font-size: 45px;
  font-weight: bold;
  color: white;
`;
export const PubInfoContainer = styled.div`
  display: flex;
  margin: 20px 40px;
  justify-content: space-between;
  align-items: center;
  font-size: 23px;
`;
export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ReviewSection = styled.section`
  margin: 0px 0px;
  position: relative;
  top: -200px;
`;
export const Heading = styled.h1`
  font-size: 45px;
  font-weight: bold;
`;
export const ReviewListContainer = styled.div`
  margin: 25px auto;
  width: 1300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;
export const ReviewContainer = styled.div`
  width: 100%;
  height: 104px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const StarsContainer = styled.div`
  display: flex;
  height: 62px;
`;
export const LeftHalfBox = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 45px;
  overflow: hidden;
  cursor: pointer;
`;
export const RightHalfBox = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  width: 45px;
  overflow: hidden;
  cursor: pointer;
`;
