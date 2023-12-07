import { PlusCircle } from "@phosphor-icons/react";
import { ButtonHTMLAttributes } from "react";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="flex w-20 items-center justify-center gap-1 rounded-lg border border-gray-700 bg-blueDark text-sm font-bold text-gray-100 shadow-sm shadow-gray-700"
      {...props}
    >
      Criar
      <PlusCircle size={16} weight="bold" className="text-gray-100" />
    </button>
  );
}
