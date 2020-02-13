import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
       <h1>Foreign Exchange Market</h1>

       <Switch>
         <Route exact path="/" render={() => (
            <h1>Welcome Home</h1>
          )}/>

          <Route exact path="/favorites" render={() => (
            <h1>Favorites Page</h1>
          )}/>
       </Switch>
      </div>
    );
  }
}

export default App;
