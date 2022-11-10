import React, { Component } from 'react';

export default class ProductCard extends Component {
  render() {
    const { title, price, thumbnail, id, addItemCartButton } = this.props;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$ ${price}` }</p>
        <button
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
