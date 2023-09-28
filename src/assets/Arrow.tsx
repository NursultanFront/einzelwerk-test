import React from "react";

type Props = {
  className: string;
};

const ArrowIcon = (props: Props) => {
  const { className } = props;

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 13.8334L5 8.83341L6.16667 7.66675L10 11.5001L13.8333 7.66675L15 8.83341L10 13.8334Z"
        fill="white"
      />
    </svg>
  );
};

export default ArrowIcon;
