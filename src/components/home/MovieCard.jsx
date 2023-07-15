import React from "react";
import { MovieSliderItem } from "./homeStyle";
import Star from "../common/Star";

export default function MovieCard() {
  return (
    <MovieSliderItem>
      <img
        src="https://an2-img.amz.wtchn.net/image/v2/NVhYnS1fM4KuhXeqVetluA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9EZzVOak15T0RBd05qSTVOelF4TlRnaWZRLmZpUWVRTGVzNVYtN0hEcUREWUtRTUtMcDQ5c3BHUTFVSElfbHFWYVd5X2s"
        alt="포스터"
      />
      <figcaption>
        <p className="movieTitle">미션 임파서블</p>
        <p className="movieTitle">2023</p>
        <Star />
      </figcaption>
    </MovieSliderItem>
  );
}
