import React from 'react';
import classes from './person.css';

const person = (props) => {

  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      {/* props.children takes any element between the opening and closing tag */}
      <p>{props.children}</p>
      {/* onChange is fired when a value int he input has changed */}
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  )
}

export default (person);
