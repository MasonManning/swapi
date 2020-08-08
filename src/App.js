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
import Load from './components/Load'
import Save from './components/Save'
import Mission from './components/Mission'
import Button from 'react-bootstrap/Button'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Hangar from './components/Hangar';
import Shop from './components/Shop';
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
  handleSave = (event) => {
    console.log("Save!")
  }

  render() {
    return (
      <Router>
        <Container>

        {console.log("Auth is" + this.state.auth)}
        <div className="App container" style={{ backgroundColor: "#CCCCCC" }}>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {this.state.auth && <div><li><Link to='/Starships'><Button variant='primary'>Starships</Button></Link></li><li><Link to='/Hangar'><Button variant='primary'>Hangar</Button></Link></li><li><Link to='/Mission'><Button variant='primary'>Mission</Button></Link></li>
                <li><Link to='/Shop'><Button variant='primary'>Shop</Button></Link></li></div>}
                {!this.state.auth ? <div><li><Link to='/Login'>Login</Link></li><li><Link to='/SignUp'>Sign Up</Link></li></div>: ''}

              </ul>
            </nav>
            {this.state.auth && <Link to='/Save'>Save</Link>}
            {this.state.auth && <Link to='/Load'>Load</Link>}
            <Switch>
              <PrivateRoute path="/Starships" isAuthenticated={this.state.auth}>
                <Starship />
              </PrivateRoute>
              <PrivateRoute path="/Mission" isAuthenticated={this.state.auth}>
                <Mission/>
              </PrivateRoute>
              <PrivateRoute path="/Save" isAuthenticated={this.state.auth}>
                <Save/>
              </PrivateRoute>
              <PrivateRoute path="/Load" isAuthenticated={this.state.auth}>
                <Load/>
              </PrivateRoute>
              <PrivateRoute path="/Shop" isAuthenticated={this.state.auth}>
                <Shop/>
              </PrivateRoute>
              <Route path='/SignUp'>
                <SignUp updateAuth={(val) => { this.setState(({ auth: val })) }} auth={this.state.auth} />
              </Route>
              <Route path="/Login">
                <Login updateAuth={(val) => { this.setState(({ auth: val })) }} />
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
        </Container>
      </Router>
    );
  }
}


// function About() {
//   return <Starship></Starship>;
// }


export default App;
