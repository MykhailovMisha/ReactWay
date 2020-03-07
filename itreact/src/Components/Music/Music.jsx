import React from 'react';
import classes from  './Music.module.css';
import MusicItem from './MusicItem/MusicItem';

const Music = (props) => {

    debugger;

    let MusicElements = props.state.MusicData.map( music => 
        <MusicItem name={music.name}/> );

    return(
        <div>
            <h1 className={classes.title}>
                Music page
            </h1>   
            <div className="music__item">
              {MusicElements}
            </div>
           
        </div>
    )
}

export default Music;