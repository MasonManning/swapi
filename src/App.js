import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
  }

  componentDidMount(){
    fetch("https://swapi.dev/api/starships/")
    .then(res => res.json())
    .then(data => console.log(data))
  }
  render() {

    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
