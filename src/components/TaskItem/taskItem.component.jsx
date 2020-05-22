import React from 'react';
import { useSelector } from 'react-redux';

import { getSubtasksOfTask } from '../../redux/task/task.selectors';

import './taskItem.styles.scss';
import NewTaskInput from '../NewTaskInput/newTaskInput.component';
import TaskTitle from '../TaskTitle/taskTitle.component';

const TaskItem = ({task, created}) => {

  const subtasks = useSelector( getSubtasksOfTask(task) )

  return (
    <div>
      <TaskTitle created={created} title={task.title} id={task.id} />
      <ul>
        {
          subtasks.map( subtask => {
            const task = subtask.task;
            const originalSub = created && subtask.created; 

            return(
              <li key={task.title}>
                <TaskItem 
                  created={originalSub} task={task} />
              </li>
            )
          })
        }
        { created && <li><NewTaskInput parentId={ task.id } /></li> }
      </ul>
      
    </div>
  )
}

export default TaskItem;