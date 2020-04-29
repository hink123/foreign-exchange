import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import userService from '../../utils/userService';
import favoritesService from '../../utils/favoritesService';
import {getExchangeRate} from '../../services/fx-api';
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

  handleNewSearch = () => {
    this.setState({
      graphData: '',
      timeFormat: '',
      message: ''
    });
  }

  handleExchangeRateSearch = async (curr1, curr2, timeFormat) => {
    let exchangeRateData = await getExchangeRate(curr1, curr2, timeFormat);
    console.log('HERRRR', exchangeRateData);
    if(exchangeRateData['Note']) {
      this.setState({
        message: 'Exceeded Server Requests'
      });
    } else if(exchangeRateData['Error Message']) {
        this.setState({
          message: 'Search Parameters Invalid'
        })
    } else {
        this.setState({
          graphData: exchangeRateData,
          timeFormat: timeFormat,
          message: ''
        });
    }
  }

  handleUpdateFavorites = (favorites) => {
    this.setState({ favorites })
  }

  addToFavorites = async (currencies) => {
    try {
      let favorite = await favoritesService.addFavorite(currencies);
      let favorites = [...this.state.favorites, favorite]
      this.handleUpdateFavorites(favorites);
    } catch (err) {
      console.log('Fail');
      throw err;
    }
  }

  deleteFavorite = async (idx) => {
    await favoritesService.deleteFavorite(idx);
  }

  toggleFavMenu = () => {
    let favs = document.querySelector('.favs-container')
    let isHidden = favs.getAttribute('class') === 'favs-container hidden';
    if(isHidden) {
        favs.setAttribute('class', 'favs-container shown');
    } else {
        favs.setAttribute('class', 'favs-container hidden')
    }
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
          toggleFavMenu={this.toggleFavMenu}
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
                  deleteFavorite={this.deleteFavorite}
                  favorites={this.state.favorites}
                  handleUpdateFavorites={this.handleUpdateFavorites}
                  toggleFavMenu={this.toggleFavMenu}
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
