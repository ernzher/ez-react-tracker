import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const Task = ({ task, deleteTask, toggleReminder }) => {
    return (
        <div 
            className={`std-lr-padding std-tb-half-padding std-box-shadow std-half-border-rad bg-light mb-2 ${task.reminder && 'reminder'}`}
            onDoubleClick={() => toggleReminder(task.id)}
        >
            <div className='d-flex justify-content-between align-items-center'>
                <div className="d-flex flex-column">
                    <span className="lat-pri-bold-1">{ task.text }</span>
                    <span className="lat-pri-bold-2 pt-1">{ task.day }</span>
                </div>
                <div className="d-flex justify-content-center align-items-center cursor-pointer" onClick={ () => deleteTask(task.id) }>
                    <FontAwesomeIcon icon={faXmark} className="lat-red-1" />
                </div>
            </div>
        </div>   
    )
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleReminder: PropTypes.func.isRequired
}

export default Task