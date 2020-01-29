import React, { Component } from 'react';
import Person from './Person/person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Royyale', age: 21},
      {name: 'Jamar', age: 31},
      {name: 'Rose', age: 61}
    ]
  }
  render() {
    return (
      <div className="App">
        <button>Switch Name</button>
        < Person name="Random Person" age={Math.floor(Math.random() * 32)}/>
        < Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        < Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        < Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        < Person name="Jordan" age="39"/>
        < Person name="Jayden" age="11">My hobbies include: Gaming</Person>
      </div>
    );
  }
}

export default App;
