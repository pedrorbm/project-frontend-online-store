import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

class ProductDetails extends Component {
  state = {
    prodId: '',
    title: '',
    thumbnail: '',
    price: '',
    attributes: [],
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const product = await getProductById(id);
    const { id: prodId, title, price, thumbnail, attributes } = product;
    this.setState({
      prodId,
      title,
      price,
      thumbnail,
      attributes,
    });
  }

  addToCart = () => {
    const { prodId, title, price, thumbnail, attributes } = this.state;
    const cartItems = [];
    const product = {
      id: prodId, title, thumbnail, attributes, price,
    };
    cartItems.push(product);
    const localCart = JSON.parse(localStorage.getItem('Cart-Item'));
    if (!localCart) {
      cartItems[0].quantity = 1;
      localStorage.setItem('Cart-Item', JSON.stringify(cartItems));
    } else {
      // se já tem no localstorage cai aqui
      // verifica se já tem o mesmo id no local
      // se já tiver, filtra o array retirando o produto
      // depois devolve o produto ao array com o qud alterado
      const duplicatedProd = localCart.find((item) => item.id === product.id);
      if (!duplicatedProd) {
        // se o resultado do find acima for undefined cai aqui
        product.quantity = 1;
        localCart.push(product);
        localStorage.setItem('Cart-Item', JSON.stringify(localCart));
      }
      if (duplicatedProd) {
        const filteredCart = localCart.filter((item) => item.id !== product.id);
        duplicatedProd.quantity += 1;
        filteredCart.push(duplicatedProd);
        localStorage.setItem('Cart-Item', JSON.stringify(filteredCart));
      }
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
