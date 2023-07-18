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
  display: flex;
`;

export const BannerCardFigure = styled.figure`
  position: relative;

  & img {
    width: 900px;
    filter: brightness(70%);
  }
`;

export const BannerCardFicaption = styled.figcaption`
  position: absolute;
  bottom: 40px;
  right: 100px;

  & .movie_title {
    font-size: 40px;
    font-weight: 700;
    color: white;
  }

  & .movie_id {
    position: absolute;
    bottom: 60px;
    left: -60px;
    font-size: 100px;
    font-weight: 700;
    color: white;
    opacity: 0.5;
  }

  & .movie_rate {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 10px;

    & svg {
      display: flex;
      align-items: center;
      width: 40px;
      height: 40px;
      color: yellow;
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

export const MovieSliderBox = styled(BannerSliderBox)`
`;

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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 50px 50px 30px;
  gap: 30px;
`;
