import React from "../../../../screens/node_modules/@types/react";
import { BarChart, Grid } from "../../../src";

class BarChartExample extends React.PureComponent {
  render() {
    const fill = "rgb(134, 65, 244)";
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      null,
      85,
      undefined,
      0,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80,
    ];

    return (
      <BarChart
        style={{ height: 200 }}
        data={data}
        svg={{ fill }}
        contentInset={{ top: 30, bottom: 30 }}
      >
        <Grid />
      </BarChart>
    );
  }
}

export default BarChartExample;
