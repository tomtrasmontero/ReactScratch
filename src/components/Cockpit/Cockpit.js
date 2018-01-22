import React from 'react';

import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
  // dynamic styling on css classname
  const assignedClasses = [];
  let btnClass = classes.Button;

  // add css class if person is showing or not
  if(props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if(props.persons.length <= 2) {
    assignedClasses.push( classes.red );
  }

  if(props.persons.length <= 1) {
    assignedClasses.push( classes.bold );
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        // pointing style variable above.
        className={btnClass}
        onClick={props.clicked}
        >Toggle Persons
      </button>
    </Aux>
  );
}

export default cockpit;
