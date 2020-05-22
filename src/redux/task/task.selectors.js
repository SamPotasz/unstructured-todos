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

export const selectRootTaskData = createSelector(
  [selectRootTaskIds, selectTaskData],
  (rootTaskIds, taskData) => 
    rootTaskIds.map( taskId => taskData[taskId] )
)

export const getSubtasksOfTask = task => createSelector(
  [selectTaskData],
  (allTasks) => {
    console.log({task});
    return task.subtasks ? task.subtasks.map( subtaskId => allTasks[ subtaskId ]) : [];
  }
)