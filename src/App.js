import React, { Component } from 'react';
import logo from './logo.svg';
import Starships from "./components/Starships"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
class App extends Component {
  constructor() {
    super()
    this.state = {
      starships: [],
      isLoading: true,
      captainName: ""
    }
    this.handleCptChange = this.handleCptChange.bind(this)
    this.handleCptSubmit = this.handleCptSubmit.bind(this)
  }
  handleCptChange(event){
    this.setState({captainName: event.target.value})
  }
  handleCptSubmit(event){
    alert("Welcome Captain " + this.state.captainName)
    event.preventDefault()
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
  rowStart(index) {
    return index % 3 == 0 ? "<Row>" : " "
  }
  rowEnd(index) {
    return index % 3 == 0 ? "<Row/>" : " "

  }
  render() {
    const isLoading = this.state.isLoading
    const starshipsItem = this.state.starships.map((ship, index) => {
      return <Col md={4} key={index}> <Starships starship={ship} index={index}></Starships></Col>
    })
    return (
      <div className="App container" style={{backgroundColor: "#CCCCCC"}}>
        <form onSubmit={this.handleCptSubmit}>
          <input type="text" value={this.state.captainName} placeholder="Captain Name" onChange={this.handleCptChange} />
          <br/>
          <input type="submit" value="Submit" />
        </form>
        <h1>{this.state.isLoading && "IsLoading!!"}</h1>
        <Row>
        {!this.state.isLoading && starshipsItem}
        </Row>

      </div>
    );
  }
}

export default App;
