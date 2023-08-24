import { useState } from "react";
import { Task } from "../type";
import { TasksOverview } from "./TasksOverview";
import { TasksTable } from "./TasksTable";
import { mockTasks } from "./tasksData";

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const toggleTaskCompletion = (taskId: string) => {
    const newTasks: Task[] = tasks.map((task: Task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completedDate: task.completedDate ? undefined : new Date(),
        };
      }

      return task;
    });

    setTasks(newTasks);
  };

  return (
    <>
      <TasksOverview tasks={tasks} />
      <TasksTable tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
    </>
  );
}
