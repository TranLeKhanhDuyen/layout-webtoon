import BannerSlider from "./BannerSlider";
import { DailyTabWrap } from "./DailyTabWrap";
import GenresSection from "./Genres";
import { NewWebToon } from "./NewWebtoon";
import RankingList from "./RankingList";
import { useResponsive } from "ahooks";
import CustomPageTitle from "components/@ui/CustomPageTitle";
import { SliderContainer } from "components/@ui/Slider";
import { Box } from "theme/base";

export default function HomePage() {
  const { xl } = useResponsive();
  if (!xl)
    return (
      <Box p={5} textAlign="center">
        Only support large monitor
      </Box>
    );
  return (
    <>
      <CustomPageTitle title="WebToon" />
      <Box
        p={2}
        sx={{
          width: "100%",
          maxWidth: 2000,
          // mx: "auto",
          // overflow: "hidden",
        }}
      >
        <BannerSlider />
        <DailyTabWrap />
        <NewWebToon />
        <GenresSection></GenresSection>
        <RankingList></RankingList>
      </Box>
    </>
  );
}
