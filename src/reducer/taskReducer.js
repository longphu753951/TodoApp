

// =========================================================
// =========================================================
// TYPES
export const taskFetchAction = ()=>{
    return{
        type: 'FETCH_TASK',
    }
}

export const addTaskAction = (newTask)=>{
    return{
        type: 'ADD_TASK',
        newTask,
    }
}

export const toggleCompleteAction = (taskNumber) => {
    return {
        type: 'TOGGLE_COMPLETED',
        taskNumber
    }
}

export const editTaskAction = (taskNumber, taskContent) => {
    return {
        type: 'EDIT_TASK',
        taskNumber,
        taskContent
    }
}

export const removeTaskAction = (taskNumber)=>{
    return{
        type: 'REMOVE_TASK',
        taskNumber,
    }
}

// =========================================================
// =========================================================
// REDUCER
const INITIAL_STATE = {
    list: [
        {
            name: 'Complete A task',
            date: '22/12/2021',
            time: '12:32 AM',
            completed: true
        },
        {
            name: 'Complete B task',
            date: '23/12/2021',
            time: '12:32 AM',
            completed: false
        },
        {
            name: 'Complete C task',
            date: '24/12/2021',
            time: '12:32 AM',
            completed: false
        },
        {
            name: 'Complete D task',
            date: '25/12/2021',
            time: '12:32 AM',
            completed: false
        },
    ]
  };
  
  export default (state = INITIAL_STATE, action) => {
      switch(action.type) {
            case 'FETCH_TASK':
                return state;
            case 'ADD_TASK':
                return { 
                    ...state,
                    list:[...state.list, action.newTask]
                };
            case 'REMOVE_TASK':
                return  { 
                    ...state,
                    list:[...state.list.filter((item,index) => index !== action.taskNumber)]
                };
            case 'TOGGLE_COMPLETED':
                return {
                    ...state,
                    list: state.list.map((item, index) => index === action.taskNumber ? {...item, completed: !item.completed}
                    : item)
                }

            case 'EDIT_TASK':
                return {
                    ...state,
                    list: state.list.map((item, index) => 
                        index === action.taskNumber ? {
                            ...item, 
                            name: action.taskContent.name, 
                            date: action.taskContent.date, 
                            time: action.taskContent.time,
                        }: item)
                }
            default:    
                return state;
      }
  }
  
