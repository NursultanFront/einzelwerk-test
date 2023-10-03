import React, { useState } from "react";
import Select, { ActionMeta } from "react-select";

import "@/assets/select.css";

export type SelectType = {
  value: string;
  label: string;
};

type Props = {
  list: SelectType[];
  value: SelectType | null;
  className: string;
  placeholder?: string;
  getValue: (value: SelectType) => void;
};

const CustomSelect = (props: Props) => {
  const onChange = (
    option: SelectType | null,
    actionMeta: ActionMeta<SelectType>
  ) => {
    if (option) {
      props.getValue(option);
    }
  };

  return (
    <Select
      defaultValue={props.value}
      onChange={onChange}
      options={props.list}
      placeholder={props.placeholder}
      className="react-select-container"
      classNamePrefix="react-select"
    />
  );
};

export default CustomSelect;
