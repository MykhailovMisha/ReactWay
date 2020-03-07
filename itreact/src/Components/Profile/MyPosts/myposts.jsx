import React from "react";
import classes from "./myposts.module.css";
import Post from "./Posts/post";

const MyPosts = (props) => {
  let postElements = props.postData.map( p => 
    <Post alert={p.alert} like={p.like}/>
);

  return (
    
    <div className={classes.postsBlock}>
    <h3>  My posts </h3>
      <div>
        <textarea> </textarea>
      </div>    
      <div>
        <button>Add post</button>
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
