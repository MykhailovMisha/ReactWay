import React from "react";
import classes from "./users.module.css";
import avatar from "../../assets/images/user.png";

const Users = (props) => {
  
  let PagesCount = Math.ceil( props.totalUsersCount / props.pageSize )

  let pages = []
  
  for(let i=1; i<=PagesCount; i++){
    pages.push(i);
    }

  return( 
    <div>
    <div className={classes.change}>
      {pages.map( p => {
        return <span onClick={(e)=> {props.onPageChanged(p)}} className={props.currentPage === p && classes.selectedPage}>{p}</span>
      })}
    </div>

    {props.users.map(u => (
      <div key={u.id}>
        <div>
          <img
            src={u.photos.small != null ? u.photos.small : avatar}
            alt="avatar"
            className={classes.userPhoto}
          />
        </div>
        <div>
          {u.followed 
        ? (<button onClick={() => {props.unfollow(u.id);}}>Unfollow</button>)
        : (<button onClick={() => {props.follow(u.id);}}>Follow</button>)}
        </div>
        <span>
          <div>{u.name}</div>
          <div>{u.status}</div>
        </span>
        <span>
          <div>{"u.location.country"}</div>
          <div>{"u.location.city"}</div>
        </span>
      </div>
    ))}
  </div>
  )
}

export default Users;
