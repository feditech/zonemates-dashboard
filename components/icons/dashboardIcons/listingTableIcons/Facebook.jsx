import React from "react";

function Facebook({ fill = "#ffffff", ...rest }) {
  return (
    <svg
      fill="#3b5998"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20px"
      height="20px"
      {...rest}
    >
      <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
    </svg>
  );
}

export default Facebook;
