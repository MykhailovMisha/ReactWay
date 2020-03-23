import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from "./MyPosts/myposts";
import MyPostsContainer from "./MyPosts/mypostsContainer";

const Profile = (props) => {  
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
  