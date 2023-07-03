import React, { useEffect } from "react";
const CustomTable = ({ data, HeaderValues }) => {
  return data.length ? (<div className="p-4 rounded-lg border border-opacity-10 border-[#081b33] w-full shadow-md">
    <ul className="grid grid-cols-7  justify-between items-center text-lg font-semibold">
      <li className="flex-auto text-center ">SR.</li>
      {HeaderValues.map((el, i) => el !== "zoneName" && <li key={i} className="flex-auto text-center truncate">{el[0].toUpperCase() + el.slice(1)}</li>)}
    </ul>

    {/* table rows */}

    {data?.map((el, index) => {
      return <div key={index}>
        <div className="text-black p-2 my-3 rounded-lg border-2 border-lightgrey shadow" >
          <ul className=" grid grid-cols-7 justify-between items-center text-sm">
            <li className="flex-auto text-center">{index}</li>
            <li className="flex-auto text-center truncate">
              {el?.bookerName}</li>
            <li className="flex-auto text-center truncate">
              {el?.bookingDate}</li>
            <li className="flex-auto text-center truncate">{el?.date}</li>
            <li className="flex-auto text-center truncate">{el.day}</li>
            <li className="flex-auto text-center truncate">{el.pcCount}</li>
            <li className="flex-auto text-center truncate">{el.slotTime}</li>
            
          </ul>
        </div>
      </div>
    })}


  </div>
  ) : <div>No Bookings Found</div>
  
};

export default CustomTable;
