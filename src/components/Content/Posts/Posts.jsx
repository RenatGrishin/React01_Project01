import React from "react";
import css from "./Posts.module.css"
import Post from "./Post/Post";

const Posts =(props)=>{
    debugger
    let postsElements = props.posts.posts.map(posts=><Post title={posts.title} text={posts.text} author={posts.author} />);

    let textareaPostText = React.createRef();
    let onAddPostNew =()=>{
        props.addPostNew();
    };
    let onEditTextareaPost =()=>{
        let text = textareaPostText.current.value;
        props.editTextareaPost(text);
    };

    return(
        <div className={css.posts}>
            {postsElements}
            <div><textarea onChange={onEditTextareaPost} ref={textareaPostText} value={props.posts.textareaPostDefault} /></div>
            <button onClick={onAddPostNew}>Send</button>
        </div>
    );
}
export default Posts;