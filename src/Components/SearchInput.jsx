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
    // const { searchResult } = this.props;
    if (searchParam !== '') {
      const listOfProducts = await getProductsFromCategoryAndQuery('', searchParam);
      handleResult(await listOfProducts.results);
      // console.log(listOfProducts);
    } else {
      const listOfProducts = [];
      handleResult(listOfProducts);
    }
    // this.setState({ searchResult: listOfProducts.results, search: true });
  };

  render() {
    // const { getResults, setSearch, searchParam } = this.props;
    const { searchParam } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          placeholder="Buscar"
          value={ searchParam }
          onChange={ this.setSearch }
        />
        <button
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
