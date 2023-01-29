import React from "react";
import { TrendUp } from "../icons/analysisIcons";
import { TrendDown } from "../icons/analysisIcons";

export interface HighDemandTablePropType {

  srNo?: number;

  Model?: string;

  change?: string;

  searchPerStockPrice?: number;

  HeaderValues?: Array<any>;

  data?: Array<any>;
}


const TableHead:React.FC<HighDemandTablePropType> = ({HeaderValues}) => {
  return (
    <div className="text-black p-2">
      <ul className="flex justify-between items-center ">
        {HeaderValues?.map((el: any, index: React.Key) => (
          <li className="w-44 text-center" key={index}>
            {el.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
const TableRow: React.FC<HighDemandTablePropType> = ({
  srNo,
  Model,
  change,
  searchPerStockPrice,
}) => {
  return (
    // ${ srNo && (srNo % 2 == 0 )? 'shadow-red' : 'shadow-secondary'}
    <div className={`text-black p-2 my-3 rounded-lg border border-lightgrey shadow shadow-secondary    `}>
      <ul className="flex justify-between items-center ">
        <li className="w-44 text-center">{srNo}</li>
        <li className="w-44 text-center">{Model}</li>
        <li className="w-44 text-center">{searchPerStockPrice}</li>
        <li className="w-44 text-center flex justify-center items-center">{change}  <TrendDown height={35} width={35}  />   </li>
        {/* {srNo && (srNo % 2 == 0 )? <TrendDown height={35} width={35}  /> : <TrendUp height={35} width={35} />} */}
      </ul>
    </div>
  );
};
const HighDemandTable: React.FC<HighDemandTablePropType> = ({ HeaderValues,data }) => {
  return (
    <div className="p-4 rounded-lg border border-lightgrey  w-full shadow-md">
      {/* table header */}
      <TableHead HeaderValues={HeaderValues} />
      {/* table row */}

      {data?.map((el: any, index: number) => {
        return (
          <TableRow
            key={index}
            srNo={index+1}
            Model={el.Model}
            change={el.change}
            searchPerStockPrice={el.searchPerStockPrice}
          />
        );
      })}
    </div>
  );
};

export default HighDemandTable;
