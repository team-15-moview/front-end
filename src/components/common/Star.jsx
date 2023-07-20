import React from "react";
import { StyledStarBox } from "../../styles/commonStyle";

export default function Star({ star }) {
  return <StyledStarBox>⭐{star.toFixed(1)}</StyledStarBox>;
}
