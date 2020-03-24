import React from 'react';
 
const Newses = (props) => {
    return(
        <div>
            <h2>
                {props.title}
            </h2>
            <p> {props.subtitle} </p>
        </div>
    )
}

export default Newses