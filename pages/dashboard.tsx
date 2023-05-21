import React from "react";
import Layout from "../components/Layout";

import dashboard1 from "../public/dashboard1.png";
import dashboard2 from "../public/dashboard2.png";
import dashboard3 from "../public/dashboard3.png";
import dashboard4 from "../public/dashboard4.png";
import InfoCard from "../components/cards/InfoCard";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import InfoSimpleCard from "../components/cards/InfoSimpleCard";
import DropDown from "../components/dropdown/DropDown";
import dynamic from "next/dynamic";
const ApexCustomChart = dynamic(
  () => import("../components/charts/ApexCustomChart"),
  {
    ssr: false,
  }
);
const InteractionSummary = () => {
  const dropDownOptions = [
    { value: "1", title: "Option 1" },
    { value: "2", title: "Option 2" },
    { value: "3", title: "Option 3" },
    { value: "4", title: "Option 4" },
    { value: "5", title: "Option 5" },
  ];
  const series = [
    {
      name: "Monday",
      data: [10, 12, 23, 5],
    },
    {
      name: "Tuesday",
      data: [14, 15, 21, 6],
    },
    {
      name: "Wednesday",
      data: [14, 15, 11, 17],
    },
    {
      name: "Thursday",
      data: [9, 15, 11, 17],
    },
    {
      name: "Friday",
      data: [4, 5, 16, 17],
    },
    {
      name: "Saturday",
      data: [14, 25, 21, 20],
    },
    {
      name: "Sunday",
      data: [24, 15, 12, 15],
    },
  ];
  var optimalColumnWidthPercent =
    10 + 60 / (1 + 30 * Math.exp(-series.length / 3));
  const options = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
      stacked: true,
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 700,
            },
          },
          position: "top", // top, center, bottom
          offsetY: -10,
        },
        columnWidth: optimalColumnWidthPercent + "%",
      },
    },
    colors: [
      "#E74C3C", // red
      "#F1C40F", // yellow
      "#2ECC71", // green
      "#3498DB", // blue
      "#8E44AD", // purple
      "#F39C12",
      "#7FDBFF",
    ],
    grid: {
      show: true, 
      xaxis: {
        lines: {
          show: true, //or just here to disable only x axis grids
        },
      },
      yaxis: {
        lines: {
          show: true, //or just here to disable only y axis
        },
      },
    },
    dataLabels: {
      enabled: false,
      formatter: function (val: any) {
        return val;
        // return val + "k";
      },
      offsetY: -10,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    xaxis: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 10],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        formatter: function (val: any) {
          return val;
          // return val + "k";
        },
      },
      min: 0,
      max: 150,
      tickAmount: 5,
    },
    legend: {
      position: "top",
      offsetX: -10,
      offsetY: 20,
      horizontalAlign: "start",
      markers: {
        width: 12,
        height: 12,
        radius: 12,
        offsetX: 0,
        offsetY: -1,
      },
    },
  };

  const countData = [
    { title: "Monday", color: "#E74C3C", count: 23 },
    { title: "Tuesday", color: "#F1C40F", count: 23 },
    { title: "Wednesday", color: "#2ECC71", count: 23 },
    { title: "Thursday", color: "#3498DB", count: 23 },
    { title: "Friday", color: "#8E44AD", count: 23 },
    { title: "Saturday", color: "#F39C12", count: 23 },
    { title: "Sunday", color: "#7FDBFF", count: 23 },
  ];
  return (
    <Layout>
      <div>
        <DashboardHeader title="Booking Summary" />
        {/* <div className="flex justify-between text-black my-2">
          <InfoCard
            title="20.74 K"
            description="Total Bookings"
            percentage={25}
            trend="up"
          />
          <InfoCard
            title="1.74 K"
            description="Weekly Bookings"
            percentage={25}
            trend="down"
          />
          <InfoCard
            title="10.74 K"
            description="Monthly Bookings"
            percentage={25}
            trend="up"
          />
          <InfoCard
            title="20.74 K"
            description="Yearly Bookings"
            percentage={25}
            trend="down"
          />
        </div> */}

        <div className="  w-full p-4 rounded-2xl shadow-lg my-4  text-black">
          <div className="my-3 flex justify-between ">
            <div className="mx-4">
              <h1 className="text-black font-bold  ">
                Weekly Bookings Break Down
              </h1>
            </div>
            {/* <div className="flex space-x-4 ">
              <DropDown
                title="Sort by"
                options={dropDownOptions}
               style= {{width:156,height:35}}
               
              />
              <DropDown
                title="Time"
                options={dropDownOptions}
                style= {{width:156,height:35}}
           
              />
            </div> */}
          </div>
          <ApexCustomChart
            options={options}
            series={series}
            type="bar"
            height={330}
          />
        </div>

        <div className="text-black my-4 mt-10  border-lightgrey border-2 rounded-xl h-44">
          <h1 className="font-bold p-4">Daily Bookings Count</h1>
          <div className="flex justify-around items-center">
            {countData.map((e, i) => (
              <InfoSimpleCard
                key={i}
                count={e.count}
                title={e.title}
                backgroundColor={e.color}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InteractionSummary;
