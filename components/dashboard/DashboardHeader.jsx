import React from "react";
const DashboardHeader = ({ title }) => {

  return (
    <div className="my-3 flex justify-between items-center ">
      <h1 className="text-black font-bold text-center px-2 text-3xl ">
        {title}
      </h1>
    </div>
  );
};

export default DashboardHeader;
