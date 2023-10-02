"use client";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import WhiteArrow from "@/components/icons/WhiteArrow";

type Item = {
  title: string;
  text: string;
};

interface IProps {
  list: Item[];
  getIndex: (value: number) => void;
}
export const AccordionWrapper = (props: IProps) => {
  const { getIndex, list } = props;

  return (
    <div className="flex-auto">
      <Accordion allowZeroExpanded className="flex flex-col gap-10">
        {list.map((item, i) => {
          return (
            <AccordionItem
              key={i}
              onClick={() => {
                getIndex(i);
              }}
              className="flex flex-col gap-6 pb-8 border-b border-gray-700"
            >
              <AccordionItemHeading>
                <AccordionItemButton className="flex">
                  <span className="flex-grow text-2xl"> {item.title}</span>
                  <WhiteArrow />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-lg">{item.text}</p>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};
