import React, { useEffect } from "react";
import moment from 'moment';

const CustomTable = ({ data }) => {
  return (
    <div className="p-4 rounded-lg border border-opacity-10 border-[#081b33] w-full shadow-md">
      {/* table rows */}
      {data?.map((el, index) => {
        return (<div key={index}>
          {index == 0 ? (
            <ul className="grid grid-cols-6 justify-between items-center text-xl">
              <li className="flex-auto text-center ">SR.</li>
              {el.map((e, i) => <li key={i} className="flex-auto text-center truncate">{e}</li>)}
            </ul>
          ) :
            (
              <div className="text-black p-2 my-3 rounded-lg border-2 border-lightgrey shadow" key={index}>
                <ul className="grid grid-cols-6 justify-between items-center">
                  <li className="flex-auto text-center">{index}</li>
                  <li className="flex-auto text-center truncate">
                    {moment(el?.bookingDate?.seconds * 1000).format('MM-DD-YYYY')}</li>
                  <li className="flex-auto text-center truncate">{moment(el?.date).format('MM-DD-YYYY')}</li>
                  <li className="flex-auto text-center truncate">{el.day}</li>
                  <li className="flex-auto text-center truncate">{el.pcCount}</li>
                  <li className="flex-auto text-center truncate">{el.slotTime}</li>
                </ul>
              </div>
            )}
        </div>
        )
      })}
    </div>
  );
};

export default CustomTable;
