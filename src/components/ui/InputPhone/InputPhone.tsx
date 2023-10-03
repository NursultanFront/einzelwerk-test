"use client";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import InputMask from "react-input-mask";

interface TextFieldProps<T extends FieldValues> {
  value?: string;
  name: Path<T>;
  type: string;
  id: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  required: boolean;
  className?: string;
}

const InputPhone = <T extends FieldValues>(props: TextFieldProps<T>) => {
  return (
    <div className="flex flex-col flex-grow">
      <InputMask
        id={props.id}
        type={props.type}
        {...props.register(props.name)}
        mask="+9 999 999-99-99"
        className="py-3 px-4 bg-gray-100 border rounded-lg border-gray-200 text-gray-950"
      />
      {props.errors && props.errors[props.name] && (
        <p className="text-[#FF2525]">
          {props.errors[props.name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default InputPhone;
