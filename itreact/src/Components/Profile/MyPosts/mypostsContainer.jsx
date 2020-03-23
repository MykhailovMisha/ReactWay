import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from "./myposts";


const MyPostsContainer = (props) => {
  
let state = props.store.getState();
  
    let addPost = () => {
      props.store.dispatch(addPostActionCreator()); 
    }

    let onPostChange = (text) => {
      let action = updatePostTextActionCreator(text)
      props.store.dispatch(action)
    }

  return (
    <MyPosts addPost={addPost} updatePostText={onPostChange}
     postData={state.profilePage.postData} 
     newPostText={state.profilePage.newPostText}/>
  );
};

export default MyPostsContainer;
