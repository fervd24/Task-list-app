const taskReducer = (state, action) => {
    
    switch (action.type) {
      case 'ADD_TASK':
        const newState = [...state, { 
          id: crypto.randomUUID() , 
          title: action.task,
          completed: false, 
          isUpdating: false
        }]

        localStorage.setItem('tasks', JSON.stringify(newState));
        return newState;
      case 'UPDATE_CHECKBOX_TASK':
        const newCheckboxState = state.map(task => task.id === action.id ? {...task, completed: !task.completed}: task )
        localStorage.setItem('tasks', JSON.stringify(newCheckboxState));
        return newCheckboxState
      case 'UPDATE_BUTTON_TASK':
        const newIsUpdatingState = state.map(task => task.id === action.id ? {...task, isUpdating: !task.isUpdating}: task )
        localStorage.setItem('tasks', JSON.stringify(newIsUpdatingState));
        return newIsUpdatingState
      case 'UPDATE_TASK_NAME':
        const updatedState = state.map(task => task.id === action.id ? {...task, title: action.updatedValue}: task )
        localStorage.setItem('tasks', JSON.stringify(updatedState));
        return updatedState
        case 'DELETE_TASK':
          const newDeletedState = state.filter(task => task.id !== action.id);
          localStorage.setItem('tasks', JSON.stringify(newDeletedState));
          return newDeletedState
      default:
        return state;
    }
  };
  
  export default taskReducer;