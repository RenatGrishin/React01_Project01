import React from "react";
import css from "./Content.module.css";
import PostsContainer from "./Posts/PostsContainer";

const Content =(props)=>{
    return (
        <div className={css.content}>
            <div className={css.slide}>Slide</div>
            <PostsContainer/>
        </div>
    );
}
export default Content;