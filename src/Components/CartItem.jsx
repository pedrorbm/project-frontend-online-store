import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <button type="button">X</button>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLW2CuA-YogVrnao5cvs62dVpEpqkEgxMbF4Wg9qiovQ&s" alt="coloque a imagem do produto aqui" />
        <span>{item.desc}</span>
        <button type="button">-</button>
        <span>0</span>
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
    image: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default CartItem;
