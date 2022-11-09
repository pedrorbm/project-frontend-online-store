import React, { Component } from 'react';

export default class SearchInput extends Component {
  render() {
    const { getResults, setSearch, searchParam } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          placeholder="Buscar"
          value={ searchParam }          
          onChange={ setSearch }          
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ getResults }
        >
          Buscar
        </button>
      </div>
    );
  }
}

SearchInput.propTypes = {}.isRequired;
