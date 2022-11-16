import React, { Component } from 'react';
import FreeShipping from './FreeShipping';

export default class ProductCard extends Component {
  render() {
    const {
      title,
      price,
      thumbnail,
      onProductClick,
      id,
      addItemCartButton,
      freeShipping } = this.props;
    return (
      <div data-testid="product" className="product-card">
        {freeShipping && <FreeShipping />}
        <div className="inner-card">
          <p className="card-title">{ title }</p>
          <img src={ thumbnail } alt={ title } />
          <p>{ `R$ ${price}` }</p>
          <button
            className="detail-button"
            type="button"
            data-testid="product-detail-link"
            onClick={ onProductClick }
          >
            Detalhes
          </button>
          <button
            className="add-button"
            data-testid="product-add-to-cart"
            type="button"
            onClick={ addItemCartButton }
            id={ id }
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {}.isRequired;
