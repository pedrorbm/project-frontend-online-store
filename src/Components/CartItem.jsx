import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const { item } = this.props;
    // console.log(item);
    return (
      <div className="cartItem">
        <button type="button">X</button>
        <img src={ item.thumbnail } alt={ item.title } />
        <span data-testid="shopping-cart-product-name">{item.title}</span>
        <button type="button">-</button>
        <span data-testid="shopping-cart-product-quantity">1</span>
        <button type="button">+</button>
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
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default CartItem;
