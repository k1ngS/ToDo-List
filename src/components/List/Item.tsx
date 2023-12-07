import { Check, Trash } from "@phosphor-icons/react";
import { TaskProps } from "../../App";

export interface ItemProps {
  data: TaskProps;
  removeTask: (id: number) => void;
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void;
}

export function Item({ data, removeTask, toggleTaskStatus }: ItemProps) {
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked });
  }

  function handleRemove() {
    removeTask(data.id);
  }

  const checkboxCheckedClassname = data.isChecked
    ? "hover:border-2 hover:border-purple hover:bg-purple"
    : "border-2 border-blue hover:bg-blueDark";
  const paragraphChekedClassname = data.isChecked
    ? "line-through color-gray-300"
    : "";

  return (
    <div className="flex flex-1 items-center justify-between gap-3 rounded-lg border border-gray-400 bg-gray-500 p-4">
      <div className="flex">
        <label
          className="flex items-center gap-3 p-1"
          htmlFor="checkbox"
          onClick={handleTaskToggle}
        >
          <input
            readOnly
            className="hidden"
            type="checkbox"
            checked={data.isChecked}
          />
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full ${checkboxCheckedClassname}`}
          >
            {data.isChecked && <Check size={12} />}
          </span>

          <p className={` ${paragraphChekedClassname}`}>{data.text}</p>
        </label>
      </div>

      <button onClick={handleRemove}>
        <Trash size={16} className="text-gray-300" />
      </button>
    </div>
  );
}
