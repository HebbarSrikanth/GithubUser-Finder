import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = ({ users: { login, avatar_url, html_url } }) => {
    return (
        <div className='card text-center'>
            <img src={avatar_url} className='round-img' alt='Person' style={{ width: '70px' }} />
            <h3>{login}</h3>
            <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>More</Link>
        </div>
    )
}

UserItem.propType = {
    users: PropTypes.object.isRequired
}

export default UserItem
