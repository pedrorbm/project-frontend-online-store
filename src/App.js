import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Components/Products';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Products } />
        <Route exact path="/" component={ Home } />
      </Switch>
    );
  }
}

export default App;
