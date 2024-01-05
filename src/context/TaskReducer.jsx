const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [...state, { 
          id: crypto.randomUUID() , 
          title: action.task,
          completed: false, 
          isUpdating: false
        }];
      case 'UPDATE_CHECKBOX_TASK':
        return state.map(task => task.id === action.id ? {...task, completed: !task.completed}: task )
      case 'UPDATE_BUTTON_TASK':
        return state.map(task => task.id === action.id ? {...task, isUpdating: !task.isUpdating}: task )
      case 'UPDATE_TASK_NAME':
        return state.map(task => task.id === action.id ? {...task, title: action.updatedValue}: task )
      case 'DELETE_TASK':
        return state.filter(task => task.id !== action.id);
      default:
        return state;
    }
  };
  
  export default taskReducer;