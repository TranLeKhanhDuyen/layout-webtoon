import { Button } from ".";
import { ButtonProps } from "./types";
import React from "react";
import styled from "styled-components/macro";

const StyledButtonLogo = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundPosition: "-1180px -505px",
  height: "74px",
  width: "77px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "auto",
  backgroundColor: "#00DC64",
  // backgroundImage: `url(${theme.assets.logoSprite})`, // Assuming a theme-provided asset
}));

interface ButtonLogoProps extends ButtonProps {
  icon?: React.ReactNode;
}

const ButtonLogo: React.FC<ButtonLogoProps> = ({ icon, ...props }) => (
  <StyledButtonLogo {...props}>
    {icon && <span style={{ display: "none" }}>{icon}</span>}
  </StyledButtonLogo>
);

export default ButtonLogo;
