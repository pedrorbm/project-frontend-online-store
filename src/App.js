import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Components/Products';
import ShoppingCart from './Pages/ShoppingCart';
import Category from './components/Category';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/" component={ Home } />
        </Switch>
        <Category />
      </>
    );
  }
}

export default App;
