import { isAfter, isBefore } from "date-fns";
import { Task } from "./type";

export const toggleTaskCompletion = (tasks: Task[], taskId: string): Task[] => {
  const newTasks: Task[] = tasks.map((task: Task) => {
    if (task.id === taskId) {
      return {
        ...task,
        completedDate: task.completedDate ? undefined : new Date(),
      };
    }

    return task;
  });

  return newTasks;
};

export const getLiveTasks = (tasks: Task[]): Task[] => {
  const now = new Date();

  return tasks.filter(({ startDate, dueDate, completedDate }) => {
    return (
      dueDate &&
      isBefore(now, dueDate) &&
      startDate &&
      isAfter(now, startDate) &&
      !completedDate
    );
  });
};

export const getUpcomingTasks = (tasks: Task[]): Task[] => {
  const now = new Date();

  return tasks.filter(({ startDate, completedDate }) => {
    return startDate && isBefore(now, startDate) && !completedDate;
  });
};

export const getCompletedTasks = (tasks: Task[]): Task[] =>
  tasks.filter(({ completedDate }) => {
    return !!completedDate;
  });

export const getIssueTasks = (tasks: Task[]): Task[] => {
  const now = new Date();

  return tasks.filter(({ dueDate, completedDate }) => {
    return dueDate && !completedDate && isAfter(now, dueDate);
  });
};
