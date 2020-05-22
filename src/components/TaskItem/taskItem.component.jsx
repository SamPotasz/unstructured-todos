import React from 'react';
import { useSelector } from 'react-redux';

import { getSubtasksOfTask } from '../../redux/task/task.selectors';

const TaskItem = ({task}) => {

  const subtasks = useSelector( getSubtasksOfTask(task) )

  return (
    <div>
      <h3>{task.title}</h3>
      <ul>
        {
          subtasks.map( 
            subtask => <li key={subtask.title}>{subtask.title}</li>)
        }
      </ul>
    </div>
  )
}

export default TaskItem;