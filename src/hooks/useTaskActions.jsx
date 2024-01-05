import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const useTaskActions = () => {
  const { dispatch } = useContext(TaskContext);

  const handleAddTask = (newTask) => {
    dispatch({ type: 'ADD_TASK', task: newTask });
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', id });
  };

  return { handleAddTask, handleDeleteTask, };
};

export default useTaskActions;