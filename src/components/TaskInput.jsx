import { useState } from "react";
import TaskList from "./TaskList";


function TaskInput() {
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
                    completed: false
                }
            ]);

        setInputValue('');
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
            <TaskList tasks={taskList} toggleCheckbox={toggleCheckbox}/>
        </>
    )
    
}


export default TaskInput;