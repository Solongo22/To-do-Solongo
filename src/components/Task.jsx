import React from 'react'
import {FaTimes} from 'react-icons/fa'
import '../index.css'

const Task = ({task, onDelete}) => {
  return (
<div className="task">
<h3 key={task.id}>
        {task.text}
        <FaTimes style={{color:'red'}} onClick=
        {()=>onDelete(task.id)} />
        
    </h3>
    
</div>
  )
}

export default Task