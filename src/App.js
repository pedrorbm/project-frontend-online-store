import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetails from './Pages/ProductDetails';
import Checkout from './Pages/Checkout';
import './App.css';

class App extends Component {
  state = {
    searchResult: [],
    search: false,
  };

  handleResult = (value) => {
    this.setState({ searchResult: value, search: true });
  };

  render() {
    return (
      <>
        <Header
          { ...this.state }
          handleResult={ this.handleResult }
        />
        <Switch>
          <Route
            path="/product/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route
            path="/shoppingcart"
            render={ (props) => <ShoppingCart { ...props } /> }
          />
          <Route
            exact
            path="/"
            render={ (props) => (
              <Home
                { ...props }
                { ...this.state }
                handleResult={ this.handleResult }
              />) }
          />
          <Route
            path="/checkout"
            render={ (props) => <Checkout { ...props } /> }
          />
        </Switch>
      </>
    );
  }
}

export default App;
