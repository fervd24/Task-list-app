import { useState } from "react";
import useTaskActions from "../hooks/useTaskActions";
import "./TaskForm.css"


const TaskForm = () => {
    const [newTask, setNewTask] = useState('');

    const taskActions = useTaskActions();

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            taskActions.handleAddTask(newTask);
            setNewTask('');
        }
    };

    return (
        <div className="form-container">
          <input
            type="text"
            value={newTask}
            placeholder="Enter a task..."
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      );
    
}


export default TaskForm;