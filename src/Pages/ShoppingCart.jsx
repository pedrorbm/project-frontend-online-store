import React, { Component } from 'react';

class ShoppingCart extends Component {
  state = {
    shoppingCart: [],
    isCartEmpty: true,
  };

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem('Cart-Item'));
    console.log(cartItems.length);
    const isEmpty = cartItems.length === 0 || cartItems === null;
    if (!isEmpty) {
      this.setState((previousState) => ({
        isCartEmpty: false,
        shoppingCart: [...previousState.shoppingCart, ...cartItems] }));
    }
  };

  render() {
    const { shoppingCart, isCartEmpty } = this.state;
    const number = 1;
    return (
      <div>
        { isCartEmpty
          ? (
            <p
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </p>)
          : (
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
          )}

      </div>
    );
  }
}

export default ShoppingCart;
