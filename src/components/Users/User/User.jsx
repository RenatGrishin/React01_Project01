import React from "react";

const User =(props)=>{
    debugger
    return(
        <div>
            <h5>{props.id}</h5>
            <h2>{props.name}</h2>
            <h3>{props.country}</h3>
            {props.friend
                ?<button onClick={()=>{props.delFriend(props.id)}}>Удалить</button>
                :<button onClick={()=>{props.addFriend(props.id)}}>Добавить</button>
            }
        </div>
    )
}

export default User;