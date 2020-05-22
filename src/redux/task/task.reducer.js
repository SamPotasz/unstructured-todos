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

const taskReducer = ( state = INITIAL_TASKS ) => {
  return state;
};

export default taskReducer;