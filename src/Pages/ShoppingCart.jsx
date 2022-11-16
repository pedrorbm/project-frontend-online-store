import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItemsContainer from '../Components/CartItemsContainer';
import arrowBack from '../assets/images/icon _arrow back.png';

class ShoppingCart extends Component {
  state = {
    shoppingCart: [],
  };

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem('Cart-Item'));
    const isEmpty = cartItems?.length === 0 || cartItems === null;
    if (!isEmpty) {
      this.setState((previousState) => ({
        shoppingCart: [...previousState.shoppingCart, ...cartItems] }));
    }
  };

  removeFromCart = (id) => {
    const local = JSON.parse(localStorage.getItem('Cart-Item'));
    const filtered = local.filter((item) => item.id !== id);
    this.setState({ shoppingCart: filtered }, () => {
      localStorage.setItem('Cart-Item', JSON.stringify(filtered));
    });
  };

  modifyQud = (type, id) => {
    const local = JSON.parse(localStorage.getItem('Cart-Item'));
    const product = local.find((item) => item.id === id);
    const filtered = local.filter((item) => item.id !== id);
    if (type === 'inc') {
      product.quantity += 1;
      filtered.push(product);
      this.setState({ shoppingCart: filtered }, () => {
        localStorage.setItem('Cart-Item', JSON.stringify(filtered));
      });
    }
    if (type === 'dec') {
      product.quantity -= 1;
      filtered.push(product);
      this.setState({ shoppingCart: filtered }, () => {
        localStorage.setItem('Cart-Item', JSON.stringify(filtered));
      });
      if (product.quantity === 0) this.removeFromCart(id);
    }
  };

  render() {
    const { shoppingCart } = this.state;
    return (
      <div className="shopCartContainer">
        <Link className="returnToHome" to="/">
          <img className="arrowGoBack" src={ arrowBack } alt="Arrow_Go_Back" />
          Voltar
        </Link>
        { shoppingCart.length === 0
          ? (
            <p
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </p>)
          : (
            <CartItemsContainer
              cartItems={ shoppingCart }
              removeFromCart={ this.removeFromCart }
              modifyQud={ this.modifyQud }
            />) }
      </div>
    );
  }
}

export default ShoppingCart;
