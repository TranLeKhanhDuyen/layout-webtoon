import GridLayout from "components/@ui/Layout";
import List from "components/@ui/List";
import { useState } from "react";
import { Button } from "theme/Buttons";
import { Box, Card, Flex } from "theme/base";

interface DayItem {
  id: string;
  label: string;
}

export const DailyTabWrap: React.FC = () => {
  const [activeDay, setActiveDay] = useState<string>("mon");

  const days: DayItem[] = [
    { id: "mon", label: "MON" },
    { id: "tue", label: "TUE" },
    { id: "wed", label: "WED" },
    { id: "thu", label: "THU" },
    { id: "fri", label: "FRI" },
    { id: "sat", label: "SAT" },
    { id: "sun", label: "SUN" },
  ];

  const handleDayClick = (day: DayItem) => {
    setActiveDay(day.id);
    console.log("Selected day:", day);
  };

  const handleMoreClick = () => {
    console.log("More clicked");
  };

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
        flexDirection: "column",
        margin: "0 auto",
        width: "100%",
        backgroundColor: "#f4f4f4",
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <Box
        sx={{
          mx: "0 auto",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: "18px 5%",
        }}
      >
        <List<DayItem>
          className="day-list"
          items={days}
          renderItem={(day) => (
            <Button
              sx={{
                backgroundColor: "transparent",
                color: "black",
                fontWeight: "500",
                fontSize: "19px",
                width: "120px",
              }}
              onClick={() => console.log(day)}
            >
              {day.label}
            </Button>
          )}
        />
        <Button
          sx={{
            backgroundColor: "transparent",
            color: "neutral5",
            fontWeight: "500",
            fontSize: "19px",
            width: "120px",
          }}
        >
          MORE
        </Button>
      </Box>

      <Box sx={{ p: "18px 5% 45px" }}>
        <GridLayout items={cards} columns={5} gap="15px" />
      </Box>
    </Flex>
  );
};
