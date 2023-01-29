import React from "react";

function TrendUp({ fill = "#ffffff", ...rest }) {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle
        cx="22.0312"
        cy="22.0312"
        r="16"
        transform="rotate(31.8179 22.0312 22.0312)"
        fill="#51913B"
      />
      <path
        d="M22.0304 15.7698L15.7695 20.6393L19.2408 20.6393L19.2478 28.2915L24.813 28.2915L24.813 20.6393L28.2913 20.6393L22.0304 15.7698Z"
        fill="white"
        stroke="white"
        strokeWidth="1.77778"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TrendUp;
