import React, { Component } from 'react';

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

  render() {
    const { searchTerm, listProduct } = this.state;
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

export default Home;
