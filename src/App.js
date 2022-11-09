import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './components/Category';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
        <Category />
      </>
    );
  }
}

export default App;
