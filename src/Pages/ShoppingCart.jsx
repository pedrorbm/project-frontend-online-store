import React, { Component } from 'react';

class ShoppingCart extends Component {
  state = {
    shoppingCart: [],
  };

  componentDidMount() {
    const cartItems = JSON.parse(localStorage.getItem('Cart-Item'));
    if (localStorage.length > 0) {
      this.setState({
        shoppingCart: cartItems,
      });
    }
  }

  render() {
    const { shoppingCart } = this.state;
    const number = 1;
    return (
      <div>
        { shoppingCart.length === 0
          && (
            <p
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </p>) }
        <ul>
          { shoppingCart.map((cartItem) => (
            <li
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
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default ShoppingCart;
