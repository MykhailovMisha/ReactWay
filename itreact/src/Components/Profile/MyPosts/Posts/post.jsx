
import React from 'react';
import classes from './post.module.css';

const Post = (props) => {
return(

        <div className={classes.item}>
          {/* <img className={classes.avatar} src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg" alt=""/> */}
          {props.alert}
          <div>
          <a href="#"><span>like</span> ({props.like}) </a>
          </div>
        </div>

    );
}

export default Post;