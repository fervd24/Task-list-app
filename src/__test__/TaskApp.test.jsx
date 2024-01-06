import { render, screen } from "@testing-library/react";
import TaskApp from "../components/TaskApp";

describe("TaskApp", () => {
  it("should render TaskApp succesfully", () => {
    render(<TaskApp />);
    
  });

  it("should find specific text in TaskApp", () => {
    render(<TaskApp />);
    expect(screen.findAllByText("Task List App"));
    
  });
});
