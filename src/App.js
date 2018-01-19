import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'a6sd5f4', name: 'Max', age: 28 },
      { id: 'asd165f', name: 'Manu', age: 29 },
      { id: '4s65f4d', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false,
  }

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
    this.setState({showPersons: !doesShow});
  }

  render() {
    // adding style inside the component instead of css className available by JSX
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

// conditional content
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, idx) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(idx)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                key={person.id}
              />
            )
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        {/* same as below with .bind(this)  */}
        <button
          // pointing style variable above.
          style={style}
          onClick={this.togglePersonsHandler}
          >Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
