import { useState } from "react";
import { TableFilterDown } from "../../icons/dashboardIcons";

const TableHead = ({ columns,handleSorting }: any) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const handleSortingChange = (accessor: any) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <div className="text-black p-2">
    <ul className="flex justify-between items-center px-4 ">
        {columns?.map(({ label, accessor,sortable }: any) => {
             const cl = sortable
             ? sortField === accessor && order === "asc"
              ? "up"
              : sortField === accessor && order === "desc"
              ? "down"
              : "default"
             : "";
          return (
            <li key={accessor} className={`w-1/5 flex items-center gap-x-1   `} >
              {label}  <TableFilterDown cursor={'pointer'} onClick={() => handleSortingChange(accessor) } />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableHead;
