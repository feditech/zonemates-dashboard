import React,{useState} from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DropDown from "../components/dropdown/DropDown";
import Layout from "../components/Layout";
import {RightArrowIcon, NextPageArrow, FilterIcon} from '../components/icons/pricingToolsIcon'
import ProductCard from "../components/cards/ProductCard";
import car from '../public/Logo.png'
import FilterDropDown from "../components/dropdown/FilterDropDown";
const dropDownOptions = [
  { value: "1", title: "Option 1" },
  { value: "2", title: "Option 2" },
  { value: "3", title: "Option 3" },
  { value: "4", title: "Option 4" },
  { value: "5", title: "Option 5" },
];
const Pricingtools = () => {
  const [pageNo,setPageNo] =useState(1)
  return <Layout>
    <div>
    <DashboardHeader title="Pricing Tool" />
    <div className="flex justify-between items-center mx-2">
    <div className=" w-full flex justify-around ">
      <DropDown title="PRICE/MILLAGE" options={dropDownOptions}  style={{ cursor: "pointer" , height : '40px' ,border:'none',outline:'none'}}/> 
      <DropDown title="GEAR BOX" options={dropDownOptions}  style={{ cursor: "pointer" , height : '40px' ,border:'none',outline:'none'}}/> 
      <DropDown title="MAKE & MODEL" options={dropDownOptions}  style={{ cursor: "pointer" , height : '40px' ,border:'none',outline:'none'}}/> 
      <DropDown title="TRIM & COLOR" options={dropDownOptions}  style={{ cursor: "pointer" , height : '40px' ,border:'none',outline:'none'}}/> 
      <DropDown title="DEAL RATING" options={dropDownOptions} style={{ cursor: "pointer" , height : '40px' ,border:'none',outline:'none'}}/> 
    </div>
      <div>
        {/* Find button / Filter Button */}
        <FilterDropDown />
      </div>
    </div>
    <div className="flex justify-between rounded-md  mt-3 py-2 mx-2">
      <div id='left'>
      <h1 className="text-xl font-bold my-2">All Listing</h1>
      <div id='filterContainer'>
        <button className="bg-[transparent] border border-grey border-opacity-40 rounded-lg mr-1 flex py-1 px-2  text-sm gap-x-6">Best Deals First <FilterIcon height={'18px'} width={'20px'} /> </button>
      </div>
      </div>
      <div id='right' className="flex items-center gap-x-4">
      <h3 >Total 250 Searches</h3>
      <div id='paginationDiv' className="flex ">
      Page: <button className="border rounded-md h-6 w-6 flex justify-center items-center ml-2">{pageNo}</button>
      <button className=" h-6 w-6 flex justify-center items-center ml-2">{pageNo+1}</button>
      <button className=" h-6 w-6 flex justify-center items-center ml-2">{pageNo+2}</button>
      <button className=" h-6 w-6 flex justify-center items-center ml-2"><NextPageArrow /></button>
      </div>
      </div>
    </div>
      <ProductCard image={car} title='2021 Audi A3 Sportback' price={4000} mileage={88000} regNo='DE14 UCE' stockNo={123456789} daysInMarket={114}
      options={['Steel Wheels']} instantMarketValue={4503}  dealType='Great Deal' newPrice={4000} savings={503}
      searchRank={1}
      />
       <ProductCard image={car} title='2021 Audi A3 Sportback' price={4000} mileage={88000} regNo='DE14 UCE' stockNo={123456789} daysInMarket={114}
      options={['Steel Wheels']} instantMarketValue={4503}  dealType='Great Deal' newPrice={4000} savings={503}
      searchRank={1}
      />
       <ProductCard image={car} title='2021 Audi A3 Sportback' price={4000} mileage={88000} regNo='DE14 UCE' stockNo={123456789} daysInMarket={114}
      options={['Steel Wheels']} instantMarketValue={4503}  dealType='Great Deal' newPrice={4000} savings={503}
      searchRank={1}
      />
       <ProductCard image={car} title='2021 Audi A3 Sportback' price={4000} mileage={88000} regNo='DE14 UCE' stockNo={123456789} daysInMarket={114}
      options={['Steel Wheels']} instantMarketValue={4503}  dealType='Great Deal' newPrice={4000} savings={503}
      searchRank={1}
      />



    
    </div></Layout>;
};

export default Pricingtools;

