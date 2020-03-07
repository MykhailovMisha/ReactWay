import React from 'react'
import classes from './../Profile.module.css'

const ProfileInfo = props => {
    return (
      <>
        <div>
          <img
            src="https://friday.mk/wp-content/uploads/2018/02/cameo-island-luxury-yacht-charter-l.jpg"
            height="400"
            width="900"
          />
        </div>
        <div className={classes.descrip}>Ava + desc</div>
      </>
    );
  };
  
  export default ProfileInfo