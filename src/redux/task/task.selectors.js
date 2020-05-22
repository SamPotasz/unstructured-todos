import { createSelector } from 'reselect';

export const selectTask = state => state.task;

export const selectRootTaskIds = createSelector(
  [selectTask],
  task => task.rootTaskIds
)

export const selectTaskData = createSelector(
  [selectTask],
  task => task.allTasks
)

//get all of the tasks that don't have any parents
export const selectRootTaskData = createSelector(
  [selectRootTaskIds, selectTaskData],
  (rootTaskIds, taskData) => 
    rootTaskIds.map( taskId => taskData[taskId] )
)

//get all of the subtasks for a given task
export const getSubtasksOfTask = task => createSelector(
  [selectTaskData],
  (allTasks) => 
    task.subtasks ? task.subtasks.map( subtaskObj => 
      ({ created: subtaskObj.created,
        task: allTasks[ subtaskObj.id ]}) ) : []
)

//get the data for a single task given its ID
export const getSingleTask = taskId => createSelector(
  [selectTaskData],
  allTasks => allTasks[taskId]
)