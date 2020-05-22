import {TASK_ACTION_TYPES} from './task.types';

export const addNewRootItem = title => ({
  type: TASK_ACTION_TYPES.ADD_ROOT_ITEM,
  payload: title 
})

//subitemObj contains a title and a ref to the parent
export const addNewSubitem = subitemObj => ({
  type: TASK_ACTION_TYPES.ADD_NEW_SUBITEM,
  payload: subitemObj
})