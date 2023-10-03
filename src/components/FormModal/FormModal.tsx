"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Popup } from "../ui/customModal/Popup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TextField from "../ui/Input/TextField";
import { Button } from "../ui/Buttons/Button";
import InputPhone from "../ui/InputPhone/InputPhone";

import CustomCheckbox from "../ui/Checkbox/Checkbox";
import CustomSelect, { SelectType } from "../ui/Select/Select";

import selectData from "@/text/select.json";

type FormData = yup.InferType<typeof schema>;

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup
      .string()
      .required()
      .test("len", "Invalid Tel No.", (val) => {
        const val_length_without_dashes = val.replace(/-|_/g, "").length;
        return val_length_without_dashes === 14;
      }),
  })
  .required();

const FormModal = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const [modalOpen, setModalOpen] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectType | null>(null);

  const { select } = selectData;

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const getCheckboxValue = (value: boolean) => {
    setChecked(value);
  };

  const getSelectValue = (value: SelectType) => {
    setSelectedOption(value);
  };

  const onSubmit = (data: FormData) =>
    console.log({ ...data, skill: selectedOption?.value });

  useEffect(() => {
    console.log(errors);
  });

  return (
    <Popup isOpen={modalOpen} onClose={handleCloseModal}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-950 text-4xl font-arboria-medium">
            Drop us a line
          </h2>
          <p className="text-gray-700 text-xl font-arboria-book">
            Our documentary campaigns feature leading figures, organisations and
            leaders, in open and candid discussions.
          </p>
        </div>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="name"
            type="text"
            name="name"
            errors={errors}
            register={register}
            required
            className="py-3 px-4 bg-gray-100 border rounded-lg border-gray-200 text-gray-950 font-arboria-book"
          />
          <div className="grid grid-cols-2 gap-4">
            <InputPhone
              id="phone"
              type="text"
              name="phone"
              errors={errors}
              register={register}
              required
              className="py-3 px-4 bg-gray-100 border rounded-lg border-gray-200 text-gray-950 font-arboria-book"
            />

            <TextField
              id="email"
              type="text"
              name="email"
              errors={errors}
              register={register}
              required
              className="py-3 px-4 bg-gray-100 border rounded-lg border-gray-200 text-gray-950 font-arboria-book"
            />
          </div>
          <div className="">
            <CustomSelect
              value={selectedOption}
              list={select}
              getValue={getSelectValue}
              className="text-gray-400 font-arboria-book"
            />
          </div>
          <div className="">
            <CustomCheckbox
              id="check"
              isChecked={isChecked}
              name="checkbox"
              label="I’m agree with every data you collect"
              onChange={getCheckboxValue}
            />
          </div>

          <Button
            className="py-4 rounded-full disabled:opacity-60 font-arboria-medium"
            type="submit"
            disabled={!isChecked}
          >
            Send
          </Button>
        </form>
      </div>
    </Popup>
  );
};

export default FormModal;
