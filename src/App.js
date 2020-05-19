import React, { Component } from 'react';
import logo from './logo.svg';
import Starships from "./components/StarshipItem"
import Starship from './components/Starship'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  constructor() {
    super()
    this.state = {
      captainName: ""
    }
  }

  render() {
    return (
      <Router>
        <div className="App container" style={{ backgroundColor: "#CCCCCC" }}>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Starships">Starships</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/Starships">
                <Starship/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>

        </div>
      </Router>
    );
  }
}


// function About() {
//   return <Starship></Starship>;
// }


export default App;
