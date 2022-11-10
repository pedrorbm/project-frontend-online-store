import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Category extends Component {
  state = {
    categoryProducts: [],
    selectedCategory: '',
  };

  async componentDidMount() {
    const category = await api.getCategories();

    this.setState({
      categoryProducts: category,
    });
  }

  getCategory = ({ target }) => {
    this.setState({ selectedCategory: target.id }, async () => {
      const { selectedCategory } = this.state;
      const { handleResult } = this.props;
      const products = await api.getProductsFromCategoryAndQuery(selectedCategory);
      return selectedCategory !== '' && handleResult(await products.results);
    });
  };

  render() {
    const { categoryProducts } = this.state;

    return (
      categoryProducts.map((category) => (
        <label data-testid="category" htmlFor={ category.id } key={ category.id }>
          <input
            type="radio"
            id={ category.id }
            name="category"
            onChange={ this.getCategory }
          />
          { category.name }
        </label>
      ))
    );
  }
}

Category.defaultProps = {
  handleResult: () => '',
};

Category.propTypes = {
  handleResult: PropTypes.func,
};

export default Category;
