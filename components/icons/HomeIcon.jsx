import * as React from "react";

function HomeIcon({ fill = "#fff", ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 96 960 960"
      width="24"
      fill={fill}
      {...rest}
    >
      <path d="M520 456V216h320v240H520ZM120 616V216h320v400H120Zm400 320V536h320v400H520Zm-400 0V696h320v240H120Zm80-400h160V296H200v240Zm400 320h160V616H600v240Zm0-480h160v-80H600v80ZM200 856h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360 776Z" />
    </svg>
  );
}

export default HomeIcon;
