import React, { useContext } from "react";
import { SupportIcon } from "../icons/dashboardIcons";
import { AppContext } from "../../store/AppProvider/AppProvider";


const DashboardHeader = ({ title }) => {

  const { userData } = useContext(AppContext)
  // console.log(userData)
  return (
    <div className="my-3 flex justify-between items-center ">
      <h1 className="text-black font-bold text-center px-2 text-xl ">
        {title}
      </h1>
      <div className="flex">

        <div className="flex flex-col justify-center items-center h-20 py-1 w-48 mx-2  border rounded-xl bg-primary text-white">
          <h1 className="flex font-bold">
            {userData?.name}
          </h1>
          <span >Gulshan Karachi</span>
          <span >{userData?.phoneNo}</span>

        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
