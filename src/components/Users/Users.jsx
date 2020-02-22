import React from "react";
import User from './User/User'

const Users =(props)=>{
    debugger
    let userElement = props.users.users.map(user=><User id={user.id} name={user.name} country={user.country} friend={user.friend} addFriend={props.addFriend} delFriend={props.delFriend} />)

    return userElement;
}

export default Users;