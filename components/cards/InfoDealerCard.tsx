import React from "react";
import { TrendUp, TrendDown } from "../icons/dashboardIcons";

export interface InfoDealerCardProps {
  title?: string;
  description?: string;
}
const InfoDealerCard: React.FC<InfoDealerCardProps> = ({
  title,

  description,
}) => {
  return (
    <div className="flex h-20 w-40 border border-secondary  rounded-xl">
      <div
        className={`flex flex-col w-full h-full  rounded-lg px-4 justify-center`}
      >
        <div className="flex ">
          <h1 className="text-darkgrey font-semibold text-2xl">{title}</h1>
        </div>
        <p className="text-darkgrey font-semibold text-xs">{description}</p>
      </div>
    </div>
  );
};

export default InfoDealerCard;
