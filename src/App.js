import React from 'react';
import Header from './components/Header' 
import TaskList from './components/TaskList' 
import TaskForm from './components/TaskForm' 
import { useState } from 'react';

const App = () => {
	const [tasks, useTasks] = useState([
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

	return (
		<div className="container">
			<div className="std-tb-margin std-box-shadow std-half-border-rad">
				<Header />
				<TaskForm />
				<TaskList tasks={tasks} />
			</div>
		</div>
	);
}


export default App;
