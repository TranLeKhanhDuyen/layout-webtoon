import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "theme/base";
import "./index.css"

const sliderData = [
  {
    image: banner1,
    doc: "Description for Image 1",
  },
  {
    image: banner2,
    doc: "Description for Image 2",
  },
  {
    image: "banner3",
    doc: "Description for Image 3",
  },
];

export default function BannerSlider() {
  return (
    <Box
      sx={{
        background:
          "url(https://webtoons-static.pstatic.net/image/pc/home_bg008.jpg) no-repeat 50% 0",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "492px",
          overflow: "hidden",
          padding: "40px 0",
        }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          style={{ height: "100%" }}
        >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  height: "100%",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "8px",
                  }}
                >
                  {/* <Typography variant="body1">{item.doc}</Typography> */}
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
