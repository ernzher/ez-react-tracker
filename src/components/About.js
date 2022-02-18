import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="std-half-margin lh-2">
            <span className="lat-pri-bold-0">Version 1.0.0</span> <br />
            <Link to="/" className='lat-snd-bold-2'>Go Back</Link>
        </div>
    )
}

export default About