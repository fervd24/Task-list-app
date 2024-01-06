import { fireEvent, render, screen } from "@testing-library/react";
import TaskApp from "../components/TaskApp";

describe("TaskApp", () => {
  it("should render TaskApp succesfully", () => {
    render(<TaskApp />);
    
  });
  
  it("should find specific text in TaskApp", () => {
    // Render the TaskForm component
    render(<TaskApp />);
    // Assertion 
    expect(screen.findAllByText("Task List App"));
    
  });

  it('renders task form correctly', () => {
    const { getByPlaceholderText} = render(<TaskApp />);
  
    const addButton = screen.getByRole('button', { name: 'Add Task' });
    const inputField = getByPlaceholderText('Enter a task...');
  
    expect(addButton).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
  });
  
  it("handle input to add new task correctly", () => {
    const { getByPlaceholderText} = render(<TaskApp />);
    const inputField = getByPlaceholderText('Enter a task...');
    fireEvent.change(inputField, {target: {value: 'Test input'}});
    
    expect(inputField.value).toBe('Test input');
  });
  
 
});
