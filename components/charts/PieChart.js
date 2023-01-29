import React, { Component } from "react";
import CanvasJSReact from './canvasjsChart/canvasjs.stock.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;




const containerProps = {
  width: "80%",
  height: "450px",
  margin: "auto"
};


const PieChart = () => {
  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "",
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        // showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 18, label: "Direct" },
          { y: 49, label: "Organic Search" },
          { y: 9, label: "Paid Search" },
          { y: 5, label: "Referral" },
          { y: 19, label: "Social" },
        ],
      },
    ],
  };

  return (
    <div>
  
      <CanvasJSChart
        options={options}
        containerProps={containerProps}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};
export default PieChart;
