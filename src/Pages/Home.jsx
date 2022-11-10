import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  state = {
    searchTerm: '',
    listProduct: [],
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  addItemCartButton = ({ target }) => {
    const { id } = target;
    const { listProduct } = this.state;
    const item = listProduct.find((product) => product.id === id);
    localStorage.setItem('Cart-Item', item);
  }; 

  render() {
    const { searchTerm, listProduct } = this.state;
    const { history } = this.props;

    return (
      <div>
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            name="searchTerm"
            value={ searchTerm }
            onChange={ this.onInputChange }
          />
        </label>
        <button
          type="button"
          data-testid="shopping-cart-button"
          onClick={ () => history.push('/shoppingcart') }
        >
          Meu carrinho
        </button>
        { listProduct.length === 0
          && (
            <p
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>) }

      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({}),
}.isRequired;

export default Home;
