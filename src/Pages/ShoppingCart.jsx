import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItems from '../Components/CartItems';
import Header from '../Components/Header';

class ShoppingCart extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    this.setState({ cart: this.getCartItemsFromStorage() });
  }

  getCartItemsFromStorage = () => {
    // const cartItems = JSON.parse(localStorage.getItem('nomenolocalstorage'));
    const mockCartItems = [
      { id: '001', desc: 'item1', img: '', price: 0 },
      { id: '002', desc: 'item2', img: '', price: 0 },
      { id: '003', desc: 'item3', img: '', price: 0 }];
    return mockCartItems;
  };

  render() {
    const { cart } = this.state;
    const isCartEmpty = cart.length === 0;
    return (
      <>
        <div>
          <Header />
        </div>
        <div>
          <Link to="/">Voltar</Link>
        </div>
        <div>
          { isCartEmpty ? (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>)
            : (
              <CartItems { ...this.state } />
            )}
        </div>
      </>
    );
  }
}

export default ShoppingCart;
