import React from "react";
import UserReducer, {addFriend, delFriend} from '../../Redux/users-reducer'
import Users from './Users'
import {connect} from 'react-redux';

const mapStateToUsers =(state)=>{
    return {
        users: state.UserReducer
    }
}
const mapDispatchToUsers =(dispatch)=>{
    return{
        addFriend:(userId)=>{
            dispatch(addFriend(userId));
        },
        delFriend:(userId)=>{
            dispatch(delFriend(userId));
        }
    }
}

const UserContainer = connect(mapStateToUsers, mapDispatchToUsers)(Users);
export default UserContainer;