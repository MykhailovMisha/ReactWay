import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from "./MyPosts/myposts";

const Profile = (props) => {  
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={props.state.postData} addPost={props.addPost}/>
    </div>
  );
};

export default Profile;
