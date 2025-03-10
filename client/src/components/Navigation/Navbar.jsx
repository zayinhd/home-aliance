import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    // if user is loggein , show a different navbar otherwise show the public page nav

    return (
        <nav>
            <div>Logo</div>
            <div><input type='search' /></div>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/jobs'><li>Jobs</li></Link>
                <Link to='/'><li>About</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar