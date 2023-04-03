import React from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Layout from "../components/Layout";
import BillingTable from "../components/tables/Table";

const Billing = () => {
  
  return (
    <Layout>
      <div>
        <DashboardHeader title="Billing" />
        <BillingTable />
      </div>
    </Layout>
  );
};

export default Billing;
