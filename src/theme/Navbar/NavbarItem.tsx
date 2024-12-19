import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavbarItemProps {
  label: string;
  href: string;
  isActive?: boolean;
}

const StyledLink = styled(Link)<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? "#00DC64" : "#000")};
  font-size: 20px;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #00dc64;
  }
`;

const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  href,
  isActive,
}) => {
  return (
    <StyledLink to={href} isActive={isActive}>
      {label}
    </StyledLink>
  );
};

export default NavbarItem;
