import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => ( 
    <header>
        <div className='header'>
        <nav>
                <Link to='/' className='header-link'> Home </Link>
                <Link to='/sensors' className='header-link'> Sensors </Link>
                <Link to='/users' className='header-link'> Users </Link>
        </nav> 
        </div>
    </header>
)

export default Header