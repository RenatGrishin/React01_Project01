import React from "react";
import PostReducer, {addPostActionCreator, editPostTextActionCreator} from "../../../Redux/post-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        posts: state.PostReducer
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addPostNew: ()=>{
            dispatch(addPostActionCreator());
        },
        editTextareaPost: (text)=>{
            dispatch(editPostTextActionCreator(text));
        }
    }

}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;