import React from 'react'
import Task from './Task'
import PropTypes from 'prop-types'

const TaskList = ({ tasks, deleteTask, toggleReminder }) => {
    return (
        <div className='std-half-padding'>
            {
                tasks.map(task => (
                    <Task key={task.id} task={task} deleteTask={deleteTask} toggleReminder={toggleReminder} />
                ))
            }
        </div>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleReminder: PropTypes.func.isRequired
}

export default TaskList