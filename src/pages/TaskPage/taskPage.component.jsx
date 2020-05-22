import React from 'react';
import { useSelector } from 'react-redux';

import { getSingleTask } from '../../redux/task/task.selectors';
import TaskItem from '../../components/TaskItem/taskItem.component';

const TaskPage = ({ match }) => {
  console.log(match);
  const task = useSelector( getSingleTask( match.params.id ));

  return (
    <div>
      <h1>{task.title}</h1>
      {
        <TaskItem task={task} created={true} />
      }
    </div>
  )
}

export default TaskPage;