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
        cx="22.0313"
        cy="22.9688"
        r="16"
        transform="rotate(-148.182 22.0313 22.9688)"
        fill="#FF0000"
      />
      <path
        d="M22.0321 29.2302L28.293 24.3607L24.8217 24.3607L24.8147 16.7085L19.2495 16.7085L19.2495 24.3607L15.7712 24.3607L22.0321 29.2302Z"
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
