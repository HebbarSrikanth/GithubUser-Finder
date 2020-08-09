import React, { useContext } from 'react'
import UserItem from './UserItem'
import { Spinner } from '../layouts/Spinner'
import GithubProvider from '../context/github/githubContext'


const Users = () => {

    const githubContext = useContext(GithubProvider)

    const { loading, user } = githubContext

    if (loading)
        return <Spinner />
    else {
        return (
            <div style={userStyle}>
                {user.map((val, id) => (
                    <UserItem
                        key={id}
                        users={val}
                    />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem',
}


export default Users
