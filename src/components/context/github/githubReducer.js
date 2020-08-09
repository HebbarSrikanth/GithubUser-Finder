import {
    SEARCH_USER, SET_LOADING, SET_USERINFO,
    GET_USERREPO, CLEAR_USER
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case SEARCH_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }

        case SET_USERINFO:
            return {
                ...state,
                userInfo: action.payload,
                loading: false
            }

        case GET_USERREPO:
            return {
                ...state,
                userRepo: action.payload,
                loading: false
            }

        case CLEAR_USER:
            return {
                ...state,
                user: [],
                loading: false
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        default: return state
    }
}