import React from "react";
import { StyledButton } from "../../styles/commonStyle";

export default function Button({ children, isScrolled, color }) {
  return (
    <StyledButton isScrolled={isScrolled} color={color}>
      {children}
    </StyledButton>
  );
}
