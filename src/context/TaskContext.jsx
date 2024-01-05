import React, { createContext, useReducer, useContext } from 'react';
import taskReducer from './TaskReducer';


export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  //TODO: implement getTasks from localStorage here
  const [tasks, dispatch] = useReducer(taskReducer, JSON.parse(localStorage.getItem('tasks')));

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