import React from 'react';
import Header from './components/Header' 
import TaskList from './components/TaskList' 
import TaskForm from './components/TaskForm' 
import Footer from './components/Footer' 
import About from './components/About' 
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {

	const [tasks, setTasks] = useState([])
	const [showForm, setShowForm] = useState(false)

	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks()
			setTasks(tasksFromServer)
		}
		getTasks();
	}, [])

	//fetch tasks
	const fetchTasks = async () => {
		const res = await fetch('http://localhost:5000/tasks')
		const data = await res.json()
		return data
	}
	const fetchTask = async id => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`)
		const data = await res.json()
		return data
	}

	const deleteTask = async id => {
		await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'DELETE'
		})
		setTasks(tasks.filter(task => task.id !== id))
	}

	const addTask = async task => {
		const res = await fetch(`http://localhost:5000/tasks`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(task)
		})
		const data = await res.json()
		setTasks([...tasks, data])
	}

	const toggleReminder = async id => {
		const taskToToggle = await fetchTask(id);
		const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}
		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(updatedTask)
		})
		const data = await res.json()
		setTasks(tasks.map(task => 
			task.id === id ? {...task, reminder: data.reminder} : task 
		))
	}

	const toggleForm = () => {
		setShowForm(!showForm)
	}

	return (
		<Router>
			<div className="container">
				<div className="std-tb-margin std-box-shadow std-half-border-rad">
					<Header toggleForm={toggleForm} showForm={showForm} />
					<Routes>
						<Route path='/' element={
							<>
								{ showForm && <TaskForm addTask={addTask} /> }
								<TaskList tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} />
							</>
						} />
						<Route path="/about" element={<About />}/>
					</Routes>
						
					<Footer />
				</div>
			</div>
		</Router>
	);
}


export default App;
