import React from "react";

function ArrowDownIcon({ fill = "#ffffff", ...rest }) {
  return (
    <svg
      width="17"
      height="11"
      viewBox="0 0 17 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{cursor:'pointer'}}
    >
      <path
        d="M1 2L8.35687 8.96966L15.3265 2"
        stroke="white"
        strokeWidth="2.81219"
      />
    </svg>
  );
}

export default ArrowDownIcon;
