import React from "react";
import css from './User.module.css'
import userPhoto from '../../../assets/images/ava.png';


const User =(props)=>{
    return(
        <div className={css.UserDiv}>
            <div className={css.avaAndFriend}>
                <img className={css.avatar} src={props.ava ? props.ava : userPhoto} />
                {props.friend
                    ?<button onClick={()=>{props.delFriend(props.id)}}>Удалить</button>
                    :<button onClick={()=>{props.addFriend(props.id)}}>Добавить</button>
                }
            </div>
            <div className={css.infoDiv}>
                <h5>{props.id}</h5>
                <h2>{props.name}</h2>
                <h3>{props.country}</h3>
            </div>
        </div>
    )
}

export default User;