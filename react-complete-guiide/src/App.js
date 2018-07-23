import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hi I am React app</h1>
      <Person name ="max" age ="28"/>
      <Person name ="Manu" age="29"/>
      <Person name = "Stephanie" age ="30"/>
      </div>
    );
  }
}

export default App;
