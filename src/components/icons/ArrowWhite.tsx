import React from "react";

type Props = {
  className?: string;
};

const ArrowWhite = (props: Props) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g clip-path="url(#clip0_442_4457)">
        <path
          d="M36.4985 17.3334L49.3287 32.0001L36.4985 46.6668"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48.3271 32.0001H14.6653"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_442_4457">
          <rect
            width="64"
            height="64"
            fill="white"
            transform="translate(64) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowWhite;
