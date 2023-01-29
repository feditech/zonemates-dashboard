import React from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Layout from "../components/Layout";
import BookingTable from "../components/tables/SortableTable";

const Leads = () => {
  const columns = [
    { label: "Date", accessor: "date", sortable: true },
    { label: "Name", accessor: "name", sortable: true },
    { label: "Location", accessor: "location", sortable: true },
    { label: "Vehicle", accessor: "vehicle", sortable: true },
    { label: "Lead Detail", accessor: "lead_detail", sortable: true },
  ];
  const tableData = [
    {
      id: 1,
      date: "14/08/2022 13.01",
      name: "Ahmed",
      location: "A",
      vehicle: "2022 Mercedes GLK 430 Be56656",
      lead_detail: "www.example.com",
    },
    {
      id: 2,
      date: "14/08/2022 13.01",
      name: "Bilal",
      location: "B",
      vehicle: "2019 Mercedes GLK 430 Be56656",
      lead_detail: "www.example.com",
    },
    {
      id: 3,
      date: "14/08/2022 13.01",
      name: "Raza",
      location: "C",
      vehicle: "2018 Mercedes GLK 430 Be56656",
      lead_detail: "www.example.com",
    },
    {
      id: 4,
      date: "14/08/2022 13.01",
      name: "zaroon",
      location: "D",
      vehicle: "2017 Mercedes GLK 430 Be56656",
      lead_detail: "www.example.com",
    },
  ];

  return (
    <Layout>
      <div>
        <DashboardHeader title="Bookings" />
        <div className="my-10">
          <BookingTable
            columns={columns}
            data={tableData}
            hasBackgroundColor={true}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Leads;
