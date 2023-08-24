import { useState } from "react";
import { Task } from "../type";
import { toggleTaskCompletion } from "../utils";
import { TasksOverview } from "./TasksOverview";
import { TasksTable } from "./TasksTable";
import { mockTasks } from "./mockTasksData";

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const handleToggleTaskCompletion = (taskId: string) => {
    setTasks(toggleTaskCompletion(tasks, taskId));
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold border-b-2 pb-2 mb-10">Your tasks</h1>
      <div className="flex flex-col items-center gap-5">
        <TasksOverview tasks={tasks} />
        <TasksTable
          tasks={tasks}
          toggleTaskCompletion={handleToggleTaskCompletion}
        />
      </div>
    </div>
  );
}
