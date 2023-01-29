import React from "react";
import dynamic from "next/dynamic";
import InfoDealerCard from "../components/cards/InfoDealerCard";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Layout from "../components/Layout";

const PieChart = dynamic(() => import("../components/charts/PieChart"), {
  ssr: false,
});

const dataPoints = [
  { y: 18, label: "Direct" },
  { y: 49, label: "Organic Search" },
  { y: 9, label: "Paid Search" },
  { y: 5, label: "Referral" },
  { y: 19, label: "Social" },
];

const containerProps = {
  width: "80%",
  height: "450px",
  margin: "auto",
};

const DealerInsights = () => {
  return (
    <Layout>
     <div className="text-black">
      
      
     <DashboardHeader title="Dealer Insights" />
      <div className="flex justify-between  my-2 text-black">
        <InfoDealerCard title="5,020" description="Total Stock" />
        <InfoDealerCard title="2,591" description="Listing With Price" />
        <InfoDealerCard title="182" description="Listing With Trim" />
        <InfoDealerCard title="1,000" description="Listing With Options" />
        <InfoDealerCard title="1,000" description="Listing With Pictures" />
      </div>
      <div className=" text-black p-10   border-2  border-lightgrey rounded-3xl ">
        <h1 className="w-full text-3xl font-semibold"> Used Car Listing Per Rating</h1>
        <h4 className="w-full">
          ( New Car Stocks is Currently Excluded from Price Analysis )
        </h4>
        <PieChart />
      </div>
<div className="p-4 my-4 bg-lightblue text-black rounded-2xl shadow-sm"><h1>Action Item</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus mus at imperdiet vitae nec at mattis tellus. Ut et id pellentesque et enim aliquet. Nam placerat vulputate sem tincidunt elementum. Mauris sem orci vivamus urna donec. Libero magna elit a vel penatibus maecenas nunc fermentum.</p></div>
<div className="p-4 my-4 bg-secondary text-white rounded-2xl shadow-sm"><h1>Action Item</h1><p>Facilisis malesuada et viverra dictum iaculis iaculis sed tincidunt. Bibendum turpis commodo vel at magna a orci quis purus. Vestibulum sit libero adipiscing quam amet. </p></div>
 
    
    
    
</div></Layout>
  );
};
export default DealerInsights;
