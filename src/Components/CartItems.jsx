import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

class CartItems extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        <h1>Carrinho de Compras</h1>
        {cart.map((item) => <CartItem key={ item.id } item={ item } />)}
      </div>
    );
  }
}

CartItems.defaultProps = {
  cart: [],
};

CartItems.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

export default CartItems;
