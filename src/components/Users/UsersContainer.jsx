import React from "react";
import {addFriend, delFriend, setUsers, pageSize, totalUserCount, currentPage} from '../../Redux/users-reducer'
import {connect} from 'react-redux';
import * as axios from "axios";
import Users from "./Users";
import {userAPI} from "../../api/api";

class UserContainer extends React.Component{

    componentDidMount() {
        userAPI.getUsers(this.props.users.currentPage, this.props.users.pageSize).then(response => {
            this.props.setUsers(response.data.items)
            this.props.totalUserCount(response.data.totalCount)
        })
    }

    setPage=(page)=>{
        this.props.currentPage(page)
        userAPI.setPage(page, this.props.users.pageSize).then(response => {
            this.props.setUsers(response.data.items)
            this.props.totalUserCount(response.data.totalCount)
        })
    }

    render() {
        return <Users
            setPage={this.setPage}
            users={this.props.users}
            addFriend={this.props.addFriend}
            delFriend={this.props.delFriend}
        />
    }

}

const mapStateToUsers =(state)=>{
    return {
        users: state.UserReducer,
        pageSize: state.pageSize,
        totalUserCount: state.totalUserCount,
        currentPage: state.currentPage,
        isFetching: false
    }
}

export default connect (mapStateToUsers,
    {addFriend, delFriend, setUsers, pageSize, totalUserCount, currentPage})
(UserContainer)