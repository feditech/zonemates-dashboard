import React from "react";

function RightArrowIcon({ fill = "#ffffff", ...rest }) {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect width="23" height="23" rx="5" fill="#041831" />
      <path
        d="M9 6L14 11L9 16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RightArrowIcon;
