import React from 'react'
import { useState } from 'react'

const TaskForm = ({ addTask }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = e => {
        e.preventDefault();
        if (text && day) {
            addTask({ text, day, reminder });
            setText('');
            setDay('');
            setReminder(false);
            return;
        }
        alert('Please complete all required fields');
    }

    return (
        <form className='std-half-padding' onSubmit={onSubmit}>
            <div className="mb-2">
                <span className="lat-blk-bold-2">Task Name</span>
                <div className="input-box">
                    <input type="text" className="form-control mt-1" value={text} onChange={e => setText(e.target.value)} />
                </div>
            </div>
            <div className="mb-2">
                <span className="lat-blk-bold-2">Date and Time</span>
                <div className="input-box">
                    <input type="text" className="form-control mt-1" value={day} onChange={e => setDay(e.target.value)} />
                </div>
            </div>
            <div className="mb-2 d-flex align-items-center ">
                <input type="checkbox" id='reminder' checked={reminder} value={reminder} onChange={e => setReminder(e.currentTarget.checked)}/>
                <label htmlFor='reminder' className="lat-blk-bold-2 ml-1" >Set Reminder</label>
            </div>
            <button type="submit" className="btn btn-block btn-rounded btn-dark">Save Task</button>
        </form>
    )
}

export default TaskForm