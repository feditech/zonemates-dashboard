import React, { useContext } from "react";
import Settingtabs from "../components/settingtabs";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Layout from "../components/Layout";
import { AppContext } from "../Context/AppProvider/AppProvider";

const Setting = () => {
  const { userData } = useContext(AppContext);
  console.log("USEr data", userData);

  return (
    <Layout>
      <div>
        <DashboardHeader title="Setting" />
        <div className="my-10">
          <Settingtabs />
                    
        </div>
      </div>
    </Layout>
  );
};

export default Setting;
