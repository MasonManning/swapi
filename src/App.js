import React, { Component } from 'react';
import logo from './logo.svg';
import Starship from './components/Starship'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Home from './components/Home'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import SignUp from './components/SignUp'
import Db from './StorageManagement'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Hangar from './components/Hangar';
class App extends Component {
  constructor() {
    super()
    this.state = {
      captainName: "",
      auth: false
    }
  }
  handleLogout = (event) => {
    this.setState({ auth: false })
  }

  render() {
    return (
      <Router>
        {console.log("Auth is" + this.state.auth)}
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
                <li>
                  <Link to='/Hangar'>Hangar</Link>
                </li>
                {!this.state.auth ? <div><li><Link to='/Login'>Login</Link></li><li><Link to='/SignUp'>Sign Up</Link></li></div>: ''}

              </ul>
            </nav>

            <Switch>
              <PrivateRoute path="/Starships" isAuthenticated={this.state.auth}>
                <Starship />
              </PrivateRoute>
              <Route path='/SignUp'>
                <SignUp updateAuth={(val) => { this.setState(({ auth: val })) }} auth={this.state.auth} />
              </Route>
              <Route path="/Login">
                <Login />
              </Route>
              <Route path='/Hangar'>
                <Hangar />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          {this.state.auth && <button onClick={this.handleLogout}>Log Out</button>}
        </div>
      </Router>
    );
  }
}


// function About() {
//   return <Starship></Starship>;
// }


export default App;
