import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import useTaskActions from '../hooks/useTaskActions';
import "./TaskList.css"

const TaskList = () => {
  const {tasks} = useTaskContext();
  const taskActions = useTaskActions();
  const [currentUpdateValue, setCurrentUpdateValue] = useState('');

  return (
    <ul className='task-list'>
      <h1>Context list</h1>
      {tasks.map(task => (
        <li key={task.id} className='list-item'>
            <div className='header-item'>
                <input type='checkbox' checked={task.completed} onChange={() => taskActions.handleUpdateCheckboxTask(task.id)} className='checkbox-item'/>
                <span style={task.completed ? {textDecoration: 'line-through'}: null}>{task.title}</span>
                {
                task.isUpdating 
                    ? <div>
                        <input type='text' onChange={e => setCurrentUpdateValue(e.target.value)} className='input-update'/>
                        <button onClick={() => taskActions.handleUpdateTaskName(task.id, currentUpdateValue)} className='confirm-update-btn' >Confirm</button>
                    </div>:null
                }

            </div>
            <div>
                {
                task.isUpdating 
                    ? <button onClick={() => taskActions.handleUpdateButtonTask(task.id)} className='close-btn'>Close</button>
                    : <button onClick={() => taskActions.handleUpdateButtonTask(task.id)} className='update-btn'>Update</button>
                    }
                <button onClick={() => taskActions.handleDeleteTask(task.id)} className='del-btn'>Delete</button>

            </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;