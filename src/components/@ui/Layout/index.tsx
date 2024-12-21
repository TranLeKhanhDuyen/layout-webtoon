import React from "react";
import { Box } from "theme/base";

interface GridLayoutProps {
  items: React.ReactNode[];
  columns?: number;
  rows?: number;
  gap?: string;
}

const GridLayout: React.FC<GridLayoutProps> = ({
  items,
  columns = 5,
  rows = 1,
  gap = "15px",
}) => (
  <Box
    sx={{
      display: "grid",
      justifyItems: "center",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
      gap: gap,
    }}
  >
    {items.map((item, index) => (
      <div key={index}>{item}</div>
    ))}
  </Box>
);

export default GridLayout;
