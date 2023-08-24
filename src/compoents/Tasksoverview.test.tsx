import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { TasksOverview } from "./TasksOverview";
import { mockTasks } from "./tasksData";

it("should display all tasks", () => {
  render(<TasksOverview tasks={mockTasks} />);

  const allTasks = screen.getByTestId("all-tasks");

  expect(allTasks).toHaveTextContent("10");
});

it("should display live tasks", () => {
  render(<TasksOverview tasks={mockTasks} />);

  const allTasks = screen.getByTestId("live-tasks");

  expect(allTasks).toHaveTextContent("1");
});

it("should display upcoming tasks", () => {
  render(<TasksOverview tasks={mockTasks} />);

  const allTasks = screen.getByTestId("upcoming-tasks");

  expect(allTasks).toHaveTextContent("2");
});

it("should display completed tasks", () => {
  render(<TasksOverview tasks={mockTasks} />);

  const allTasks = screen.getByTestId("completed-tasks");

  expect(allTasks).toHaveTextContent("3");
});

it("should display issue tasks", () => {
  render(<TasksOverview tasks={mockTasks} />);

  const allTasks = screen.getByTestId("issue-tasks");

  expect(allTasks).toHaveTextContent("4");
});
