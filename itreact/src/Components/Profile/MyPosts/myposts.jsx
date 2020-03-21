import React from "react";
import classes from "./myposts.module.css";
import Post from "./Posts/post";
import {addPostActionCreator, updatePostTextActionCreator} from '../../../redux/profile-reducer'

const MyPosts = (props) => {
  let postElements = props.postData.map( p => 
    <Post alert={p.alert} like={p.like}/>
);
    
    let newPostElement = React.createRef();

    let addPost = () => {
      props.dispatch(addPostActionCreator()); 
    }

    let onPostChange = () => {
      let text = newPostElement.current.value;
      props.dispatch(updatePostTextActionCreator(text));
    }

  return (
    
    <div className={classes.postsBlock}>
    <h3>  My posts </h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
      </div>    
      <div>
        <button onClick={addPost}>Add post</button>
        <button>Remove</button>
      </div>
      <div>New post</div>
      <div className={classes.posts__item}>
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
