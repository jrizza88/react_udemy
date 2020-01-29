import React, { Component } from 'react';
import Person from './Person/person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Person name="Random Person" age={Math.floor(Math.random() * 32)}/>
        < Person name="Jamar" age="31"/>
        < Person name="Rose" age="61"/>
        < Person name="Jordan" age="39"/>
      </div>
    );
  }
}

export default App;
