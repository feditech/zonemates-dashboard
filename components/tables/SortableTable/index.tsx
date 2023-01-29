import React, { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useSortableTable } from "./useSortableTable";
export interface LeadReportTablePropType {
  data?: any;
  columns?: any;
  hasBackgroundColor?:boolean;

  hasBoxShadow?: boolean;
}

const LeadReportTable: React.FC<LeadReportTablePropType> = ({
  data,
  columns,
  hasBackgroundColor,
  hasBoxShadow
}) => {
  const [tableData, handleSorting] = useSortableTable(data);
  return (
    <div className="p-4 rounded-lg border border-lightgrey  w-full shadow-md">
      <TableHead columns={columns} handleSorting={handleSorting} />
      <TableBody columns={columns} tableData={tableData} hasBackgroundColor={hasBackgroundColor} hasBoxShadow={hasBoxShadow} />
    </div>
  );
};

export default LeadReportTable;
