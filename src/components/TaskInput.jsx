import { useState } from "react";


function TaskInput() {
    const [inputValue, setInputValue] = useState("");
    const [taskList, setTaskList] = useState([])

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setTaskList([
                ...taskList, {
                id: crypto.randomUUID(),
                task: inputValue}
            ]);

        setInputValue('');
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
            <ul>
                {taskList.map(e => <li key={e.id}>{e.task}</li>)}
            </ul>
        </>
    )
    
}


export default TaskInput;