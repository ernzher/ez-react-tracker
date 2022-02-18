import React from 'react';
import Header from './components/Header' 
import TaskList from './components/TaskList' 
import TaskForm from './components/TaskForm' 
import { useState } from 'react';

const App = () => {

	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Doctors Appointment',
			day: 'Feb 5th at 2:30pm',
			reminder: true
		},
		{
			id: 2,
			text: 'Meeting at School',
			day: 'Feb 6th at 2:30pm',
			reminder: true
		},
		{
			id: 3,
			text: 'Food Shopping',
			day: 'Feb 5th at 1:30pm',
			reminder: false
		}
	])
	const [showForm, setShowForm] = useState(false)

	const deleteTask = (id) => {
		setTasks(tasks.filter(task => task.id !== id))
	}
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1
		const newTask = {id, ...task}
		setTasks([...tasks, newTask])
	}
	const toggleReminder = (id) => {
		setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task ))
	}
	const toggleForm = () => {
		setShowForm(!showForm)
	}
	return (
		<div className="container">
			<div className="std-tb-margin std-box-shadow std-half-border-rad">
				<Header toggleForm={toggleForm} showForm={showForm} />
				{ showForm && <TaskForm addTask={addTask} /> }
				<TaskList tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} />
			</div>
		</div>
	);
}


export default App;
