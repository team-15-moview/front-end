import React, { forwardRef } from "react";
import { StyledButton } from "../../styles/commonStyle";

const Button = forwardRef(
  ({ children, isScrolled, color, bg, onClick }, ref) => {
    return (
      <StyledButton
        isScrolled={isScrolled}
        color={color}
        bg={bg}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
