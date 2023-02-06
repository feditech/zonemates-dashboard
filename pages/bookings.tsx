import React,{useContext} from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Layout from "../components/Layout";
import BookingTable from "../components/tables/SortableTable";
import { AppContext } from "../store/AppProvider/AppProvider";



const Leads = () => {
  const {userData} = useContext(AppContext)
  console.log("USEr data", userData?.bookings)


  const columns = [
    { label: "Date", accessor: "date", sortable: true },
    { label: "Name", accessor: "name", sortable: true },
    { label: "Location", accessor: "location", sortable: true },
    { label: "Booking Status", accessor: "status", sortable: true },
  ];
  // const tableData = [
  //   {
  //     id: 1,
  //     date: "14/08/2022 13.01",
  //     name: "Ahmed",
  //     location: "Landhi",

  //     status: "confirmed",
  //   },
  //   {
  //     id: 2,
  //     date: "14/08/2022 13.01",
  //     name: "Bilal",
  //     location: "DHA",

  //     status: "confirmed",
  //   },
  //   {
  //     id: 3,
  //     date: "14/08/2022 13.01",
  //     name: "Raza",
  //     location: "Clifton",

  //     status: "confirmed",
  //   },
  //   {
  //     id: 4,
  //     date: "14/08/2022 13.01",
  //     name: "zaroon",
  //     location: "Gizri",
  //     status: "confirmed",
  //   },
  // ];

  return (
    <Layout>
      <div>
        <DashboardHeader title="Bookings" />
        <div className="my-10">
          <BookingTable
            columns={columns}
            data={userData?.bookings}
            hasBackgroundColor={true}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Leads;
