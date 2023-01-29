import React from "react";

function OverPriceIcon({ fill = "#ffffff", ...rest }) {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="22.0313"
        cy="22.0313"
        r="16"
        transform="rotate(-148.182 22.0313 22.0313)"
        fill="#F48930"
      />
      <path
        d="M26.4591 26.459L27.4429 18.5886L24.9883 21.0432L19.5725 15.6372L15.6373 19.5724L21.0482 24.9833L18.5887 27.4428L26.4591 26.459Z"
        fill="white"
        stroke="white"
        strokeWidth="1.77778"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default OverPriceIcon;
