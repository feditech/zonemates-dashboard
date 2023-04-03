import React from "react";

export interface TableHeaderPropType {
  title?: string;
}

export interface TableDataPropType {
  invoiceDate?: string;

  download?: string;

  dueDate?: string;

  amount?: number;

  balance?: number;

  status?: string;
}

const TableHead = ({HeaderValues}:any) => {
  // console.log("HeaderValues", HeaderValues);

  return (
    <div className="text-black p-2">
      <ul className="flex justify-between items-center ">
        {HeaderValues?.map((el: any, index: React.Key) => (
          <li className="w-28 text-center" key={index}>
            {el.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
const TableRow: React.FC<TableDataPropType> = ({
  invoiceDate,
  download,
  dueDate,
  amount,
  balance,
  status,
}) => {
  return (
    <div className="text-black p-2 my-3 rounded-lg border-2 border-lightgrey shadow">
      <ul className="flex justify-between items-center ">
        <li className="w-28 text-center">{invoiceDate}</li>
        <li className="w-28 text-center">
          <div className="bg-[#3C43F2] bg-opacity-20 h-10  rounded-3xl p-2 flex justify-center">
            icon
          </div>
        </li>
        <li className="w-28 text-center">
          <div className="bg-[#FF9D9D] bg-opacity-20 h-10 w-full rounded-3xl p-2 flex justify-center items-center text-xs">
            {dueDate}
          </div>
        </li>
        <li className="w-28 text-center">${amount}</li>
        <li className="w-28 text-center">${balance}</li>
        <li className="w-28 text-center">
          <div
            className={` ${
              status == "pending" ? "bg-[#FF9D9D]" : "bg-[#88D79E]"
            } bg-opacity-20 h-10 w-full rounded-3xl p-2 flex justify-center items-center text-xs`}
          >
            {status}
          </div>
        </li>
      </ul>
    </div>
  );
};
const Table = (props: any) => {
//  console.log("PROPSSSSSSS",props)
  return (
    <div className="p-4 rounded-lg border border-lightgrey  w-full shadow-md">
      {/* table header */}
      <TableHead  HeaderValues={props.HeaderValues} />
      {/* table row */}

      {props.data?.map((el: any, index: React.Key) => {
        return (
          <TableRow
            key={index}
            invoiceDate={el.invoiceDate}
            amount={el.amount}
            balance={el.balance}
            dueDate={el.dueDate}
            status={el.status}
          />
        );
      })}
    </div>
  );
};

export default Table;
