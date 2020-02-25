import React from "react";
import User from './User/User';
import * as axios from "axios";
import css from './User/User.module.css';

class Users extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.users.currentPage}&count=${this.props.users.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.totalUserCount(response.data.totalCount)
        })
    }

    setPage(page){
        this.props.currentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.users.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.totalUserCount(response.data.totalCount)
        })
    }

    render() {
            let totalPages = Math.ceil(this.props.users.totalUserCount / this.props.users.pageSize);
            let pagesArr = [];
            for(let i = 1; i <= totalPages; i++ ){
                pagesArr.push(i);
            }
        return <div>
            <div>
                {pagesArr.map(pA =>{
                        return <span className={this.props.users.currentPage === pA && css.sellectSpanNav}
                        onClick={()=>{this.setPage(pA)}}>{pA}<span> </span></span>
                    })}

            </div>
            {this.props.users.users.map(user=><User
                id={user.id}
                ava={user.photos.large}
                name={user.name}
                country={user.country}
                friend={user.friend}
                addFriend={this.props.addFriend}
                delFriend={this.props.delFriend}
            />)}
        </div>
    }

}

/*const Users =(props)=>{

    let getUsers = () =>{
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        debugger
            props.setUsers(response.data.items)
        })
    }

    let userElement = props.users.users.map(user=><User
        id={user.id}
        ava={user.photos.large}
        name={user.name}
        country={user.country}
        friend={user.friend}
        addFriend={props.addFriend}
        delFriend={props.delFriend}
    />)

    return <div>
        <button onClick={getUsers} >GetUsers</button>
        {userElement}
    </div>
}*/

export default Users;