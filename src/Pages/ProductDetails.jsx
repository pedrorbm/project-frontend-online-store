import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

class ProductDetails extends Component {
  state = {
    title: '',
    thumbnail: '',
    price: '',
  };

  async componentDidMount() {
    const product = await getProductById('MLA935110000'); // futuramente pegar o ID da rota;
    const { title, price, thumbnail } = product;
    this.setState({
      title,
      price,
      thumbnail,
    });
  }

  render() {
    const { title, thumbnail, price } = this.state;
    return (
      <section className="product-container">
        <div>
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            <Link to="/shoppingcart">Carrinho</Link>
          </button>
        </div>
        <div className="product-card">
          <div>
            <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
          </div>
          <div>
            <p data-testid="product-detail-name">{title}</p>
            <p data-testid="product-detail-price">{price}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductDetails;
