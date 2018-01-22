// PureComponent is same as component with shouldComponentUpdate build in
import React, { PureComponent } from 'react';
// import classes fro App.css to be used inside the component.  Only after
// adjusting webpack config css loader!
import classes from './App.css';
import Person from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

// error boundary new in react 16+
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js]',props);
    this.state = {
      persons: [
        { id: 'a6sd5f4', name: 'Max', age: 28 },
        { id: 'asd165f', name: 'Manu', age: 29 },
        { id: '4s65f4d', name: 'Stephanie', age: 26 },
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0,
    }
  }

  componentWillMount() {
    console.log('App.js Inside componentWillMount');
  }

  componentDidMount() {
    console.log('App.js inside component componentDidMount');
  }

  // stops the rendering if it return false
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('UPDATE APP.js inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('UPDATE APP.js inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('UPDATE APP.js inside componentDidUpdate');
  }

  // ** this state assignment only works in newer version of react **
  // state = {
  //   persons: [
  //     { id: 'a6sd5f4', name: 'Max', age: 28 },
  //     { id: 'asd165f', name: 'Manu', age: 29 },
  //     { id: '4s65f4d', name: 'Stephanie', age: 26 },
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false,
  // }

// event argument is automatically passed
// two way binding from user input
  nameChangedHandler = (event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // copy person
    const person = {
        ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons,
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); es5
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons,
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // setState can take a arg of prevState and props
    // always use this instead of calling this.state inside setState because
    // the state might not correctly the reflect the most current state
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
          toggleClicked: prevState.toggleClicked + 1
        }
    });
  }

  render() {
    console.log('App.js inside render');
// conditional content
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Person
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
      );
    }

    return (
      // stores unique classes for this particular component using HOC
      <WithClass classes={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </WithClass>
    );
  }
}

export default (App);
