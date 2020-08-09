import React, { useReducer } from 'react'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import Axios from 'axios'
import {
    SEARCH_USER, SET_LOADING, SET_USERINFO,
    GET_USERREPO, CLEAR_USER
} from '../types'

let github_clientid = ''
let github_clientsecret = ''

if (process.env.NODE_ENV !== 'production') {
    github_clientid = process.env.REACT_APP_GITHUB_CLIENTID
    github_clientsecret = process.env.REACT_APP_GITHUB_CLIENTSECRET
} else {
    github_clientid = process.env.GITHUB_CLIENTID
    github_clientsecret = process.env.GITHUB_CLIENTSECRET
}

const GithubState = props => {
    //Initialise the initial state
    const initialState = {
        user: [],
        loading: false,
        alert: null,
        userInfo: {},
        userRepo: []
    }

    //useReducer take an object as an argument and returns the current state amd dispatch function 
    const [state, dispatch] = useReducer(GithubReducer, initialState)

    //Search Users function 
    //set fetched user to an array of 'user'
    //User is the array of object of the details of the users for the given search 
    const searchUsers = async text => {

        setLoading();

        const res = await Axios.get('https://api.github.com/search/users?q=' + text
            + '&client_id=' +
            github_clientid + '&client_secret=' +
            github_clientsecret)

        //setState({ ...state, user: res.data.items, loading: false })

        dispatch({
            type: SEARCH_USER,
            payload: res.data.items
        })
    }

    //From the user's list,fetch the info a particular users.
    const fetchUserInfo = async userName => {
        setLoading();
        const res = await Axios.get('https://api.github.com/users/' + userName
            + '?client_id=' +
            github_clientid + '&client_secret=' +
            github_clientsecret)

        // setState({ ...state, loading: false })
        // setUserInfo(res.data)
        dispatch({
            type: SET_USERINFO,
            payload: res.data
        })
    }

    //Fetch individual user repo details
    const fetchUserRepo = async userName => {
        setLoading();

        const res = await Axios.get('https://api.github.com/users/' + userName
            + '/repos?per_page=5&sort=created:asc&client_id=' +
            github_clientid + '&client_secret=' +
            github_clientsecret)

        // setState({ ...state, loading: false })
        // setUserRepo(res.data)

        dispatch({
            type: GET_USERREPO,
            payload: res.data
        })
    }

    const setLoading = () => dispatch({ type: SET_LOADING })

    // const clearUsers = () => setState({ ...state, user: [], loading: false })
    const clearUsers = () => dispatch({ type: CLEAR_USER })


    return (
        <GithubContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                alert: state.alert,
                userInfo: state.userInfo,
                userRepo: state.userRepo,
                searchUsers,
                fetchUserInfo,
                fetchUserRepo,
                clearUsers,
            }}>
            {props.children}
        </GithubContext.Provider>
    )
}
export default GithubState
