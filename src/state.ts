import { add, sub } from "date-fns";
import { atom } from "jotai";
import { Task } from "./type";

const now = new Date();

// TODO: figure out why this turns into array of array..
export const tasksAtom = atom<Task[]>([
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
    name: "Prepare Documentation",
    startDate: new Date("2023-06-01"),
    dueDate: new Date("2023-06-02"),
    completedDate: undefined,
  },
  {
    id: "3",
    userId: "u3",
    name: "Go to location",
    startDate: new Date("2023-06-03"),
    dueDate: new Date("2023-06-04"),
    completedDate: undefined,
  },
]);
