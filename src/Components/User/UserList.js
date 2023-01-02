import React from "react";
import {useDispatch} from "react-redux";
import {fetchExodusUserAction, fetchUserActions} from "../../reducer/action/action";

function UserList({userInfo}) {
    const dispatch = useDispatch()
    const rosteRemployees = (event) => {
        dispatch(fetchUserActions(event.target.value))
        dispatch(fetchExodusUserAction(event.target.value))
    }
    return (
        <ul>
            <li>{userInfo.name}</li>
            <li>{userInfo.id}</li>
            <li><button onClick={rosteRemployees} value={userInfo.id}>show info</button></li>
        </ul>
    );
}

export default UserList;