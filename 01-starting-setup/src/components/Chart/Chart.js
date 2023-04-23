import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const totalMaxium = props.dataPoints.reduce((total, curr) => {
    return total + curr.value;
  }, 0);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxium}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
