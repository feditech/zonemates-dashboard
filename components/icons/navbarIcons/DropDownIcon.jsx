import React from "react";

function DropDownIcon({ fill = "#ffffff", ...rest }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 11L12 18L5 11"
        stroke="#132743"
        strokeOpacity="0.78"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DropDownIcon;
