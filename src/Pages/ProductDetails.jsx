import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

class ProductDetails extends Component {
  state = {
    title: '',
    thumbnail: '',
    price: '',
    attributes: [],
    cartItems: [],
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const product = await getProductById(id);
    const { title, price, thumbnail, attributes } = product;
    this.setState({
      title,
      price,
      thumbnail,
      attributes,
    });
  }

  addToCart = async (id) => {
    const { cartItems } = this.state;
    const local = JSON.parse(localStorage.getItem('Cart-Item'));
    const product = await getProductById(id);
    const array = [];
    array.push(product);
    this.setState({
      cartItems: array,
    });
    if (!local) {
      localStorage.setItem('Cart-Item', JSON.stringify(cartItems));
    } else {
      local.push(product);
      localStorage.setItem('Cart-Item', JSON.stringify(local));
    }
  };

  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const { title, thumbnail, price, attributes } = this.state;
    return (
      <section className="product-container">
        <div className="product-detail">
          <div className="product-info">
            <p data-testid="product-detail-name">{title}</p>
            <img
              src={ thumbnail }
              alt={ title }
              data-testid="product-detail-image"
              width={ 300 }
            />
            <p data-testid="product-detail-price">{`R$ ${price}`}</p>
          </div>
          <div className="technical-specifications">
            <h3>Especificações técnicas</h3>
            <div className="product-attributes">
              {attributes.map((attr) => (
                <p key={ attr.id }>
                  {attr.value_name !== null && `${attr.name}: ${attr.value_name}`}
                </p>
              ))}
            </div>
            <button
              data-testid="product-detail-add-to-cart"
              className="add-button"
              type="button"
              onClick={ () => this.addToCart(id) }
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
