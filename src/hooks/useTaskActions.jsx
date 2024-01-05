import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const useTaskActions = () => {
  const { dispatch } = useContext(TaskContext);

  const handleAddTask = (newTask) => {
    dispatch({ type: 'ADD_TASK', task: newTask });
  };

  const handleUpdateCheckboxTask = (id) => {
    dispatch({ type: 'UPDATE_CHECKBOX_TASK', id });
  };

  const handleUpdateButtonTask = (id) => {
    dispatch({ type: 'UPDATE_BUTTON_TASK', id });
  };
  const handleUpdateTaskName = (id, updatedValue) => {
    dispatch({ type: 'UPDATE_TASK_NAME', id , updatedValue});
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', id });
  };

  return { handleAddTask, handleDeleteTask, handleUpdateCheckboxTask, handleUpdateButtonTask, handleUpdateTaskName };
};

export default useTaskActions;