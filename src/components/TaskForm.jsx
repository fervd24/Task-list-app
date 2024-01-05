import { useState } from "react";
import TaskList from "./TaskList";


function TaskForm() {
    const [inputValue, setInputValue] = useState("");
    const [taskList, setTaskList] = useState([])

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setTaskList([
                ...taskList, 
                {
                    id: crypto.randomUUID(),
                    task: inputValue,
                    completed: false,
                    isUpdating: false
                }
            ]);

        setInputValue('');
    }

    
    const handleUpdateTask = (id, propertyName, newValue) => {
        setTaskList(taskList.map(task => {
            if(task.id === id){
                return {
                    ...task,
                    [propertyName]: newValue
                };
            }
            return task;
        }))
    }

    const handleDeleteTask = (id) => {
        setTaskList(taskList.filter(task => task.id !== id))
    }

    const toggleCheckbox = (id) => {
        setTaskList(taskList.map(task => {
            if(task.id === id){
                return {
                    ...task,
                    completed: !task.completed
                };
            }
            return task;
        }))
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        type="text" 
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Add task</button>
                </label>
            </form>
            <TaskList 
                tasks={taskList} 
                toggleCheckbox={toggleCheckbox} 
                handleUpdateTask={handleUpdateTask}
                handleDeleteTask={handleDeleteTask}
            />
        </>
    )
    
}


export default TaskForm;