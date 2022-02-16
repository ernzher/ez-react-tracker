import React from 'react'

const TaskForm = () => {
    return (
        <div className='std-half-padding'>
            <div className="mb-2">
                <span className="lat-blk-bold-2">Task Name</span>
                <div className="input-box">
                    <input type="text" className="form-control mt-1" />
                </div>
            </div>
            <div className="mb-2">
                <span className="lat-blk-bold-2">Date and Time</span>
                <div className="input-box">
                    <input type="text" className="form-control mt-1" />
                </div>
            </div>
            <div className="mb-2 d-flex align-items-center ">
                <input type="checkbox" id='reminder'/>
                <label htmlFor='reminder' className="lat-blk-bold-2 ml-1" >Set Reminder</label>
            </div>
            <button className="btn btn-block btn-rounded btn-dark">Save Task</button>
        </div>
    )
}

export default TaskForm