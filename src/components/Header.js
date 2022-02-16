import React from 'react'

const Header = () => {
  return (
    <div className='std-half-padding d-flex justify-content-between align-items-center'>
        <span className='lat-pri-bold-0'>Task Tracker</span>
		<button className='btn btn-success btn-rounded std-lr-half-padding'>Add</button>
    </div>
  )
}


export default Header