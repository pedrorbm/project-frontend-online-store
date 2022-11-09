import React, { Component } from 'react';

class ShoppingCart extends Component {
  state = {
    shoppingCart: [],
  };

  render() {
    const { shoppingCart } = this.state;
    return (
      <div>
        { shoppingCart.length === 0
          && (
            <p
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </p>) }
      </div>
    );
  }
}

export default ShoppingCart;
