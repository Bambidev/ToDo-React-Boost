import { useState } from 'react';
import React from 'react'

const TaskCreator = ({createNewTask}) => {

  const [ newTaskName, setNewTaskName ] = useState('')
  const handleSubmit = (e) => {
    createNewTask(newTaskName)
    e.preventDefault();
    setNewTaskName('')
  }

  return (
    <form onSubmit={handleSubmit} className='py-2 row' >
        <div className="col-9">
        <input 
          placeholder='Enter a new Task' 
          type="text" value={newTaskName} 
          onChange={(e) => setNewTaskName(e.target.value)}
          className='form-control'
          />
        </div>
        <div className="col-3">
          <button className='btn btn-primary'>Save Task</button>
        </div>
    </form>
  )
}

export default TaskCreator

