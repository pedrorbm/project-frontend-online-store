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

  render() {
    const { searchResult, search } = this.state;
    const { history } = this.props;
    const headerProps = { history, searchResult, search };
    return (
      <div>
        <Header { ...headerProps } handleResult={ this.handleResult } />
        <Category />
        <Products { ...this.state } />
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({}),
}.isRequired;

export default Home;
