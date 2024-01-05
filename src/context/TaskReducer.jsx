const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [...state, { 
          id: crypto.randomUUID() , 
          title: action.task,
          completed: false, 
          isUpdating: false
        }];
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.id);
        default:
            return state;
    }
  };
  
  export default taskReducer;