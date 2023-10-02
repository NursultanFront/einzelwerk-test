"use client";

import React, { useState } from "react";
import ArrowIcon from "@/components/icons/WhiteArrow";
import cn from "clsx";

interface IItem {
  label?: string;
  value: string;
}

interface IProps {
  placeholder: string;
  value: string;
  list: IItem[];
  isSearchable?: boolean;
  isZebraItem?: boolean;
}

const Accordion: React.FC<IProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion min-w-max">
      <div className="accordion-label flex items-center" onClick={toggle}>
        <div className="accrodion-preview">
          <div className="accrodion-preview__value">{props.value}</div>
        </div>
        <ArrowIcon
          className={cn(`w-6 h-6 min-w-fit `, {
            "rotate-180": isExpanded,
          })}
        />
      </div>
      {isExpanded && (
        <div className="accordion-content accordion-content_visible">
          {props.list.map((item, index) => (
            <div
              key={item.label || item.value}
              className={`content-item ${
                index % 2 === 0 && props.isZebraItem
                  ? "content-item_darken"
                  : ""
              }`}
            >
              {item.label && item.label.length > 0 && (
                <div className="content-item__placeholder">{item.label}</div>
              )}
              <div className="content-item__value">{item.value}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
