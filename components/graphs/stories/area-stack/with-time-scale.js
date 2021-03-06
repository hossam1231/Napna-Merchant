import React from "../../../../screens/node_modules/@types/react";
import { View } from "../../../../screens/node_modules/@types/react-native";
import { Grid, XAxis, Path } from "../../../src";
import * as shape from "d3-shape";
import * as scale from "d3-scale";
import * as dateFns from "date-fns";
import { Chart } from "../../../src/chart/newChart";
import { useStackArea, useLayout } from "../../../src/hooks";

const AreaStackChartExample = () => {
  const data = [
    {
      month: new Date(2018, 5, 1),
      apples: 3840,
      bananas: 1920,
      cherries: 960,
      dates: 400,
    },
    {
      month: new Date(2018, 8, 1),
      apples: 1600,
      bananas: 1440,
      cherries: 960,
      dates: 400,
    },
    {
      month: new Date(2018, 9, 1),
      apples: 640,
      bananas: 960,
      cherries: 3640,
      dates: 400,
    },
    {
      month: new Date(2018, 10, 1),
      apples: 3320,
      bananas: 480,
      cherries: 640,
      dates: 400,
    },
  ];

  const colors = ["#8800cc", "#aa00ff", "#cc66ff", "#eeccff"];
  const keys = ["apples", "bananas", "cherries", "dates"];

  const { width, height, onLayout } = useLayout();

  const { areas, ticks, y } = useStackArea({
    width,
    height,
    data,
    keys,
    curve: shape.curveNatural,
    xScale: scale.scaleTime,
    xAccessor: ({ item }) => item.month,
  });

  return (
    <View style={{ height: 200, paddingVertical: 16 }}>
      <Chart style={{ flex: 1 }} {...{ width, height, onLayout }}>
        <Grid {...{ y, ticks }} />
        {areas.map((area, index) => (
          <Path key={keys.key} fill={colors[index]} d={area.path} />
        ))}
      </Chart>
      <XAxis
        style={{ marginTop: 10, marginHorizontal: -10 }}
        contentInset={{ left: 10, right: 10 }}
        numberOfTicks={6}
        data={data}
        xAccessor={({ item }) => item.month}
        scale={scale.scaleTime}
        formatLabel={value => dateFns.format(value, "MMM")}
      />
    </View>
  );
};

export default AreaStackChartExample;
