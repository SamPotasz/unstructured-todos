import React from 'react';
import { useSelector } from 'react-redux';

import {selectRootTaskData} from '../../redux/task/task.selectors';

import TaskItem from '../../components/TaskItem/taskItem.component';
import NewTaskInput from '../../components/NewTaskInput/newTaskInput.component';

const Homepage = () => {

  const rootTasks = useSelector(selectRootTaskData);

  return(
    <div>
    <h1>All Tasks</h1>
      {
        rootTasks.map( 
          task => <TaskItem key={task.title} created={true} task={task} /> )
      }
      <NewTaskInput />
    </div>
  )
}

export default Homepage;