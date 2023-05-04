import * as React from "react";

function BookingIcon({ fill = "#ffffff", ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 96 960 960"
      width="24"
      fill={fill}
    >
      <path d="M160 936q-33 0-56.5-23.5T80 856V296q0-33 23.5-56.5T160 216h640q33 0 56.5 23.5T880 296v560q0 33-23.5 56.5T800 936H160Zm0-80h640V296H160v560Zm40-80h200v-80H200v80Zm382-80 198-198-57-57-141 142-57-57-56 57 113 113Zm-382-80h200v-80H200v80Zm0-160h200v-80H200v80Zm-40 400V296v560Z" />
    </svg>
  );
}

export default BookingIcon;
