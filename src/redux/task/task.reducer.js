import { TASK_ACTION_TYPES } from "./task.types";

/***
 * This is the most intricate part of the whole app.
 * We store to main objects - 'allTasks', and 'rootTaskIds'.
 * This is to normalize the data and make fetch task data fast.
 * Tasks are fetched by their ID in this object rather than found 
 * by searching through an array.
 * We can then also find 'subtasks' by looking up their IDs which are
 * stored in each task. It's a tree, essentially.
 * Also, it is important to note that a 'subtask' object is not just an id.
 * It also shows whether that task was created originally at that position.
 * This allows us to create tasks one place, but also store them as children of multiple nodes
 * and show the difference between those two scenarios.
 * We don't want to display the same thing if a task was CREATED under one task but only
 * LISTED after creation under a second node.
 * 
 */
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

  //to create unique IDs, we're using dates. In the future, we'd use the network.
  const uid = Date.now();
  
  switch( action.type ) {

    //to add an item to the root, add it to the list,
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
        //and also add a reference to our list of root items
        rootTaskIds: [ ...state.rootTaskIds, uid ]
      }

    /*
     * for new subitems, (those that were CREATED under another node),
     * add it to the list of all items,
     * and update its parent's list of children
     */
    case TASK_ACTION_TYPES.ADD_NEW_SUBITEM: 
      let { parentId, title } = action.payload;
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

      /**
       * TODO: Allow selecting duplicate items as children.
       * This would be done using a select element for UI, populated by existing items.
       */

    default: 
      return state;
  }
};

export default taskReducer;