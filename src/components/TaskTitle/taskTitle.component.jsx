import React from 'react';
import { Link } from 'react-router-dom';

import './taskTitle.styles.scss';

/**
 * Displaying the Task information! 
 * TODO: allow marking a task as complete.
 * 
 * Since items can show up multiple places, we want to keep track of
 * where / when they were *originally* created. We do so with the 
 * @created param. If true, we bold the title.
 */
const TaskTitle = ({created, title, id}) => {
  
  return(
      <Link 
        className={created ? 'title-link created' : 'title-link' } 
        to={`/tasks/${id}`} >
        {title}
        </Link>
  )
}

export default TaskTitle;

