import NavbarItem from "./NavbarItem";
import logoBig from "assets/webtoon-center.png";
import React from "react";
import { Button } from "theme/Buttons";
import { Flex, Image } from "theme/base";

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        width: "100vw",
        // height: "auto",
        display: "flex",
        // alignItems: "center",
        // justifyContent: "space-between",
        padding: "8px 16px",
        backgroundColor: "#f8f9fa",
        // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Flex style={{ gap: "16px" }}>
        <NavbarItem label="ORIGINALS" href="/originals" isActive={true} />
        <NavbarItem label="GENRES" href="/genes" />
        <NavbarItem label="POPULAR" href="/popular" />
        <NavbarItem label="CANVAS" href="/canvas" />
        <Image src={logoBig} sx={{ width: "250px" }} />
        <NavbarItem label="WEBTOON SHOP" href="/webtoon-shop" />
        <NavbarItem label="Creatos 101" href="/creatos" />
        <Button sx={{ borderRadius: "17px", p: 0 }} variant="publish">
          Publish
        </Button>
        <Button sx={{ borderRadius: "17px", p: 0 }} variant="login">
          Log In
        </Button>
      </Flex>
    </nav>
  );
};

export default Navbar;
