import LinkText from "components/@ui/Link";
import { Box, Flex, Image, Type } from "theme/base";

export default function RankingList() {
  const rankingItems = Array.from({ length: 10 }, (_, index) => (
    <RakingItem key={index} />
  ));

  return (
    <Box sx={{ padding: "20px" }}>
      <Flex sx={{ justifyContent: "space-between", gap: "20px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "48%",
          }}
        >
          <LinkText href="#">New & Trending</LinkText>
          {rankingItems.slice(0, 5)} 
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "48%",
          }}
        >
          <LinkText sx={{fontSize:"20px", fontWeight:"500"}} href="#">ORIGINALS by Genre</LinkText>
          {rankingItems.slice(5, 10)} 
        </Box>
      </Flex>
    </Box>
  );
}

const RakingItem = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
        border: "1px solid black",
        padding: "8px",
      }}
    >
      <Image src="your-image-path.jpg" sx={{ width: "80px" }} />
      <Box>
        <Flex sx={{ flexDirection: "column", gap: "4px" }}>
          <Type.Small>Title</Type.Small>
          <Type.Large>Subheading</Type.Large>
          <Type.Small>Additional Info</Type.Small>
        </Flex>
      </Box>
    </Box>
  );
};
