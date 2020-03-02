import React from "react";
import css from './User/User.module.css';
import User from "./User/User";

const Users = (props) => {

    let totalPages = Math.ceil(props.users.totalUserCount / props.users.pageSize);
    let pagesArr = [];
    for (let i = 1; i <= totalPages; i++) {
        pagesArr.push(i);
    }

    return <div>
        <div>
            {pagesArr.map(pA => {
                return <span className={props.users.currentPage === pA && css.sellectSpanNav}
                             onClick={() => {
                                 props.setPage(pA)
                             }}>{pA}<span> </span></span>
            })}

        </div>
        {props.users.users.map(user => <User
            id={user.id}
            ava={user.photos.large}
            name={user.name}
            country={user.country}
            friend={user.friend}
            addFriend={props.addFriend}
            delFriend={props.delFriend}
        />)}
    </div>

}

export default Users;