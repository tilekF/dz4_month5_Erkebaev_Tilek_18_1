import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchUserAction, fetchExodusUserAction} from "../../reducer/action/action";
import UserList from "../../Components/User/UserList";

class UserPageClass extends Component {

    getUsers = () => {
        this.props.fetchUserAction()
    }

    render() {
        return (
            <div>
                <ul>
                    <li>name:{this.props.user.name}</li>
                    <li>username:{this.props.user.username}</li>
                    <li>phone:{this.props.user.phone}</li>
                    <li>email:{this.props.user.email}</li>
                </ul>
                <button onClick={this.getUsers}>get user</button >
                {this.props.users.map(user => <UserList key={user.id} userInfo={user}/>)}
            </div>
        );
    }
}

const mapStateProps = state => {
    return {
        users: state.userReducer.users,
        user: state.userReducer.user
    }
}

const mapDispatchProps = {
    fetchUserAction, fetchExodusUserAction
}

export default connect(mapStateProps,mapDispatchProps) (UserPageClass);