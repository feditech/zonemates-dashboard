import React from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DropDown from "../components/dropdown/DropDown";
import Layout from "../components/Layout";
import HighDemandTable from "../components/tables/HighDemandTable";




const dropDownOptions = [
  { value: "1", title: "Option 1" },
  { value: "2", title: "Option 2" },
  { value: "3", title: "Option 3" },
  { value: "4", title: "Option 4" },
  { value: "5", title: "Option 5" },
];
const HeaderValues = [
  {
    title: "#",
  },
  {
    title: "Model",
  },
  {
    title: "Search Per Stock Piece (Last Month)",
  },
  {
    title: "Change",
  },

];
const data = [
  { 
    Model: "Huyndai | 10",
    searchPerStockPrice: 50.38,
    change: "235(5%)",
  },
  { 
    Model: "Huyndai | 10",
    searchPerStockPrice: 50.38,
    change: "235(5%)",
  },
  { 
    Model: "Huyndai | 10",
    searchPerStockPrice: 50.38,
    change: "235(5%)",
  },
  { 
    Model: "Huyndai | 10",
    searchPerStockPrice: 50.38,
    change: "235(5%)",
  },
];
const LocalSearches = () => {
  return (
    <Layout>
      <div>
        <DashboardHeader title="Top In-Demand Models in Your Area" />
        <div className="flex  justify-between my-4  ">
          <div className="flex justify-between items-center pr-10 w-4/5 h-10">
          <DropDown title="PRICE/MILLAGE" options={dropDownOptions}  style={{ cursor: "pointer" , height : '40px' ,border:'none',outline:'none'}}/> 
          <DropDown title="GEAR BOX" options={dropDownOptions}  style={{ cursor: "pointer" , height : '40px' ,border:'none',outline:'none'}}/> 
          </div>
          {/* Search button */}
          <button className="w-1/5 h-10  text-white bg-secondary rounded-md">
            Search
          </button>
        </div>

        <div className="my-4 border p-1 border-grey text-grey text-sm rounded-lg  bg-lightblue">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus mus at
          imperdiet vitae nec at mattis tellus. Ut et id pellentesque et enim
          aliquet. Nam placerat vulputate sem tincidunt elementum. Mauris sem
          orci vivamus urna donec. Libero magna elit a vel penatibus maecenas
          nunc
        </div>
        <HighDemandTable  HeaderValues={HeaderValues} data={data}/>
      </div>
    </Layout>
  );
};

export default LocalSearches;