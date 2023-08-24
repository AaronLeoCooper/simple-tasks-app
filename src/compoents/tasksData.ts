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
    name: "Go to location",
    startDate: new Date("2023-06-03"),
    dueDate: new Date("2023-06-04"),
    completedDate: new Date("2023-06-04"),
  },
  {
    id: "4",
    userId: "u3",
    name: "Go to location",
    startDate: new Date("2023-06-03"),
    dueDate: new Date("2023-06-04"),
    completedDate: new Date("2023-06-04"),
  },
  {
    id: "4",
    userId: "u3",
    name: "Go to location",
    startDate: new Date("2023-06-03"),
    dueDate: new Date("2023-06-04"),
    completedDate: new Date("2023-06-04"),
  },
  {
    id: "4",
    userId: "u3",
    name: "Go to location",
    startDate: undefined,
    dueDate: new Date("2023-06-04"),
    completedDate: undefined,
  },
  {
    id: "4",
    userId: "u3",
    name: "Go to location",
    startDate: undefined,
    dueDate: new Date("2023-06-04"),
    completedDate: undefined,
  },
  {
    id: "4",
    userId: "u3",
    name: "Go to location",
    startDate: undefined,
    dueDate: new Date("2023-06-04"),
    completedDate: undefined,
  },
  {
    id: "4",
    userId: "u3",
    name: "Go to location",
    startDate: undefined,
    dueDate: new Date("2023-06-04"),
    completedDate: undefined,
  },
];
