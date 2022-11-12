import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

class CartItemsContainer extends Component {
  render() {
    const { cartItems, removeFromCart, modifyQud } = this.props;
    return (
      <div className="cartItemContainer">
        <h1 className="cartItemTitle">Carrinho de Compras</h1>
        {cartItems.map((item, index) => (<CartItem
          key={ `${item.id}-${index}` }
          item={ item }
          removeFromCart={ removeFromCart }
          modifyQud={ modifyQud }
        />))}
      </div>
    );
  }
}

CartItemsContainer.defaultProps = {
  cartItems: [],
  removeFromCart: () => '',
  modifyQud: () => '',
};

CartItemsContainer.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  removeFromCart: PropTypes.func,
  modifyQud: PropTypes.func,
};

export default CartItemsContainer;
