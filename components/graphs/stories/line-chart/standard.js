import React from "../../../../screens/node_modules/@types/react";
import { Grid, Path, Chart, useLayout, useChart, useLine } from "../../../src";

const LineChartExample = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  const { width, height, onLayout } = useLayout();

  const { x, y, ticks, mappedData } = useChart({
    width,
    height,
    data,
    contentInset: { top: 20, bottom: 20 },
  });
  const { line } = useLine({
    mappedData,
    x,
    y,
  });

  return (
    <Chart style={{ height: 200 }} {...{ width, height, onLayout }}>
      <Grid y={y} ticks={ticks} />
      <Path
        fill="none"
        stroke="rgb(134, 65, 244)"
        d={line}
        animate
        animationDuration={300}
      />
    </Chart>
  );
};

export default LineChartExample;
