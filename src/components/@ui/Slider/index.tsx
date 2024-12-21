import iconTest from "../../../assets/icons/USDB.png";
import chevronLeft from "assets/icons/chevron-left.svg";
import chevronRight from "assets/icons/chevron-right.svg";
import { useState } from "react";
import ButtonWithIcon from "theme/Buttons/ButtonWithIcon";
import { Box, Card, Flex } from "theme/base";

export const SliderContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 5;

  const cards = Array.from({ length: 10 }, (_, index) => (
    <Card
      sx={{
        width: "210px",
        height: "210px",
        backgroundColor: "white",
        border: "1px solid black",
        flexShrink: 0,
        margin: "0 10px",
      }}
      key={index}
    />
  ));

  // Calculate maximum index
  const maxIndex = Math.max(0, cards.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - cardsPerView));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + cardsPerView));
  };

  return (
    <Box sx={{ position: "relative", padding: "0 40px" }}>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ position: "absolute", left: 0, zIndex: 2 }}>
          <ButtonWithIcon
            icon={chevronLeft}
            type="button"
            direction="left"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            sx={{ backgroundColor: "none", width: "20px" }}
          />
        </Box>

        <Flex
          sx={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Flex
            sx={{
              transform: `translateX(-${currentIndex * (210 + 20)}px)`,
              transition: "transform 0.3s ease-in-out",
              gap: "20px",
            }}
          >
            {cards}
          </Flex>
        </Flex>

        <Box sx={{ position: "absolute", right: 0, zIndex: 2 }}>
          <ButtonWithIcon
            icon={chevronRight}
            type="button"
            direction="right"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
          />
        </Box>
      </Flex>

      {/* Navigation dots */}
      <Flex
        sx={{
          justifyContent: "center",
          marginTop: "20px",
          gap: "8px",
        }}
      >
        {Array.from({ length: Math.ceil(cards.length / cardsPerView) }).map(
          (_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index * cardsPerView)}
              sx={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor:
                  currentIndex / cardsPerView === index ? "black" : "gray",
                cursor: "pointer",
              }}
            />
          )
        )}
      </Flex>
    </Box>
  );
};
