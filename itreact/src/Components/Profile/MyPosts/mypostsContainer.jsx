import React from "react";
import {  addPostActionCreator,updatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./myposts";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updatePostText: (text) => {
      dispatch(updatePostTextActionCreator(text));
    } 
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
