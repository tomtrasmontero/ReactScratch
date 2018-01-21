import React, { Component } from 'react';
import classes from './person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] constructor',props);
  }

  componentWillMount() {
    console.log('Person.js Inside componentWillMount');
  }

  componentDidMount() {
    console.log('Person.js inside component componentDidMount');
  }

    render() {
      console.log('Person.js inside render');
      return (
        <div className={classes.Person}>
          <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
          {/* props.children takes any element between the opening and closing tag */}
          <p>{this.props.children}</p>
          {/* onChange is fired when a value int he input has changed */}
          <input type='text' onChange={this.props.changed} value={this.props.name} />
        </div>
      )
    }
}


export default Person;
