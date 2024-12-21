import Navbar from "theme/Navbar";
import { Box } from "theme/base";

function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#white",
        padding: "8px 16px",
      }}
    >
      <Navbar />
    </Box>
  );
}

export default Header;