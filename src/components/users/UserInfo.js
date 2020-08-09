import React, { Fragment, useEffect, useContext } from 'react'
import { Spinner } from '../layouts/Spinner'
import { Link } from 'react-router-dom'
import UserRepo from './UserRepo'
import GithubContext from '../context/github/githubContext'


const UserInfo = ({ match }) => {

    const { loading, userInfo, fetchUserInfo, fetchUserRepo, userRepo } = useContext(GithubContext)

    useEffect(() => {
        fetchUserInfo(match.params.login)
        fetchUserRepo(match.params.login)
        //eslint-disable-next-line
    }, [])

    const {
        name, avatar_url, hireable, location, bio,
        html_url, blog, login, company, followers,
        following, public_gists, public_repos
    } = userInfo

    if (loading) return <Spinner />
    else {
        return (
            <Fragment>
                <Link to="/" className='btn btn-light'>Back to Search</Link>
                    Hireable : {' '}
                {hireable ?
                    <Fragment><i className='fas fa-check text-success' /></Fragment> :
                    <Fragment><i className='fas fa-times-circle text-danger' /></Fragment>
                }
                <div className='card container grid-2'>
                    <div className='all-center'>
                        <img src={avatar_url} alt='Profile' className='round-img' style={{ width: '150px' }} />
                        <h3>{name}</h3>
                        {location && <p>Location:{location}</p>}
                    </div>
                    <div>
                        {bio &&
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>}
                        <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                        <ul>
                            <li>{login && <Fragment>Username: {login}</Fragment>}</li>
                            <li>{blog && <Fragment>Website: {blog}</Fragment>}</li>
                            <li>{company && <Fragment>Company: {company}</Fragment>}</li>
                        </ul>
                    </div>
                    <div></div>
                </div>
                <div className='card text-center'>
                    <div className='badge badge-primary'>Followers: {followers}</div>
                    <div className='badge badge-success'>Following: {following}</div>
                    <div className='badge badge-light'>Public Repos: {public_repos}</div>
                    <div className='badge badge-dark'>Public Gists: {public_gists}</div>
                </div>
                <UserRepo repoList={userRepo} />
            </Fragment>
        )
    }
}

export default UserInfo

