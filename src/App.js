import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetails from './Pages/ProductDetails';
import Category from './components/Category';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/product" component={ ProductDetails } />
          <Route path="/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/" component={ Home } />
        </Switch>
        <Category />
      </>
    );
  }
}

export default App;
