import React from "react";
import { SupportIcon } from "../icons/dashboardIcons";

export interface DashboardHeaderPropType{
title?:string
}

const DashboardHeader:React.FC<DashboardHeaderPropType> = ({title}) => {
  return (
    <div className="my-3 flex justify-between items-center ">
      <h1 className="text-black font-bold text-center px-2 text-xl ">
        {title}
      </h1>
      <div className="flex">
       
        <div className="flex flex-col justify-center items-center h-20 w-44 mx-2  border rounded-xl bg-secondary text-white">
          <h1 className="flex gap-1 font-bold">
            X GameZone 
          </h1>          
          <span >Gulshan Karachi</span>
          <span >+92 311 2001020</span>
      
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
