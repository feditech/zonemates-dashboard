import React, { useContext } from "react";
import Layout from "../components/Layout";
// import dashboard1 from "../public/dashboard1.png";
import DashboardHeader from "../components/dashboard/DashboardHeader";
// import InfoSimpleCard from "../components/cards/InfoSimpleCard";
import dynamic from "next/dynamic";
import { AppContext } from "../store/AppProvider/AppProvider";
const ApexCustomChart = dynamic(
  () => import("../components/charts/ApexCustomChart"),
  {
    ssr: false,
  }
);
const Dashboard = () => {
  const { userData } = useContext(AppContext)
  if (!userData) {
    return <div>Loading...</div>; // or any other loading state
  }
  const bookings = userData.bookings;
  const bookingCountsByMonth = bookings.reduce((counts, booking) => {
    const { date, pcCount } = booking;
    const month = new Date(date).toLocaleString("default", { month: "short" });
    if (month && pcCount) {
      if (!counts[month]) {
        counts[month] = 0;
      }
      counts[month] += parseInt(pcCount);
    }
    return counts;
  }, {});

  const series = Object.entries(bookingCountsByMonth).map(([month, count]) => ({
    name: month,
    data: [count],
  }));


  var optimalColumnWidthPercent =
    10 + 60 / (1 + 30 * Math.exp(-series.length / 3));
  const options = {
    chart: {
      height: 250,
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
      formatter: function (val) {
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
      categories: Object.keys(bookingCountsByMonth),
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
        formatter: function (val) {
          return val;
          // return val + "k";
        },
      },
      min: 0,
      max: 100,
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


  return (
    <Layout>
      <div>
        <DashboardHeader title="Booking Summary" />
        <div className="  w-full p-4 rounded-2xl shadow-lg my-4  text-black">
          <div className="my-3 flex justify-between ">
            <div className="mx-4">
              <h1 className="text-black font-bold  ">
                Weekly Bookings Break Down
              </h1>
            </div>
          </div>
          <ApexCustomChart
            options={options}
            series={series}
            type="bar"
            height={330}
          />
        </div>


      </div>
    </Layout>
  );
};

export default Dashboard;




// const countData = [
//   { title: "Monday", color: "#E74C3C", count: 23 },
//   { title: "Tuesday", color: "#F1C40F", count: 23 },
//   { title: "Wednesday", color: "#2ECC71", count: 23 },
//   { title: "Thursday", color: "#3498DB", count: 23 },
//   { title: "Friday", color: "#8E44AD", count: 23 },
//   { title: "Saturday", color: "#F39C12", count: 23 },
//   { title: "Sunday", color: "#7FDBFF", count: 23 },
// ];


{/* <div className="text-black my-4 mt-10  border-lightgrey border-2 rounded-xl h-44">
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
</div> */}