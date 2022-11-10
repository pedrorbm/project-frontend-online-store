import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class SearchInput extends Component {
  state = {
    searchParam: '',
  };

  setSearch = ({ target }) => {
    const searchParam = target.value;
    this.setState({ searchParam });
  };

  getResults = async () => {
    const { searchParam } = this.state;
    const { handleResult } = this.props;
    if (searchParam !== '') {
      const listOfProducts = await getProductsFromCategoryAndQuery('', searchParam);
      handleResult(await listOfProducts.results);
    } else {
      const listOfProducts = [];
      handleResult(listOfProducts);
    }
  };

  render() {
    const { searchParam } = this.state;
    return (
      <div className="search-container">
        <input
          data-testid="query-input"
          placeholder="Digite o que você busca"
          value={ searchParam }
          onChange={ this.setSearch }
        />
        <button
          className="search-button"
          type="button"
          data-testid="query-button"
          onClick={ this.getResults }
        >
          Buscar
        </button>
      </div>
    );
  }
}

SearchInput.propTypes = {}.isRequired;
