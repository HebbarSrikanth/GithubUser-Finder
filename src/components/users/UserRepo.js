import React from 'react'
import PropTypes from 'prop-types'


const UserRepo = ({ repoList }) => {
    return (
        repoList.map((val, id) => {
            return (
                <div className='card' key={id}>
                    <a href={val.html_url}>{val.name}</a>
                </div>)
        })
    )
}

UserRepo.propType = {
    repoList: PropTypes.array.isRequired
}

export default UserRepo
