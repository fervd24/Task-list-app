import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import useTaskActions from '../hooks/useTaskActions';

export default const TaskList = () => {
  const {tasks} = useTaskContext();
  const taskActions = useTaskActions();
  const [currentUpdateValue, setCurrentUpdateValue] = useState('');

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
            <input type='checkbox' checked={task.completed} onChange={() => taskActions.handleUpdateCheckboxTask(task.id)}/>
            <span style={task.completed ? {textDecoration: 'line-through'}: null}>{task.title}</span>
            {
              task.isUpdating 
                ? <div>
                    <input type='text' onChange={e => setCurrentUpdateValue(e.target.value)}/>
                    <button onClick={() => taskActions.handleUpdateTaskName(task.id, currentUpdateValue)}>Add new name</button>
                  </div>:null
            }
            <button onClick={() => taskActions.handleUpdateButtonTask(task.id)}>{
              task.isUpdating 
                ? <span>Close</span>
                : <span>Update</span> }
            </button>
            <button onClick={() => taskActions.handleDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
