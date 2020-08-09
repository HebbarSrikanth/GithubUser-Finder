import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className='navbar bg-primary'>
            <h3>
                <i className={props.icon} /> {props.title}
            </h3>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'GitHub-Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}


export default Navbar
