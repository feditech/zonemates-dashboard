import React from "react";
import { TrendUp } from "../icons/analysisIcons";
import { TrendDown } from "../icons/analysisIcons";

export interface SearchTablePropType {
  title?: string;

  srNo?: number;

  Model?: string;

  searchCount?: number;

  change?: string;

  searchPerStockPrice?: number;

  HeaderValues?: Array<any>;

  data?: Array<any>;
}


const TableHead:React.FC<SearchTablePropType> = ({HeaderValues}) => {
  return (
    <div className="text-black p-2">
      <ul className="flex justify-between items-center ">
        {HeaderValues?.map((el: any, index: React.Key) => (
          <li className="w-40 " key={index}>
            {el.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
const TableRow: React.FC<SearchTablePropType> = ({
  srNo,
  Model,
  searchCount,
  change,
  searchPerStockPrice,
}) => {
  return (
    // ${srNo % 2 == 0 ? 'shadow-red' : 'shadow-secondary'} 
    <div className={`text-black p-2 my-3 rounded-lg border border-lightgrey shadow  shadow-secondary   `}>
      <ul className="flex justify-between items-center ">
        <li className="w-40 ">{srNo}</li>
        <li className="w-40 ">{Model}</li>
        <li className="w-40 ">{searchCount}</li>
        <li className="w-40  flex  items-center">{change}  <TrendDown height={35} width={35}  />    </li>
        {/* {srNo % 2 == 0 ? <TrendDown height={35} width={35}  /> : <TrendUp height={35} width={35} />} */}
        <li className="w-40 ">{searchPerStockPrice}</li>
      </ul>
    </div>
  );
};
const SearchTable: React.FC<SearchTablePropType> = ({ HeaderValues,data }) => {
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
            searchCount={el.searchCount}
            change={el.change}
            searchPerStockPrice={el.searchPerStockPrice}
          />
        );
      })}
    </div>
  );
};

export default SearchTable;
