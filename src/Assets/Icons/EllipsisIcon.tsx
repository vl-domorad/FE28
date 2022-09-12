import React from "react";

export const Ellipsis = ({ width = "21", height = "21" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 13.1027 2.89733 14 4 14C5.10267 14 6 13.1027 6 12C6 10.8973 5.10267 10 4 10C2.89733 10 2 10.8973 2 12ZM12 14C10.8973 14 10 13.1027 10 12C10 10.8973 10.8973 10 12 10C13.1027 10 14 10.8973 14 12C14 13.1027 13.1027 14 12 14ZM20 14C18.8973 14 18 13.1027 18 12C18 10.8973 18.8973 10 20 10C21.1027 10 22 10.8973 22 12C22 13.1027 21.1027 14 20 14Z"
        fill="#313037"
      />
    </svg>
  );
};
