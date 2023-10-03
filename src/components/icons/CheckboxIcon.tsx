import React from "react";
type Props = {
  className?: string;
};

const CheckboxIcon = (props: Props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g id="Frame 60">
        <path
          id="Vector 151"
          d="M2.25 8L5.01193 11.5511C5.39578 12.0446 6.13331 12.0688 6.54869 11.6015L13.75 3.5"
          stroke="#4F46E5"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
};

export default CheckboxIcon;
