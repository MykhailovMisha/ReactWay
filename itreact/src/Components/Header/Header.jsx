import React from 'react';
import classes from'./Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={classes.header}>
          <NavLink className={classes.header_link} to="/profile">
        <div className={classes.header_items}>
        <img
          // src="https://en.facebookbrand.com/wp-content/uploads/2019/06/f_logo_RGB-Blue_512.png"
          alt="logo"
        />
         <div className={classes.header_title}>name</div> 
        
        </div>
        </NavLink>
        </header>
    )
}

export default Header;