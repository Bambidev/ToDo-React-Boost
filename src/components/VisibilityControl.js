import React from 'react'

const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks }) => {
    
  const handleDelete = () => {
    if (window.confirm('Are you sure want to delete it?')) {
        cleanTasks()
    }
  }

  return (
    <div className='my-4 d-flex justify-content-between align-items-center gap-2 bg-secondary p-2'>
        <div className="form-check form-switch">
          <input 
            className='form-check-input'
            id="show"
            type="checkbox" 
            checked={isChecked}
            onChange={(e) => setShowCompleted(e.target.checked)} 
          />   
        </div>

        <label for="show">Show Tasks Done</label>

        <button className='btn btn-danger btn-sm mx-1' onClick={handleDelete}>
            Clear 
        </button>
    </div>

)
}

export default VisibilityControl