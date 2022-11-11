import React, { Component } from 'react';

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

  render() {
    const { shoppingCart } = this.state;
    const number = 1;
    return (
      <div>
        { shoppingCart.length === 0
          ? (
            <p
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </p>)
          : shoppingCart.map((cartItem) => (
            <div
              key={ cartItem.id }
            >
              <p data-testid="shopping-cart-product-name">{ cartItem.title }</p>
              <img src={ cartItem.thumbnail } alt={ cartItem.title } />
              <p>{`R$ ${cartItem.price}` }</p>
              <p
                data-testid="shopping-cart-product-quantity"
              >
                { `Quantidade ${number}` }
              </p>
            </div>
          )) }
      </div>
    );
  }
}

export default ShoppingCart;
