import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import userService from '../../utils/userService';
import {getExchangeRate} from '../../services/fx-api';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      graphData: '',
      timeFormat: '',
      message: ''
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleExchangeRateSearch = async (curr1, curr2, timeFormat) => {
    let exchangeRateData = await getExchangeRate(curr1, curr2, timeFormat);
    console.log(exchangeRateData);
    if(exchangeRateData['Note']) {
      this.setState({
        message: 'Exceeded Server Requests'
      });
    } else {
      this.setState({
        graphData: exchangeRateData,
        timeFormat: timeFormat,
        message: ''
      });
    }
  }

  handleNewSearch = () => {
    this.setState({
      graphData: '',
      timeFormat: '',
      message: ''
    });
  }

  addToFavorites = async (curr1, curr2) => {
    let data = await userService.addFavorite([curr1, curr2]);
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <NavBar 
          user={this.state.user} 
          handleLogout={this.handleLogout}
          handleNewSearch={this.handleNewSearch}
        />
        <div className="container">

          <Switch>
            <Route exact path="/" render={() => (
                <HomePage 
                  timeFormat={this.state.timeFormat}
                  graphData={this.state.graphData}
                  message={this.state.message}
                  handleExchangeRateSearch={this.handleExchangeRateSearch}
                  handleNewSearch={this.handleNewSearch}
                  addToFavorites={this.addToFavorites}
                />
              )}/>

              <Route exact path="/favorites" render={() => (
                <h1>Favorites Page</h1>
              )}/>

              <Route exact path="/signup" render={({history}) => (
                <SignupPage 
                  history={history} 
                  handleSignup={this.handleSignupOrLogin}
                />
              )}/>

              <Route exact path="/login" render={({history}) => (
                <LoginPage 
                  history={history}
                  handleLogin={this.handleSignupOrLogin}
                />
              )}/>

          </Switch>

        </div>
      </div>
    );
  }
}

export default App;
