import { SliderContainer } from "components/@ui/Slider";
import { Box, Type } from "theme/base";

export const NewWebToon = () => {
  return (
    <Box sx={{ width: "1200px", mx: "auto", pt: "40px" }}>
      <Type.H5 sx={{ width: "100%", m: "0 auto", color: "black", p: 36 }}>
        New to WEBTOON
      </Type.H5>
      <SliderContainer />
    </Box>
  );
};
