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
    <div>
      <TasksOverview tasks={tasks} />
      <TasksTable
        tasks={tasks}
        toggleTaskCompletion={handleToggleTaskCompletion}
      />
    </div>
  );
}
