import React from "react";
import UserReducer, {addFriend, delFriend, setUsers, pageSize, totalUserCount, currentPage} from '../../Redux/users-reducer'
import Users from './Users'
import {connect} from 'react-redux';

const mapStateToUsers =(state)=>{
    return {
        users: state.UserReducer,
        pageSize: state.pageSize,
        totalUserCount: state.totalUserCount,
        currentPage: state.currentPage,
        isFetching: false
    }
}

const UserContainer = connect(mapStateToUsers, {
    addFriend,
    delFriend,
    setUsers,
    pageSize,
    totalUserCount,
    currentPage
})(Users);
export default UserContainer;