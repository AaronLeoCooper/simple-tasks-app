import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

// The two tests marked with concurrent will be run in parallel
describe("App", () => {
  it("should have a heading", () => {
    render(<App />);

    expect(screen.getByRole("heading")).toHaveTextContent("Vite + React");
  });

  it("should block submission until the form is filled", async () => {
    render(<App />);

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    const message = await screen.findByText("Please fill out the form");

    expect(message).toBeInTheDocument();
  });

  it("should allow submission when the form is filled", async () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Name:");
    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    const message = await screen.findByText("Thanks for submitting!");

    expect(message).toBeInTheDocument();
  });

  it("should call an API on mount", async () => {
    render(<App />);

    const loadingMessage = await screen.findByText("Loading...");
    expect(loadingMessage).toBeInTheDocument();

    const loadedMessage = await screen.findByText("Loaded data!");
    expect(loadedMessage).toBeInTheDocument();
  });
});
