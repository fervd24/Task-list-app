import React, { createContext, useReducer, useContext } from 'react';
import taskReducer from './TaskReducer';


export const TaskContext = createContext();

const initialState = [];

const TaskContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

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