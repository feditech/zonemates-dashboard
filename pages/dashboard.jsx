import React, { useContext } from "react";
import Layout from "../components/Layout";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import dynamic from "next/dynamic";
import { AppContext } from "../Context/AppProvider/AppProvider";

const ApexCustomChart = dynamic(
  () => import("../components/charts/ApexCustomChart"),
  {
    ssr: false,
  }
);
const Dashboard = () => {
  const { userData } = useContext(AppContext)
  const bookings = userData.bookings;
  console.log("bookings", bookings)
  // Transforming booking data
  const bookingData = bookings?.map(booking => ({
    x: booking?.bookingDate,
    y: booking.pcCount,
  }));
  // Setting up chart options and data
  const chartOptions = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: -Infinity,
              to: Infinity,
              color: '#081b33',
            },
          ],
        },
        columnWidth: "10%",
      },
    },
  };
  const chartSeries = [
    {
      data: bookingData || [],
    },
  ];
  return (
    <Layout>
      <div>
        <DashboardHeader title="Booking Summary" />
        <div className="  w-full p-4 rounded-2xl shadow-lg mt-14  text-black">
          {/* <div className="my-3 flex justify-between ">
            <div className="mx-4">
              <h1 className="text-black font-bold  ">
                Weekly Bookings Break Down
              </h1>
            </div>
          </div> */}
          <ApexCustomChart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </Layout>
  );
};
export default Dashboard;