import appStore from "assets/images/app-store.png";
import googlePlay from "assets/images/google-play.svg";
// import webToonLogo from "assets/images/webtoon-logo.png";
import Copyright from "components/@ui/Copyright";
import Divider from "components/@ui/Divider";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Box, Flex, Image, LinkText, Type } from "theme/base";

function Footer() {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #e5e5e5",
      }}
    >
      <Flex
        sx={{
          width: "100%",
          alignItems: "center",
          p: 24,
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <Type.Caption sx={{ color: "black" }}>Notice</Type.Caption>
        <Type.Caption sx={{ color: "black" }}>
          Support for Coin Payment Discontinued on Mobile and PC Platforms
        </Type.Caption>
      </Flex>
      <Divider />

      <Flex
        sx={{
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          p: 24,
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <Type.H6 sx={{ color: "black", marginBottom: "8px" }}>
          Dowload WEBTOON now!
        </Type.H6>
        <Flex sx={{ gap: "8px" }}>
          <a href="#">
            <Image src={googlePlay} sx={{ width: "134px" }} />
          </a>
          <a href="#">
            <Image src={appStore} sx={{ width: "134px" }} />
          </a>
        </Flex>
      </Flex>

      <Flex sx={{ flexDirection: "column", alignItems: "center", p: 38 }}>
        <Flex
          sx={{
            gap: "30px",
          }}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={18} color="#000" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={18} color="#000" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={18} color="#000" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={18} color="#000" />
          </a>
        </Flex>

        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 24,
            width: "100%",
          }}
        >
          <Flex sx={{ color: "black", gap: "16px", mb: 16 }}>
            <LinkText to="#">About</LinkText>
            <LinkText to="#">Feedback</LinkText>
            <LinkText to="#">Help</LinkText>
            <LinkText to="#">Terms</LinkText>
            <LinkText to="#">Privacy</LinkText>
            <LinkText to="#">Advertise</LinkText>
            <LinkText to="#">Contact</LinkText>
            <LinkText to="#">Language</LinkText>
          </Flex>
        </Flex>

        <Copyright text="NAVER WEBTOON Ltd." />

        {/* <Image src={webToonLogo} sx={{ width: "100px" }} /> */}
      </Flex>
    </Box>
  );
}

export default Footer;
