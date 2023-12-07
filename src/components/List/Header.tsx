export interface HeaderProps {
  tasksCounter: number;
  checkedTasksCounter: number;
}

export function Header({ tasksCounter, checkedTasksCounter }: HeaderProps) {
  return (
    <header className="flex flex-1 items-center justify-between">
      <aside className="flex items-center gap-2">
        <p className="text-sm font-bold text-blue">Tarefas criadas</p>
        <span className="rounded-lg bg-gray-400 px-2 py-[2px] text-xs text-gray-200">
          {tasksCounter}
        </span>
      </aside>
      <aside className="flex items-center gap-2">
        <p className="text-sm font-bold text-purple">Concluídas</p>
        <span className="rounded-lg bg-gray-400 px-2 py-[2px] text-xs text-gray-200">
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </aside>
    </header>
  );
}
