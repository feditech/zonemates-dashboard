import React from "react";

function MasterCardIcon({ fill = "#ffffff", ...rest }) {
  return (
    <svg
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="7" cy="12" fill="#ea001b" r="7" />
        <circle cx="17" cy="12" fill="#ffa200" fillOpacity=".8" r="7" />
      </g>
    </svg>
  );
}

export default MasterCardIcon;
