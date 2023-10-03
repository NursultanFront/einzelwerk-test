"use client";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { Popup } from "../ui/customModal/Popup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TextField from "../ui/Input/TextField";
import { Button } from "../ui/Buttons/Button";
import InputPhone from "../ui/InputPhone/InputPhone";

import "yup-phone";
import CustomCheckbox from "../ui/Checkbox/Checkbox";

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

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const getCheckboxValue = (value: boolean) => {
    setChecked(value);
  };

  const onSubmit = (data: FormData) => console.log(data);

  useEffect(() => {
    console.log(errors);
  });

  return (
    <Popup isOpen={modalOpen} onClose={handleCloseModal}>
      <div className="">
        <h2 className="text-gray-950">Drop us a line</h2>
        <p className="text-gray-700">
          Our documentary campaigns feature leading figures, organisations and
          leaders, in open and candid discussions.
        </p>
        <form className="auth-reg__form" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="name"
            type="text"
            name="name"
            errors={errors}
            register={register}
            required
            className="py-3 px-4 bg-gray-100 border rounded-lg border-gray-200 text-gray-950"
          />
          <div className="grid grid-cols-2 gap-4">
            <InputPhone
              id="phone"
              type="text"
              name="phone"
              errors={errors}
              register={register}
              required
            />

            <TextField
              id="email"
              type="text"
              name="email"
              errors={errors}
              register={register}
              required
              className="py-3 px-4 bg-gray-100 border rounded-lg border-gray-200 text-gray-950"
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
          <Button className="" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </Popup>
  );
};

export default FormModal;
