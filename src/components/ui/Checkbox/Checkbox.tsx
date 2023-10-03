import React, { useState, useRef, ChangeEvent } from "react";
import OkIcon from "@/components/icons/CheckboxIcon";

type CustomCheckboxProps = {
  id: string;
  name: string;
  isChecked: boolean;
  label?: string;
  disabled?: boolean;
  onChange: (isChecked: boolean) => void;
};

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  id,
  name,
  isChecked,
  label,
  disabled,
  onChange,
}) => {
  const checkboxInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onChange(isChecked);
  };

  const handleToggle = () => {
    if (checkboxInputRef.current) {
      checkboxInputRef.current.click();
    }
  };

  return (
    <div className="flex gap-4" onClick={handleToggle}>
      <div
        className={`flex items-center justify-center w-6 h-6 border border-blue-600 rounded-lg`}
      >
        <OkIcon className={!isChecked ? "hidden" : ""} />
      </div>
      <label
        className="text-gray-500 font-arboria-book"
        htmlFor={id}
        onClick={handleToggle}
      >
        <input
          id={id}
          ref={checkboxInputRef}
          className="hidden"
          name={name}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default CustomCheckbox;
