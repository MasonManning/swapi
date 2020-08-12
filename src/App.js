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
import LinkButton from './components/LinkButton'
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
          {/* <div className="App container" style={{ backgroundColor: "#CCCCCC" }}> */}
          {/* Inside Color */}
          <div className="App container" style={{ backgroundColor: "#FFFFFF" }}>
            <div>
              <nav>
                <LinkButton to="/">Home</LinkButton>
                {this.state.auth && <span><LinkButton to='/Starships'>Starships</LinkButton>
                <LinkButton to='/Hangar'>Hangar</LinkButton>
                  <LinkButton to='/Mission'>Misison</LinkButton>
                  <LinkButton to="/Shop">Shop</LinkButton>
                </span>}
                {!this.state.auth ? <div><LinkButton to='/Login'>Login</LinkButton>
                <LinkButton to='/SignUp'>Sign Up</LinkButton></div> : ''}

              </nav>
              {this.state.auth && <LinkButton to='/Save'>Save</LinkButton>}
              {this.state.auth && <LinkButton to='/Load'>Load</LinkButton>}
              <Switch>
                <PrivateRoute path="/Starships" isAuthenticated={this.state.auth}>
                  <Starship />
                </PrivateRoute>
                <PrivateRoute path="/Mission" isAuthenticated={this.state.auth}>
                  <Mission />
                </PrivateRoute>
                <PrivateRoute path="/Save" isAuthenticated={this.state.auth}>
                  <Save />
                </PrivateRoute>
                <PrivateRoute path="/Load" isAuthenticated={this.state.auth}>
                  <Load />
                </PrivateRoute>
                <PrivateRoute path="/Shop" isAuthenticated={this.state.auth}>
                  <Shop />
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
            {this.state.auth && <Button onClick={this.handleLogout}>Log Out</Button>}
          </div>
        </Container>
      </Router>
    );
  }
}

export default App;
