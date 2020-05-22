import { TASK_ACTION_TYPES } from "./task.types";

const INITIAL_TASKS = {
  allTasks: {
    1: {
      id: 1,
      title: 'buy groceries',
      isComplete: false,
      parent: 0,
      subtasks: [
        {id: 2, created: true }
      ]
    },
    2: {
      id: 2,
      title: 'clean floor',
      isComplete: false,
      parent: 1,
      subtasks: [],
    },
    3: {
      id: 3,
      title: 'eat bananas',
      isComplete: false,
      parent: 0,
      subtasks: [
        {id: 1, created: false},
        {id: 2, created: false},
      ]
    }
  },
  rootTaskIds: [1, 3]
}

const taskReducer = ( state = INITIAL_TASKS, action ) => {
  const uid = Date.now();
  
  switch( action.type ) {

    case TASK_ACTION_TYPES.ADD_ROOT_ITEM:
      return {
        ...state,
        allTasks: {
          ...state.allTasks,
          [uid]: {
            id: uid,
            title: action.payload,
            isComplete: false,
            parent: 0,
            subtasks: []
          }
        },
        rootTaskIds: [ ...state.rootTaskIds, uid ]
      }
    case TASK_ACTION_TYPES.ADD_NEW_SUBITEM: 
      let { parentId, title } = action.payload;
      console.log(state.allTasks[parentId].subtasks)
      return {
        ...state,
        allTasks: {
          ...state.allTasks,
          [uid]: {
            id: uid,
            title: title,
            isComplete: false,
            parent: parentId,
            subtasks: [],
          },
          [parentId]: {
            ...state.allTasks[parentId],
            subtasks: [...state.allTasks[parentId].subtasks, {id: uid, created: true}]
          }
        }
      }
    default: 
      return state;
  }
};

export default taskReducer;