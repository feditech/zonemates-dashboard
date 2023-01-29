import React from "react";
import { DownloadIcon } from "../icons/billingIcons";

export interface BillingTablePropType {
  title?: string;

  invoiceDate?: string;

  download?: string;

  dueDate?: string;

  amount?: number;

  balance?: number;

  status?: string;
}

const HeaderValues = [
  {
    title: "Invoice Date",
  },
  {
    title: "Download",
  },
  {
    title: "Due Date",
  },
  {
    title: "Amount",
  },
  {
    title: "Balance",
  },
  {
    title: "Status",
  },
];

const data = [
  {
    invoiceDate: "01 August 2022",
    dueDate: "15 August 2022",
    amount: 3000,
    balance: 600,
    status: "pending",
  },
  {
    invoiceDate: "01 August 2022",
    dueDate: "15 August 2022",
    amount: 4000,
    balance: 600,
    status: "resolved",
  },
  {
    invoiceDate: "01 August 2022",
    dueDate: "15 August 2022",
    amount: 3000,
    balance: 600,
    status: "pending",
  },
  {
    invoiceDate: "01 August 2022",
    dueDate: "15 August 2022",
    amount: 5000,
    balance: 600,
    status: "resolved",
  },
  {
    invoiceDate: "01 August 2022",
    dueDate: "15 August 2022",
    amount: 3000,
    balance: 600,
    status: "pending",
  },
];

const TableHead = () => {
  return (
    <div className="text-black p-2">
      <ul className="flex justify-between items-center ">
        {HeaderValues?.map((el: any, index: React.Key) => (
          <li className="w-28" key={index}>
            {el.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
const TableRow: React.FC<BillingTablePropType> = ({
  invoiceDate,
  download,
  dueDate,
  amount,
  balance,
  status,
}) => {
  return (
    <div className="text-black p-2 my-3 rounded-lg border border-lightgrey shadow">
      <ul className="flex justify-between items-center ">
        <li className="w-28">{invoiceDate}</li>
        <li className="w-28">
          <div className="bg-[#3C43F2] bg-opacity-20 h-10 w-16 rounded-3xl p-2 flex justify-center">
            <DownloadIcon />
          </div>
        </li>
        <li className="w-28">
          <div className="bg-[#FF9D9D] bg-opacity-20 h-10 w-full rounded-3xl p-2 flex justify-center items-center text-xs">
            {dueDate}
          </div>
        </li>
        <li className="w-28">${amount}</li>
        <li className="w-28">${balance}</li>
        <li className="w-28">
          <div className={` ${status == 'pending' ? 'bg-[#FF9D9D]' : 'bg-[#88D79E]' } bg-opacity-20 h-10 w-full rounded-3xl p-2 flex justify-center items-center text-xs`}>
 
 {status}
 
            </div>
        </li>
      </ul>
    </div>
  );
};
const BillingTable: React.FC<BillingTablePropType> = ({ title }) => {
  return (
    <div className="p-4 rounded-lg border border-lightgrey  w-full shadow-md">
      {/* table header */}
      <TableHead />
      {/* table row */}

      {data?.map((el: any, index: React.Key) => {
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

export default BillingTable;
