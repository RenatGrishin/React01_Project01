import React from "react";
import css from "./../Posts.module.css";

const Post =(props)=>{
    return(
        <div className={css.post}>
            <div className={css.postArea}>
                <h3>{props.title}</h3>
                <div className={css.text}>
                    <p>{props.text}</p>
                </div>
                <h4>{props.author}</h4>
            </div>
        </div>
    );
}
export default Post;