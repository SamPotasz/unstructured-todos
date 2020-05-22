import React from 'react';
import { useSelector } from 'react-redux';

import { getSubtasksOfTask } from '../../redux/task/task.selectors';
import { addNewSubitem } from '../../redux/task/task.actions';

import './taskItem.styles.scss';
import NewTaskInput from '../NewTaskInput/newTaskInput.component';

const TaskItem = ({task, created}) => {

  const subtasks = useSelector( getSubtasksOfTask(task) )

  return (
    <div>
      <span className={created ? 'created' : ''}>{task.title}</span>
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