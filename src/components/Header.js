import React from 'react'
import PropTypes from 'prop-types'
const Header = ({ toggleForm, showForm }) => {
	return (
		<div className='std-half-padding d-flex justify-content-between align-items-center'>
			<span className='lat-pri-bold-0'>Task Tracker</span>
			<button 
				className={`btn btn-rounded std-lr-half-padding ${showForm ? 'btn-alert' : 'btn-success'}`} 
				onClick={toggleForm}>{ showForm ? 'Close' : 'Add'}
			</button>
		</div>
	)
	}

	Header.propTypes = {
		toggleForm: PropTypes.func.isRequired,
		showForm: PropTypes.bool.isRequired
	}

export default Header