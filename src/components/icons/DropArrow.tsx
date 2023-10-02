import React from "react";

const DropArrow = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: "rotate(180deg)" }}
    >
      <g clip-path="url(#clip0_1201_9365)">
        <path
          d="M17.5 14.4056L12 9.59434L6.5 14.4056"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1201_9365">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="matrix(1.19249e-08 1 1 -1.19249e-08 0 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DropArrow;
