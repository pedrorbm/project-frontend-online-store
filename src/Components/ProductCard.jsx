import React, { Component } from 'react';

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
        {freeShipping && <span data-testid="free-shipping">Frete grátis</span>}
        <p>{ title }</p>
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
    );
  }
}

ProductCard.propTypes = {}.isRequired;
