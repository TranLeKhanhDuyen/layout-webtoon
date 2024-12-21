import GridLayout from "components/@ui/Layout";
import { Box, Card, Flex, Type } from "theme/base";

export default function GenresSection() {
  const cards = Array.from({ length: 10 }, (_, index) => (
    <Card
      sx={{
        width: "210px",
        height: "210px",
        backgroundColor: "white",
        border: "1px solid black",
      }}
      key={index}
    />
  ));

  return (
    <Flex
      sx={{
        // display: "flex",
        flexDirection: "column",
        // p: "5%",
      }}
    >
      <Type.H5 sx={{ width: "100%", color: "black" }}>GENRES</Type.H5>

      <Box sx={{ p: "18px 5px" }}>
        <GridLayout items={cards} columns={5} gap="15px" />
      </Box>
    </Flex>
  );
}
