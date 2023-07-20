import React from "react";
import { StillContainer } from "./movieStyle";

function StillBackground({ src }) {
  return (
    <StillContainer>
      <img alt="Movie StillCut" src={src} width="100%" loading="lazy"/>
    </StillContainer>
  );
}

export default StillBackground;
