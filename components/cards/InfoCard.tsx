import React from "react";
import { TrendUp, TrendDown } from "../icons/dashboardIcons";

export interface InfoCardProps {
  title?: string;
  description?: string;
  percentage?: number;
  trend?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  percentage,
  trend,
}) => {
  return (
    <div className="flex h-20 w-56 border-lightgrey border-2 rounded-xl">
      <div className="flex flex-col w-4/6 h-full  rounded-l-lg justify-center items-center text-darkgrey ">
        <h2 className=" text-xl font-bold">{title}</h2>
        <h5>{description}</h5>
      </div>
      {trend == "up" ? (
        <div className="flex flex-col w-2/6 h-full bg-secondary rounded-r-lg items-center justify-center">
          <TrendUp />
          <span className="text-white font-semibold">{percentage}%</span>
        </div>
      ) : (
        <div className="flex flex-col w-2/6 h-full bg-crayola rounded-r-lg items-center justify-center">
          <TrendDown />
          <span className="text-black font-semibold">25%</span>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
