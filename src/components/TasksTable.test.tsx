import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import { TasksTable } from "./TasksTable";
import { mockTasks } from "./mockTasksData";

const toggleTaskCompletion = vi.fn();

it("should render all tasks", () => {
  render(
    <TasksTable tasks={mockTasks} toggleTaskCompletion={toggleTaskCompletion} />
  );

  expect(screen.getAllByTestId(/row-/)).toHaveLength(mockTasks.length);
});

it("should call toggleTaskCompletion correctly when a checkbox is clicked", () => {
  render(
    <TasksTable tasks={mockTasks} toggleTaskCompletion={toggleTaskCompletion} />
  );

  fireEvent.click(screen.getByLabelText("checkbox 1"));

  expect(toggleTaskCompletion).toHaveBeenCalledWith("1");
});
