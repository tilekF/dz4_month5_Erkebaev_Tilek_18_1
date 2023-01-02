import {types} from "../type";


const initialState = {
    users: [],
    user: []
}

export default function userReducer (state = initialState, action) {
    switch (action.type) {
        case types.GET_USER:
            return {...state, users: action.payload}
        case types.EXODUS_USER:
            return {...state, user: action.payload}
        default: return state
    }
}