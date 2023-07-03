import React, { useContext, useEffect, useState } from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Layout from "../components/Layout";
import { AppContext } from "../Context/AppProvider/AppProvider";
import Table from "../components/tables/Table";

const Bookings = () => {
  const { userData } = useContext(AppContext)

  // useEffect(() => {
  //   const getBookings = () => {

  //   }
  // }, [])



  const [bookings, setBookings] = useState((userData && userData.bookings) ? userData.bookings : [])

  console.log("bookings", bookings)

  const HeaderValues = (bookings.length && Object.keys(bookings[0])) ? Object?.keys(bookings[0]).sort() : [];
  // bookings.unshift(HeaderValues)


  return (
    <Layout>
      <div>
        <DashboardHeader title="Bookings" />
        <div className="my-10">
          <Table HeaderValues={HeaderValues} data={bookings} />
        </div>
      </div>
    </Layout>
  );
};

export default Bookings;
