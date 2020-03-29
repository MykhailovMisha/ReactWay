import React from "react";
import classes from "./users.module.css";
import * as Axios from "axios";
import avatar from "../../assets/images/user.png";

class Users extends React.Component {

    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
            response => {
              this.props.setUsers(response.data.items);
              this.props.setTotalUsersCount(response.data.totalCount);

            });
    }

    onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(
        response => {
          this.props.setUsers(response.data.items);
        });

    }

  render() {

    let PagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize );

    let pages = []
    
    for(let i=1; i<=PagesCount; i++){
      pages.push(i);
    }

    return (
      <div>
        <div className={classes.change}>
          {pages.map( p => {
            return <span onClick={(e)=> {this.onPageChanged(p)}} className={this.props.currentPage === p && classes.selectedPage}>{p}</span>
          })}
        </div>

        {this.props.users.map(u => (
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
            ? (<button onClick={() => {this.props.unfollow(u.id);}}>Unfollow</button>)
            : (<button onClick={() => {this.props.follow(u.id);}}>Follow</button>)}
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
    );
  }
}

export default Users;
