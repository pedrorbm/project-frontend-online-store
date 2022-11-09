import React, { Component } from 'react';
import * as api from '../services/api';

class Category extends Component {
  state = {
    categoryProducts: [],
  };

  async componentDidMount() {
    const category = await api.getCategories();

    this.setState({
      categoryProducts: category,
    });
  }

  render() {
    const { categoryProducts } = this.state;

    return (
      categoryProducts.map((category) => (
        <label data-testid="category" htmlFor={ category.id } key={ category.id }>
          <input type="radio" id={ category.id } />
          { category.name }
        </label>
      ))
    );
  }
}

export default Category;
