import React from "react";


export interface InfoSimpleCardProps {
Icon?:any
title?:string;
}
const PaymentIconCard: React.FC<InfoSimpleCardProps> = ({
Icon,
title

}) => {
  return (
    <button>
    <div className="flex h-16 w-36 border-lightgrey bg-lightgrey border-2 rounded-xl">
      <div className={`flex flex-col w-full h-full rounded-lg items-center justify-center`} >
        <div className={`flex   ${title && 'gap-x-0' }  `} >
       {title && <span className="text-[#105E26] px-2" >{title}</span>}   <Icon />
        </div>
      </div>
    </div>
    </button>
  );
};

export default PaymentIconCard;
