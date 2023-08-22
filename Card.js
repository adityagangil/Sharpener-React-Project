import './Card.css';
import React from 'react';

const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div classname={classes}>{props.children}</div>
}

export default Card;