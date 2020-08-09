import React, { useState, useContext } from 'react'
import GithubContext from '../context/github/githubContext'
import AlertContext from '../context/alert/alertContext'

const Search = () => {

    const alertContext = useContext(AlertContext)
    const { setAlert } = alertContext

    const context = useContext(GithubContext);

    const [text, setState] = useState('')

    const handleChange = (event) => {
        setState(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (text === '')
            setAlert('Serach field is empty', 'light')
        else {
            context.searchUsers(text)
            setState('')
        }
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='text'
                    placeholder='Search User....'
                    value={text}
                    onChange={handleChange} />
                <input type='submit' className='btb btn-dark btn-block' value='Search' />
            </form>
            {context.user.length > 0 &&
                <button className='btn btn-light btn-block' onClick={context.clearUsers}>Clear</button>
            }

        </div>
    )
}

export default Search
