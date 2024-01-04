import { useEffect, useState } from "react"

export default function TaskList({tasks, toggleCheckbox, handleUpdateTask, handleDeleteTask}) {
    const [updateInputValue, setUpdateInputValue] = useState("");

    //Mount the function after render the jsx code
    useEffect(() => {
        //Clean up the function - Unmount
        return console.log(tasks);

      //Depedencies  
    },[tasks])

    return(
        <div>
            <h2>Tasks</h2>
            <ul>
                {tasks ? tasks.map(task => <li key={task.id}>
                    <input type="checkbox" checked={task.completed} onChange={() => toggleCheckbox(task.id)}/>
                    <span style={task.completed ? {textDecoration: 'line-through'}: null}>{task.task}</span>
                    {task.isUpdating 
                    ? <div>
                        <input type="text" onChange={e => setUpdateInputValue(e.target.value)}/>
                        <button onClick={() => handleUpdateTask(task.id, 'task', updateInputValue)}>Add new task name</button>
                    </div>: null}
                    {task.isUpdating 
                        ? <button onClick={() => handleUpdateTask(task.id, 'isUpdating', !task.isUpdating)}>Cancel</button>
                        : <button onClick={() => handleUpdateTask(task.id, 'isUpdating', !task.isUpdating)}>Update</button>}
                    
                    <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </li>): <div>Loading...</div>}
            </ul>
        </div>
    )
}