import React, { useContext } from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Layout from "../components/Layout";
import { AppContext } from "../store/AppProvider/AppProvider";
import Table from "../components/tables/Table";

const Leads = () => {
  const HeaderValues = [
    {
      title: "id",
    },
    {
      title: "Name",
    },
    {
      title: "Day",
    },
    {
      title: "Slot",
    },
  ];

  const { userData } = useContext(AppContext);
  console.log("USEr data Booking", userData?.bookings);

  return (
    <Layout>
      <div>
        <DashboardHeader title="Bookings" />
        <div className="my-10">
          <Table HeaderValues={HeaderValues} data={userData} />
        </div>
      </div>
    </Layout>
  );
};

export default Leads;
