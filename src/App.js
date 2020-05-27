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
class App extends Component {
  constructor() {
    super()
    this.state = {
      captainName: ""
    }
  }
  handleLogout = (event) => {
    Db.getInstance().Logout()
    console.log(Db.getInstance().isAuthenticated())
    console.log(localStorage)
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
                <li>
                  <Link to='/Login'>Login</Link>
                </li>
                <li>
                  <Link to='/SignUp'>Sign Up</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <PrivateRoute path="/Starships" isAuthenticated={false}>
                <Starship />
              </PrivateRoute>
              <Route path='/SignUp'>
                <SignUp/>
              </Route>
              <Route path="/Login">
                <Login/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          {Db.getInstance().isAuthenticated() && <button onClick={this.handleLogout}>Log Out</button>}
          {Db.getInstance().isAuthenticated()}
          {/* {Db.getInstance.isAuthenticated() ? <button type="text">Log Out</button> : ""} */}
        </div>
      </Router>
    );
  }
}


// function About() {
//   return <Starship></Starship>;
// }


export default App;
