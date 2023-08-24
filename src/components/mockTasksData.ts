import { add, sub } from "date-fns";
import { Task } from "../type";

const now = new Date();

export const mockTasks: Task[] = [
  {
    id: "1",
    userId: "u1",
    name: "Live project 1",
    startDate: sub(now, { days: 1 }),
    dueDate: add(now, { days: 1 }),
    completedDate: undefined,
  },
  {
    id: "2",
    userId: "u2",
    name: "Prepare Documentation 1",
    startDate: add(now, { days: 1 }),
    dueDate: undefined,
    completedDate: undefined,
  },
  {
    id: "3",
    userId: "u2",
    name: "Prepare Documentation 2",
    startDate: add(now, { days: 1 }),
    dueDate: undefined,
    completedDate: undefined,
  },
  {
    id: "4",
    userId: "u3",
    name: "Go to location 1",
    startDate: new Date("2023-06-03"),
    dueDate: new Date("2023-06-04"),
    completedDate: new Date("2023-06-04"),
  },
  {
    id: "5",
    userId: "u3",
    name: "Go to location 2",
    startDate: new Date("2023-06-03"),
    dueDate: new Date("2023-06-04"),
    completedDate: new Date("2023-06-04"),
  },
  {
    id: "6",
    userId: "u3",
    name: "Go to location 3",
    startDate: new Date("2023-06-03"),
    dueDate: new Date("2023-06-04"),
    completedDate: new Date("2023-06-04"),
  },
  {
    id: "7",
    userId: "u3",
    name: "Overdue task 1",
    startDate: undefined,
    dueDate: new Date("2023-06-04"),
    completedDate: undefined,
  },
  {
    id: "8",
    userId: "u3",
    name: "Overdue task 2",
    startDate: undefined,
    dueDate: new Date("2023-06-04"),
    completedDate: undefined,
  },
  {
    id: "9",
    userId: "u3",
    name: "Overdue task 3",
    startDate: undefined,
    dueDate: new Date("2023-06-04"),
    completedDate: undefined,
  },
  {
    id: "10",
    userId: "u3",
    name: "Overdue task 4",
    startDate: undefined,
    dueDate: new Date("2023-06-04"),
    completedDate: undefined,
  },
];
