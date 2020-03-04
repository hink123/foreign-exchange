import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <NavBar 
          user={this.state.user} 
          handleLogout={this.handleLogout}
        />
        <div className="container">
          <h1>Foreign Exchange Market</h1>

          <Switch>
            <Route exact path="/" render={() => (
                <h1>Welcome Home</h1>
              )}/>

              <Route exact path="/favorites" render={() => (
                <h1>Favorites Page</h1>
              )}/>

              <Route exact path="/signup" render={({history}) => (
                <SignupPage 
                  history={history} 
                  handleSignup={this.handleSignup}
                />
              )}/>

              <Route exact path="/login" render={() => (
                <LoginPage />
              )}/>

          </Switch>

        </div>
      </div>
    );
  }
}

export default App;
