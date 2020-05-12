import React, { Component } from 'react';
import logo from './logo.svg';
import Starships from "./components/Starships"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      starships: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/starships/")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState(ps => {
          const list = []
          return ({
            starships: data.results,
            isLoading: false
          })
        })
      })
  }
  render() {
    const isLoading = this.state.isLoading
    const starshipsItem = this.state.starships.map(ship => <Starships starship={ship}></Starships>)
    return (
      <div className="App">
        <h1>{this.state.isLoading && "IsLoading!!"}</h1>
        {!this.state.isLoading && starshipsItem}

      </div>
    );
  }
}

export default App;
