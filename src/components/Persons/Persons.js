import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] constructor',props);
  }

  componentWillMount() {
    console.log('Persons.js Inside componentWillMount');
  }

  componentDidMount() {
    console.log('Persons.js inside component componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('UPDATE Persons.js inside comonentwillreive props', nextProps);
  }

  // stops the rendering if it return false
  shouldComponentUpdate(nextProps, nextState) {
    console.log('UPDATE Persons.js inside shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons ||
    nextProps.changed !== this.props.changed ||
    nextProps.clicked !== this.props.clicked;
    // return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('UPDATE inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('UPDATE inside componentDidUpdate');
  }

  render() {
    console.log('Persons.js inside render');
    return (
      this.props.persons.map((person, idx) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              click={() => this.props.clicked(idx)}
              changed={(event) => this.props.changed(event, person.id)}
              key={person.id}
            />
          )
      })
    )
  }
}



export default Persons;
