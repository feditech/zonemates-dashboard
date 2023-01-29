import Image from "next/image";
import React from "react";
import { TrendUp, TrendDown } from "../icons/dashboardIcons";

export interface InfoSimpleCardProps {
  count?: number;
  title?: string;
  image?: string  | undefined;
  backgroundColor?: string;
}
const InfoSimpleCard: React.FC<InfoSimpleCardProps> = ({
  count,
  title,
  image,
  backgroundColor,
}) => {
  let myimage = image as string;

  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="flex h-20 w-40 border-lightgrey border-2 rounded-xl"
    >
      <div
        className={`flex flex-col w-full h-full ${
          backgroundColor && "bg-" + backgroundColor
        } rounded-lg items-center justify-center`}
      >
        <div className="flex  ">
       
          <Image height={30} width={30} alt ='sleekride' src={myimage} />
          <span className="text-white font-semibold text-xl">{count}</span>
        </div>
        <span className="text-white font-semibold">{title}</span>
      </div>
    </div>
  );
};

export default InfoSimpleCard;
