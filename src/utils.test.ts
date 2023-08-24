import { describe, expect, it } from "vitest";
import { Task } from "./type";
import { toggleTaskCompletion } from "./utils";

describe("toggleTaskCompletion", () => {
  const tasks: Task[] = [
    {
      id: "1",
      userId: "u1",
      name: "Live project 1",
      startDate: undefined,
      dueDate: undefined,
      completedDate: undefined,
    },
    {
      id: "2",
      userId: "u2",
      name: "Prepare Documentation 1",
      startDate: undefined,
      dueDate: undefined,
      completedDate: new Date(),
    },
  ];

  it("should set task completion to a date when not set", () => {
    const result = toggleTaskCompletion(tasks, "1");

    expect(result[0].completedDate).toBeInstanceOf(Date);
    expect(result[1].completedDate).toBeInstanceOf(Date);
  });

  it("should set task completion to undefined when already set", () => {
    const result = toggleTaskCompletion(tasks, "2");

    expect(result[0].completedDate).toBeUndefined();
    expect(result[1].completedDate).toBeUndefined();
  });
});
