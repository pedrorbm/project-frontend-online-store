import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetails from './Pages/ProductDetails';
import Checkout from './Pages/Checkout';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        {/* <Header { ...headerProps } /> */}
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route
            path="/product/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route
            path="/shoppingcart"
            render={ (props) => <ShoppingCart { ...props } /> }
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
