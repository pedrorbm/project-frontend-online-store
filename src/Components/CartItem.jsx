import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const { item, removeFromCart, modifyQud } = this.props;
    return (
      <div className="cartItem">
        <button
          className="btnDeleteCartItem"
          type="button"
          onClick={ () => removeFromCart(item.id) }
        >
          X
        </button>

        <img src={ item.thumbnail } alt={ item.title } />

        <span data-testid="shopping-cart-product-name">{item.title}</span>

        <button
          className="btnDecreaseQuantity"
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => modifyQud('dec') }
        >
          -
        </button>

        <span data-testid="shopping-cart-product-quantity">1</span>

        <button
          className="btnIncreaseQuantity"
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => modifyQud('inc') }
        >
          +
        </button>
        <span>
          R$
          {item.price}
        </span>
      </div>
    );
  }
}

CartItem.defaultProps = {
  item: {},
  removeFromCart: () => '',
  modifyQud: () => '',
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }),
  removeFromCart: PropTypes.func,
  modifyQud: PropTypes.func,
};

export default CartItem;
