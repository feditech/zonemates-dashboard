import { height, width } from "@mui/system";
import Chart from "react-apexcharts";

interface ApexCustomChartPropType {
  options?: any;
  series?: any;

  type?:
    | "area"
    | "pie"
    | "line"
    | "bar"
    | "histogram"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "treemap"
    | "boxPlot"
    | "candlestick"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | undefined;
  width?: number;
  height?: number;

  isStack?: boolean;
}
const ApexCustomChart: React.FC<ApexCustomChartPropType> = ({
  options,
  series,
  type,
  width,
  height,
}) => {
  return (
    <Chart
      options={options}
      series={series}
      type={type}
      width={width}
      height={height}
    />
  );
};

export default ApexCustomChart;


