import React, { createContext, useReducer, useContext, useEffect } from 'react';
import taskReducer from './TaskReducer';


export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  //componentDidMount
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    //componentWillUnmount
    return (() => {
      console.log(tasks);
      //localStorage.removeItem('tasks');
    })
    //componentDidUpdate
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTaskContext = () => {
  const context = useContext(TaskContext);
  
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskContextProvider');
  }
  return context;
};

export { TaskContextProvider, useTaskContext };