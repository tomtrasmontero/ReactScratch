import React, { Component } from 'react';
// prop validation
import PropTypes from 'prop-types';

import classes from './person.css';
// another way to use HOC
import withClass2 from '../../../hoc/withClass2';
import Aux from '../../../hoc/Aux';

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
        // Aux used instead of wrapping the jsx inside a DIV
        <Aux>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            {/* props.children takes any element between the opening and closing tag */}
            <p>{this.props.children}</p>
            {/* onChange is fired when a value int he input has changed */}
            <input type='text' onChange={this.props.changed} value={this.props.name} />
        </Aux>
      )
    }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

// Another way to use HOC
export default withClass2(Person,classes.Person);
