import {types} from "../type";

export function getUserAction (users) {
    return {
        type: types.GET_USER,
        payload: users
    }
}

export function getExodusUserAction (user) {
    return {
        type: types.EXODUS_USER,
        payload: user
    }
}

export function fetchUserAction () {
    return async function (dispatch) {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()

        dispatch(getUserAction(data))
    }
}

export function fetchUserActions (id) {
    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
    }
}

export function fetchExodusUserAction (id) {
    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        dispatch(getExodusUserAction(data))
    }
}