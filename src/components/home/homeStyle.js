import { styled } from "styled-components";
import Slider from "react-slick";
import { RightIcon, LeftIcon } from "../../styles/commonStyle";

export const BannerSliderBox = styled(Slider)`
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    cursor: pointer;
  }
`;

export const BannerCardItem = styled.div`
  position: relative;
  display: flex;
`;

export const BannerCardFigure = styled.figure`
  width: 100vw;
  height: 80vh;
  position: relative;

  & img {
    width: 100%;
    object-fit: cover;
    filter: brightness(60%);
  }
`;

export const BannerCardFicaption = styled.figcaption`
  position: absolute;
  bottom: 70px;
  left: 140px;

  & .movie_title {
    font-size: 50px;
    font-weight: 700;
    color: white;
  }

  & .movie_id {
    font-size: 130px;
    position: absolute;
    bottom: 80px;
    left: -60px;
    font-weight: 700;
    color: #dee2e699;
  }

  & .movie_rate {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;

    & svg {
      display: flex;
      align-items: center;
      width: 35px;
      height: 35px;
    }
  }
`;

export const MovieSliderWarpper = styled.div`
  margin: 50px 0;
`;

export const MovieSliderH1 = styled.h1`
  font-size: 30px;
  font-weight: 700;
  padding: 20px;
`;

export const MovieSliderBox = styled(BannerSliderBox)``;

export const MovieRightIcon = styled(RightIcon)`
  right: -40px;
  top: 160px;
  z-index: 1;
`;

export const MovieLeftIcon = styled(LeftIcon)`
  left: -40px;
  top: 160px;
  z-index: 1;
`;

export const MovieSliderItem = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  & img {
    /* width: 220px; */
  }

  & figcaption {
    padding: 10px 0;

    & p {
      margin: 5px 0;
    }
  }
`;

export const BannerReviewBox = styled.div`
  position: absolute;
  width: 400px;
  bottom: 40px;
  right: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  & .bannerReviewWrapper {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px 20px;
    background: #dee2e699;

    & .reviewBoxRow {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 5px 0;

      & div {
        border: none;
      }
    }
  }
`;
