import NavbarItem from "./NavbarItem";
import logoBig from "assets/webtoon-center.png";
import logo from "assets/webtoon-logo.png";
import React from "react";
import styled from "styled-components";
import { Button } from "theme/Buttons";
import { Flex, Image } from "theme/base";

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const NavListItem = styled.li`
  display: flex;
  align-items: center;
`;

const NavButton = styled(Button)`
  border-radius: 17px;
  padding: 5;
`;

const navItems = [
  { label: "ORIGINALS", href: "/" },
  { label: "GENRES", href: "/genes" },
  { label: "POPULAR", href: "/popular" },
  { label: "CANVAS", href: "/canvas" },
];

const navItemsAfterLogo = [
  { label: "WEBTOON SHOP", href: "/webtoon-shop" },
  { label: "Creators 101", href: "/creators" },
];

const Navbar: React.FC = () => {
  return (
    <Flex style={{ margin: "0 auto" }}>
      <NavList>
        <NavListItem>
          <Image sx={{ width: "77px" }} src={logo} alt="Webtoon Logo" />
        </NavListItem>

        {navItems.map((item) => (
          <NavListItem key={item.href}>
            <NavbarItem label={item.label} href={item.href} />
          </NavListItem>
        ))}

        <NavListItem>
          <Image sx={{ width: "250px" }} src={logoBig} alt="Webtoon Logo" />
        </NavListItem>

        {navItemsAfterLogo.map((item) => (
          <NavListItem key={item.href}>
            <NavbarItem label={item.label} href={item.href} />
          </NavListItem>
        ))}

        <NavListItem>
          <NavButton variant="publish">Publish</NavButton>
        </NavListItem>

        <NavListItem>
          <NavButton variant="login">Log In</NavButton>
        </NavListItem>
      </NavList>
    </Flex>
  );
};

export default Navbar;
