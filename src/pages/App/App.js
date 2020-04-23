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
      favorites: []
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null, 
      favorites: []
    });
  }

  handleSignupOrLogin =  () => {
    this.setState({user: userService.getUser()});
  }

  handleExchangeRateSearch = async (curr1, curr2, timeFormat) => {
    let exchangeRateData = await getExchangeRate(curr1, curr2, timeFormat);
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

  handleUpdateFavorites = (favorites) => {
    this.setState({ favorites })
  }

  addToFavorites = async (currencies) => {
    try {
      let favorite = await favoritesService.addFavorite(currencies);
      let favorites = [...this.state.favorites, favorite]
      console.log('DONE', favorites);
      this.handleUpdateFavorites(favorites);
    } catch (err) {
      console.log('Fail');
      throw err;
    }
  }

  deleteFavorite = async (idx) => {
    await favoritesService.deleteFavorite(idx);
  }

  async componentDidMount() {
    if(userService.getUser()) {
      const favorites = await favoritesService.getFavorites();
      this.setState({ favorites })
    }
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
                  favorites={this.state.favorites}
                  handleUpdateFavorites={this.handleUpdateFavorites}
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
