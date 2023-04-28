import React, { useContext, useState } from "react";
import { AppContext } from "../../store/AppProvider/AppProvider";
import Map from "../map";
import ProfileSettingTab from "./ProfileSettingTab";
import SchedulerTab from "./SchedulerTab";

export default function VerticalTabs() {
  const [value, setValue] = useState(0);

  const tabs = ["Profile Setting", "Scheduler"];

  return (
    <div className=" border-b-0  pl-0   shadow-lg  xl:min-h-[calc(100vh-510px)] xxl:min-h-[calc(100vh-510px)]  flex flex-col justify-between  ">
      <ul className="my-3 mx-2  flex gap-2">
        {tabs.map((e, i) => (
          <li className=" " role="presentation" key={i}>
            <button
              onClick={() => setValue(i)}
              className={`py-5 font-bold text-md px-2 shadow-md rounded-md w-32 text-center 
                
                ${
                  value == i
                    ? "text-white  bg-primary  shadow-primary "
                    : " text-primary  bg-white"
                } `}
            >
              {e}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content   px-10 py-20  sm:p-5">
        {value == 0 ? <ProfileSettingTab /> : <SchedulerTab />}
      </div>
    </div>
  );
}
