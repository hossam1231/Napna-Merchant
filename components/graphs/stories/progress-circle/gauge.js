import React from "../../../../screens/node_modules/@types/react";
import { ProgressCircle } from "../../../src";

class ProgressCircleExample extends React.PureComponent {
  render() {
    return (
      <ProgressCircle
        style={{ height: 200, marginTop: 10 }}
        progress={0.7}
        progressColor={"rgb(134, 65, 244)"}
        startAngle={-Math.PI * 0.8}
        endAngle={Math.PI * 0.8}
      />
    );
  }
}

export default ProgressCircleExample;
