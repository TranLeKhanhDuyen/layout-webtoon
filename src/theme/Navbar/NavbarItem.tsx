import React from "react";
import { Link } from "react-router-dom";

interface NavbarItemProps {
  label: string;
  href: string;
  isActive?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  href,
  isActive = false,
  ...props
}) => {
  return (
    <Link
      to={href}
      style={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        color: isActive ? "#00DC64" : "#000",
        fontSize: "20px",
        fontWeight: 500
        // borderBottom: isActive ? "2px solid #4EAEFD" : "none",
        // transition: "color 0.3s, border-bottom 0.3s",
      }}
    >
      {label}
    </Link>
  );
};

export default NavbarItem;
