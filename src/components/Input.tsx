import { InputHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="h-inputHeight w-inputWidth  rounded-lg border border-gray-700 bg-gray-500 px-4 text-gray-300  shadow-sm shadow-gray-700 placeholder:text-gray-300"
      type="text"
      {...props}
    />
  );
}
