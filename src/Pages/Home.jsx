import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from '../Components/Category';
import Header from '../Components/Header';
import Products from '../Components/Products';

class Home extends Component {
  state = {
    searchResult: [],
    search: false,
  };

  handleResult = (value) => {
    this.setState({ searchResult: value, search: true });
  };

  goToProductDetails = (history, productId) => history.push(`/product/${productId}`);

  render() {
    const { history } = this.props;
    const { searchResult, search } = this.state;
    const headerProps = { history, searchResult, search };
    return (
      <div>
        <Header { ...headerProps } handleResult={ this.handleResult } />
        <Category handleResult={ this.handleResult } />
        <Products
          { ...this.state }
          onProductClick={ (event) => this.goToProductDetails(history, event) }
        />
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({}),
}.isRequired;

export default Home;
