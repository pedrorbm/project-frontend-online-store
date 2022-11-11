import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import FreeShipping from '../Components/FreeShipping';

class ProductDetails extends Component {
  state = {
    title: '',
    thumbnail: '',
    price: '',
    attributes: [],
    freeShipping: false,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const product = await getProductById(id);
    const {
      title,
      price,
      thumbnail,
      attributes,
      shipping: { free_shipping: freeShipping },
    } = product;
    this.setState({
      title,
      price,
      thumbnail,
      attributes,
      freeShipping,
    });
  }

  addToCart = () => {
    const { title, price, thumbnail, attributes } = this.state;
    const localCart = JSON.parse(localStorage.getItem('Cart-Item'));
    const product = {
      title, thumbnail, attributes, price,
    };
    const cartItems = [];
    cartItems.push(product);
    if (!localCart) {
      localStorage.setItem('Cart-Item', JSON.stringify(cartItems));
    } else {
      localCart.push(product);
      localStorage.setItem('Cart-Item', JSON.stringify(localCart));
    }
  };

  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const { title, thumbnail, price, attributes, freeShipping } = this.state;
    return (
      <section className="product-container">
        <div className="product-detail">
          <div className="product-info">
            {freeShipping && <FreeShipping />}
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
