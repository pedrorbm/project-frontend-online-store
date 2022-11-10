import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from '../Components/Category';
import Products from '../Components/Products';

class Home extends Component {
  goToProductDetails = (history, productId) => history.push(`/product/${productId}`);

  render() {
    const { history, handleResult, searchResult, search } = this.props;
    return (
      <div>
        <Category handleResult={ handleResult } />
        <Products
          search={ search }
          searchResult={ searchResult }
          onProductClick={ (event) => this.goToProductDetails(history, event) }
        />
      </div>
    );
  }
}

Home.propTypes = {
  handleResult: PropTypes.func.isRequired,
  history: PropTypes.shape({}),
}.isRequired;

export default Home;
