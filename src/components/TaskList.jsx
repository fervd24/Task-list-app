import { useEffect } from "react"

export default function TaskList({tasks, toggleCheckbox}) {
    const handleUpdateTask = (e) => {

    }
    
    const handleDeleteTask = (id) => {
        console.log(id)
    }

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
                    <span style={task.completed ? {textDecoration: 'line-through'} : null}>{task.task}</span>
                    <button onClick={handleUpdateTask}>Update</button>
                    <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </li>): <div>Loading...</div>}
            </ul>
        </div>
    )
}