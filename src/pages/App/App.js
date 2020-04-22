import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import userService from '../../utils/userService';
import favoritesService from '../../utils/favoritesService';
import {getExchangeRate} from '../../services/fx-api';
import FavoritesList from '../../components/FavoritesList/FavoritesList';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      graphData: '',
      timeFormat: '',
      message: '',
      favorites: ''
    }
  }

  componentDidMount() {
    let favorites = favoritesService.getFavorites();
    this.setState({
      favorites: favorites
    })
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

  addToFavorites = async (currencies) => {
    try {
      let user = await favoritesService.addFavorite(currencies);
      console.log('DONE', user);
      this.setState({
        user: user
      });
    } catch (err) {
      console.log('Fail');
      throw err;
    }
  }

  deleteFavorite = async (idx) => {
    await userService.deleteFavorite(idx);
    this.setState({
      user: userService.getUser()
    })
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
                  user={this.state.user}
                />
              )}/>

              <Route exact path="/favorites" render={() => (
                <FavoritesList 
                  deleteFavorite={this.deleteFavorite}
                  handleExchangeRateSearch={this.handleExchangeRateSearch}
                  user={this.state.user}
                />
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
