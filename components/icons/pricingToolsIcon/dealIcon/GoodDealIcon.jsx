import React from "react";

function GoodDealIcon({ fill = "#ffffff", ...rest }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle
        cx="14.8113"
        cy="14.8117"
        r="9.93213"
        transform="rotate(140.897 14.8113 14.8117)"
        fill="#51913B"
        stroke="white"
        strokeWidth="0.5"
      />
      <path
        d="M16.804 11.3611L11.804 12.0527L13.7171 13.1573L11.2861 17.3768L14.3532 19.1476L16.7881 14.9303L18.705 16.037L16.804 11.3611Z"
        fill="white"
        stroke="white"
        strokeWidth="1.77778"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default GoodDealIcon;
