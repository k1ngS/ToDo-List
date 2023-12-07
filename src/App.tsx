import { Header } from "./components/Header";
import { Header as ListHeader } from "./components/List/Header";

import "./styles/global.css";
import { Empty } from "./components/List/Empty";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { useState } from "react";
import { Item } from "./components/List/Item";

export interface TaskProps {
  id: number;
  text: string;
  isChecked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [inputValue, setInputValue] = useState("");

  const checkedTasksCounter = tasks.reduce((prevTask, currentTask) => {
    if (currentTask.isChecked) {
      return prevTask + 1;
    }

    return prevTask;
  }, 0);

  function handleAddTask() {
    if (!inputValue) {
      return;
    }

    const newTask: TaskProps = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue("");
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  return (
    <main className="flex flex-col items-center">
      <Header />

      <section>
        <div className="-mt-7 flex max-w-3xl gap-2">
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Adicione uma nova tarefa"
          />
          <Button onClick={handleAddTask} />
        </div>

        <div className="mt-16 flex w-container flex-col gap-6">
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  );
}
