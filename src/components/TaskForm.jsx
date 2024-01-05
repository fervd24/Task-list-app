import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import useTaskActions from "../hooks/useTaskActions";


const TaskForm = () => {
    const { dispatch } = useContext(TaskContext);
    const [newTask, setNewTask] = useState('');

    const taskActions = useTaskActions();

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            taskActions.handleAddTask(newTask);
            setNewTask('');
        }
    };

    return (
        <div>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      );
    
}


export default TaskForm;