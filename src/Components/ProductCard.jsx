import React, { Component } from 'react';

export default class ProductCard extends Component {
  render() {
    const { title, price, thumbnail, onProductClick } = this.props;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$ ${price}` }</p>
        <button
          type="button"
          data-testid="product-detail-link"
          onClick={ onProductClick }
        >
          Detalhes
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {}.isRequired;
