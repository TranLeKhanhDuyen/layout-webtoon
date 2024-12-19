import Navbar from "theme/Navbar";
import Logo from "../Logo";
import { Box } from "theme/base";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a
        href="https://www.webtoons.com/en/"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Navbar></Navbar>
      </a>
    </Box>
  );
}

export default Header;
