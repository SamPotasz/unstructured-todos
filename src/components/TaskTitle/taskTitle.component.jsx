import React from 'react';
import { Link } from 'react-router-dom';

const TaskTitle = ({created, title, id}) => {
  
  return(
    <div>
    { 
      created ?
      <Link className={created} to={`/tasks/${id}`} >
        {title}
        </Link>
      :
      <span>{title}</span>
    }
    </div>
  )
}

export default TaskTitle;

