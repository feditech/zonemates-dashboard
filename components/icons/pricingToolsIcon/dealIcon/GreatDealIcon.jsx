import React from "react";

function GreatDealIcon({ fill = "#ffffff", ...rest }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="22.0312"
        cy="22.0312"
        r="16"
        transform="rotate(31.8179 22.0312 22.0312)"
        fill="#31651E"
      />
      <path
        d="M22.0305 15.7698L15.7697 20.6393L19.241 20.6393L19.2479 28.2915L24.8131 28.2915L24.8131 20.6393L28.2914 20.6393L22.0305 15.7698Z"
        fill="white"
        stroke="white"
        strokeWidth="1.77778"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default GreatDealIcon;
