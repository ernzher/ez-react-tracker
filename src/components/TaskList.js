import React from 'react'
import Task from './Task'
import PropTypes from 'prop-types'
const TaskList = ({ tasks }) => {
    
    return (
        <div className='std-half-padding'>
            {
                tasks.map(task => (
                    <Task key={task.id} task={task} />
                ))
            }
        </div>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default TaskList